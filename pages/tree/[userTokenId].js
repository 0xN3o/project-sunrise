import Navbar from "../../components/navbar/navbar";
import PageHead from "../../components/pagehead";
import Footer from "../../components/footer/footer";
import BinaryTree from "../../components/tree/graph";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { userTokenId } = router.query;
  return (
    <div>
      <PageHead title="Home" />
      <main>
        <Navbar activeKey="home" />
        <BinaryTree target={userTokenId} user={userTokenId} />
      </main>
      <Footer />
    </div>
  );
}
