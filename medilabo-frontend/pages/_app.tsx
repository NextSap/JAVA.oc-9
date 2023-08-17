import {AppProps} from "next/app";
import '../style/globals.css';
const App = ({Component, pageProps}: AppProps) => {

    return (
        <Component {...pageProps} />
    );
};

export default App;