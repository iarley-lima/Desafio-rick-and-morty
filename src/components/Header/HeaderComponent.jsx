import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <Box bg="#000000" top="0" width="100%" height="60px" zIndex="1000">
      <Flex
        h="100%"
        px="0.75rem"
        fontSize="1.5rem"
        align="center"
        justify="space-around"
      >
        <Link 
            as={RouterLink} to="/" 
            _hover={{ textDecoration: "none" }} 
            fontSize="2rem" fontWeight="500" 
            color="#3FE38C" ml="35px"
            >
          Desafio 2
        </Link>
        
        <Link
          as={RouterLink}
          to="/personagens"
          fontSize="1.5rem"
          color="#3FE38C"
          textDecoration="none"
          px="0.5rem"
          _hover={{ textDecoration: "none" }}
        >
          Personagens
        </Link>
      </Flex>
    </Box>
  );
}
