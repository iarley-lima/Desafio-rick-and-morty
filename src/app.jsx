import { ChakraProvider } from '@chakra-ui/react'; 
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '././routes/routes';


// ChakraProvider deixa todos os componentes com o visual do Chakra UI
function app() {
  return (
    <ChakraProvider>
        <AppRoutes />
    </ChakraProvider>
  );
}

export default app;
