import Header from "@/components/Header/HeaderComponent";
import Footer from "@/Footer/Footer";
import { Box, Text, Image } from '@chakra-ui/react';

function Home() {
  return (
    <>
      <Box
      bg="black"
      minH="100vh"
      color="#ffffff"
      pt="150px"
      overflow="hidden"
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      >

      <Image
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif"
        alt="Rick and Morty Logo"
        mb={4} 
      />

      <Text fontSize="60px" fontWeight="bold" color="#3FE38C">
        Seja bem vindo ao segundo desafio!
      </Text>
            
      <Text fontSize="20px" color="#ffff">
        Aqui você vai conhecer um pouco 
        sobre os personagens da série america Rick and Morty.
      </Text>

      </Box>
      <Footer />
    </>  
  );
}

export default Home;