import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Host from './app/Host';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Host />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
