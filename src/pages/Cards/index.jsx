import { Box, Image, Heading, Spinner, SimpleGrid, Text, Button, Flex, Input, Center } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
//----------------- axios e API --------------------
  useEffect(() => {
    axios
      .get(
        "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
      )
      .then((res) => {
        setPersonagens(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar personagens:", err);
        setLoading(false);
      });
  }, []);

 
  if (loading) {
    return (
      <Center h="100vh" bg="gray.900">
        <Spinner size="xl" color="green.400" />
      </Center>
    );
  }
  
//------------------------ barra de pesquisa --------------------------
  return (
    <Box bg="gray.900" color="white" py={10} minH="100vh" px={{ base: 4, md: 10 }}>
      <Flex justify="center" mb={6}>
        <Input
          placeholder="Pesquisar personagem..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          bg="white"
          color="black"
          maxW="400px"
          w="100%"
        />
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
        {personagens
          .filter((p) =>
            p.name.toLowerCase().includes(busca.toLowerCase())
          )
          .map((personagem) => (
            <Box
              key={personagem.id}
              bg="white"
              color="black"
              p={5}
              borderRadius="md"
              boxShadow="lg"
              maxW="300px"
              mx="auto"
              textAlign="center"
            >
              <Image
                src={personagem.image}
                alt={`Foto de ${personagem.name}`}
                borderRadius="xl"
                objectFit="cover"
                mx="auto"
                mb={4}
              />
              <Heading fontSize="lg" mb={2}>
                {personagem.name}
              </Heading>

              <Link to={`/personagem/${personagem.id}`}>
                <Button size="sm" colorScheme="green" mt={2}>
                  Ler mais
                </Button>
              </Link>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default Cards;
