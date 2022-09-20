import ScrollToTop from "../components/ScrollToTop";
import "../styles/globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ScrollToTop />
            <GoogleAnalytics
                measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            />
        </>
    );
}

export default MyApp;
