import Navbar from "../components/navbar/navbar";
import PageHead from "../components/pagehead";
import Footer from "../components/footer/footer";
import Dashboard from "../components/dashboard/dashboard";

export default function Home() {
  return (
    <div>
      <PageHead title="Dashboard" />
      <main>
        <Navbar activeKey="dashboard" />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
