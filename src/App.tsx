import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import { getPhantomProvider, PhantomProvider } from "./providers";

import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const provider = getPhantomProvider();
  return (
    <PhantomProvider provider={provider}>
      <ChakraProvider theme={theme}>
        <Layout>
          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </Layout>
      </ChakraProvider>
    </PhantomProvider>
  );
}

export default App;
