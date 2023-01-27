import Navbar from "../components/navbar/navbar";
import PageHead from "../components/pagehead";
import PageHome from "../components/home/home";
import Footer from "../components/footer/footer";
import ProductDetails from "../components/home/productdetails";

export default function Home() {
  return (
    <div>
      <PageHead title="Home" />
      <main>
        <Navbar activeKey="home" />
        <PageHome />
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
}
