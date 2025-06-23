import { ChakraProvider } from '@chakra-ui/react'; 
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header/HeaderComponent';

function App() {
  return (
    <ChakraProvider>
        <Header />
        <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
