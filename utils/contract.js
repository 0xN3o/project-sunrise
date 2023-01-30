import { createCtxRenderer } from "./graph";

export async function getParentOf(contract, tokenId) {
  return await contract.methods
    .parentOfToken(tokenId)
    .call()
    .then((parent) => {
      return parent === "0" ? "100000" : parent;
    });
}
export async function getOwnerOf(contract, tokenId) {
  return await contract.methods
    .ownerOf(tokenId)
    .call()
    .then((address) => {
      return address;
    });
}

export async function getTree(contract, target, user) {
  let parentToken = await getParentOf(contract, target);
  let parentAddress = await getOwnerOf(contract, parentToken);
  let grandparentToken = await getParentOf(contract, parentToken);
  let grandparentAddress = await getOwnerOf(contract, grandparentToken);

  return await getChildren(
    parentToken,
    parentAddress,
    grandparentAddress,
    user,
    target,
    contract
  );
}

async function getChildren(
  rootToken,
  rootTokenAddress,
  rootParentAddress,
  user,
  target,
  contract
) {
  let nfts = [];
  let connections = [];

  const max_depth = 3;
  let queue = [[rootToken, rootTokenAddress, rootParentAddress, 0]];
  while (queue.length > 0) {
    const [selfTokenId, selfAddress, parentAddress, cur_depth] = queue.shift();
    nfts.push({
      id: selfTokenId,
      label: "NFT ID:\n" + selfTokenId,
      // TODO: seperate this to another function
      ctxRenderer: createCtxRenderer(
        selfAddress,
        parentAddress,
        selfTokenId,
        selfTokenId === user
          ? "#FFE13F"
          : selfTokenId === target
          ? "#128CC1"
          : null
      ),
    });
    if (cur_depth < max_depth) {
      let children;
      await contract.methods
        .referralTree(selfTokenId)
        .call()
        .then((tokenId) => {
          children = tokenId;
        });

      for (const childToken of children) {
        queue.push([
          childToken,
          await getOwnerOf(contract, childToken),
          selfAddress,
          cur_depth + 1,
        ]);
        connections.push({ from: selfTokenId, to: childToken });
      }
    }
  }
  return { connections: connections, nfts: nfts };
}
