import Navbar from "../components/navbar/navbar";
import PageHead from "../components/pagehead";
import Footer from "../components/footer/footer";
import WhitepaperPage from "../components/whitepaper/whitepaper";

export default function HowItWorks() {
  return (
    <div>
      <PageHead title="Whitepaper" />
      <main>
        <Navbar activeKey="whitepaper" />
        <WhitepaperPage />
      </main>
      <Footer />
    </div>
  );
}
