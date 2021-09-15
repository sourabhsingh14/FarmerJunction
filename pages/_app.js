import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
