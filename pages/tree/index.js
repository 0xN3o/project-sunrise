import Navbar from "../../components/navbar/navbar";
import PageHead from "../../components/pagehead";
import Footer from "../../components/footer/footer";
import BinaryTree from "../../components/tree/graph";

export default function Home() {
  return (
    <div>
      <PageHead title="Home" />
      <main>
        <Navbar activeKey="home" />
        <BinaryTree target={100005} user={100006} />
      </main>
      <Footer />
    </div>
  );
}
