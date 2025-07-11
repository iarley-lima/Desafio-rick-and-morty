import { Box } from "@chakra-ui/react";
import Footer from "@/Footer/Footer";
import Cards from "@/pages/Cards";

// página que roda o cabeçalho, os cards com os personagens e o rodapé
function personagens() {
  return (
    <Box bg="gray.900" color="white" minH="100vh" py={10} px={4} >          
      <Cards />           
      <Footer />           
    </Box>
  );
}

export default personagens;
