import "../styles/globals.css";
import Layout from "../components/Layout";
import { DataProvider } from "../store/GlobalState";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/404.css";
import "../styles/home.css";
import "font-awesome/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
