import "../styles/globals.css";
import { AppWrapper } from "../components/context/appcontext";
import Modal from "../components/modal/modal";

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Modal />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
