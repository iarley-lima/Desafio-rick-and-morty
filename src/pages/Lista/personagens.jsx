import { Box } from "@chakra-ui/react";
import Header from "@/components/Header/HeaderComponent";
import Footer from "@/Footer/Footer";
import Cards from "@/pages/Cards";

function personagens() {
  return (
    <Box bg="gray.900" color="white" minH="100vh" py={10} px={4}>
      <Header />
      <Cards />
      <Footer />
    </Box>
  );
}

export default personagens;
