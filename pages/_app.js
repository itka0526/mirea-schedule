import ScrollToTop from "../components/ScrollToTop";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ScrollToTop />
        </>
    );
}

export default MyApp;
