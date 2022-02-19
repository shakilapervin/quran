import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider
            options={{
                staleTime: 0,
                refetchInterval: 0,
            }}
            session={pageProps.session}
        >
            <Component {...pageProps} />
        </SessionProvider>
    );
}


export default MyApp;
