import { useAppContext } from "../context/appcontext";

import { getTree } from "../../utils/contract";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const Graph = dynamic(
  import("react-graph-vis").then((mod) => mod),
  { ssr: false }
);
import { uuid } from "uuidv4";

export default function BinaryTree(props) {
  const { contract, appModal, setAppModal } = useAppContext();
  const { target, user } = props;

  useEffect(() => {
    if (contract) {
      init();
    }
  }, [contract]);

  async function updateGraph(tokenId) {
    // Show loading
    setAppModal({
      ...appModal,
      show: true,
      type: "progress",
      title: "Loading",
      description: "Fetching on-chain data.",
    });

    const { connections, nfts } = await getTree(contract, tokenId, user);
    setGraph({
      nodes: nfts,
      edges: connections,
    });

    // Hide loading
    setAppModal({
      ...appModal,
      show: false,
      type: "progress",
      title: "Loading",
      description: "Fetching on-chain data.",
    });
  }

  async function init() {
    updateGraph(target);
  }

  const [graph, setGraph] = useState({
    nodes: [],
    edges: [],
  });

  const options = {
    autoResize: true,
    height: "100%",
    width: "100%",
    edges: {
      chosen: false,
      color: "#000",
      arrows: {
        to: false,
      },
      width: 2,
    },
    nodes: {
      chosen: false,
      shape: "custom",
      size: 80,
    },
    layout: {
      hierarchical: {
        sortMethod: "directed",
        shakeTowards: "roots",
      },
    },
    interaction: {
      selectable: true,
      selectConnectedEdges: false,
      dragView: false,
      zoomView: false,
    },
  };

  const events = {
    select: function (event) {
      var { nodes } = event;
      if (nodes.length) {
        updateGraph(nodes[0]);
      }
    },
  };

  return (
    <div className="mx-auto px-4 lg:px-12 py-12 max-w-7xl text-black">
      <h1 className="font-bold text-3xl lg:text-5xl">Tree Explorer</h1>
      <p className="mt-4">
        Tree explorer shows you the current on-chain NFT structure of Project
        Sunrise. Click on the rectangle to expand its child.
      </p>
      <div className="mt-4 h-screen bg-gray-200 border-4 border-black border-dashed p-4">
        {graph.nodes.length === 0 ? (
          <>Please connect your wallet to view the tree info.</>
        ) : (
          <Graph key={uuid()} graph={graph} options={options} events={events} />
        )}
      </div>
    </div>
  );
}
