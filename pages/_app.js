import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps} />
    );
}
export default MyApp;
