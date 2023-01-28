import Navbar from "../../components/navbar/navbar";
import PageHead from "../../components/pagehead";
import Footer from "../../components/footer/footer";
import BinaryTree from "../../components/tree/graph";
import { useRouter } from "next/router";

export default function TreeExplorer() {
  const router = useRouter();
  const { tokenId } = router.query;
  return (
    <div>
      <PageHead title="Tree Explorer" />
      <main>
        <Navbar activeKey="tree-explorer" />
        <BinaryTree target={tokenId} user={tokenId} />
      </main>
      <Footer />
    </div>
  );
}
