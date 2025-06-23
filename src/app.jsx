import { ChakraProvider } from '@chakra-ui/react'; 
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header/HeaderComponent';

// ChakraProvider deixa todos os componentes com o visual do Chakra UI
function App() {
  return (
    <ChakraProvider>
        <Header />
        <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
