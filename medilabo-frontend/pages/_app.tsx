import {AppProps} from "next/app";
import '../style/globals.css';
import AuthGuard from "@/guard/AuthGuard";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {QueryClient, QueryClientProvider} from "react-query";

const App = ({Component, pageProps}: AppProps) => {

    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ToastContainer
                    limit={3}
                    position={"top-right"}
                    pauseOnFocusLoss={false}
                    autoClose={2500}
                    theme={"dark"}
                    hideProgressBar={true}
                    newestOnTop={true}
                />
                <AuthGuard>
                    <Component {...pageProps} />
                </AuthGuard>
            </QueryClientProvider>
        </>
    );
};

export default App;