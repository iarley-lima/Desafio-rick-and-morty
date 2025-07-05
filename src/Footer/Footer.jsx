import { Box, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      width="100%"
      position="fixed"
      bottom="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="black"
      color="#9FA6A8"
      padding="0.5rem"
    >
      <Heading as="h2" fontSize="1rem" fontWeight="500">
        Desafio 2 &copy; Desenvolvido por Iarley Lima 2025
      </Heading>
    </Box>
  );
};

export default Footer;
