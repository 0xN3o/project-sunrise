import { useAppContext } from "../context/appcontext";

import { get_tree } from "../../utils/contract";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const Graph = dynamic(
  import("react-graph-vis").then((mod) => mod),
  { ssr: false }
);
import { uuid } from "uuidv4";

export default function BinaryTree(props) {
  const { contract } = useAppContext();
  const { target, user } = props;

  useEffect(() => {
    if (contract) {
      init();
    }
  }, [contract]);

  async function updateGraph(tokenId) {
    const { connections, nfts } = await get_tree(contract, tokenId, user);
    setGraph({
      nodes: nfts,
      edges: connections,
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
      color: "#000",
      arrows: {
        to: false,
      },
    },
    nodes: {
      color: {
        border: "#000",
        background: "#fff",
        // hightlight: {
        //   border: "#000",
        //   background: "#fff",
        // },
      },
      font: {
        color: "#000",
      },
      shape: "circle",
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
    },
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
      if (nodes.length) {
        updateGraph(nodes[0]);
      }
    },
  };

  return (
    <div className="h-screen">
      {graph.nodes.length === 0 ? (
        <div className="bg-black text-white grid pb-2">
          <span className="m-auto">
            Loading... (Please connect your wallet if you havent already)
          </span>
        </div>
      ) : (
        <Graph
          key={uuid()}
          graph={graph}
          options={options}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
      )}
    </div>
  );
}
