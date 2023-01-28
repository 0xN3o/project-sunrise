export async function getTree(contract, target, user) {
  let parent;
  await contract.methods
    .parentOfToken(target)
    .call()
    .then((tokenId) => {
      parent = tokenId === "0" ? "100000" : tokenId;
    });
  const colors = {
    [target]: "#FFE13F",
    [user]: "#128CC1",
  };
  return await getChildren(parent, contract, colors);
}

async function getChildren(root, contract, colors) {
  let nfts = [];
  let connections = [];

  const max_depth = 3;
  let queue = [[root, 0]];
  while (queue.length > 0) {
    const [parent, cur_depth] = queue.shift();
    nfts.push({
      id: parent,
      label: "NFT ID:\n" + parent,
      color: { background: colors[parent] },
    });
    if (cur_depth < max_depth) {
      let children;
      await contract.methods
        .referralTree(parent)
        .call()
        .then((tokenId) => {
          children = tokenId;
        });

      children.forEach((child) => {
        queue.push([child, cur_depth + 1]);
        connections.push({ from: parent, to: child });
      });
    }
  }

  return { connections: connections, nfts: nfts };
}
