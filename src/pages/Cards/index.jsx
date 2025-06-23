import { Box, HStack, Image, Tag, Heading, Center, Spinner, SimpleGrid, Text, Button, Flex } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Input } from "@chakra-ui/react";

function Cards() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]')
      .then((res) => {
        setPersonagens(res.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar personagens:', err);
        setLoading(false);
      });
}, []);


  return (
    <Box bg="gray.900" color="white" py="10" minH="100vh">
    <Flex justify="center" mb={6}>
      <Input
        placeholder="Pesquisar personagem..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        mb={6}
        bg="white"
        color="black"
        maxW="400px"
      />
    </Flex>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="8" px="10">
        {personagens
          .filter((p) =>
            p.name.toLowerCase().includes(busca.toLowerCase())
          )
          .map((personagem) => (
            <Box
              key={personagem.id}
              bg="white"
              p="6"
              borderRadius="md"
              boxShadow="md"
              maxW="300px"
              mx="auto"
              >
            <Image
                src={personagem.image}
                alt={`Foto de ${personagem.name}`}
                borderRadius="xl"
                objectFit="cover"
                mx="auto"
            />
            <Heading my="4" size="md" textAlign="center" color="Black">
                {personagem.name}
            </Heading>
          
          <Link to={`/personagem/${personagem.id}`}>
            <Button size="sm" colorScheme="green" mt={2}>Ler mais</Button>
          </Link>


          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Cards;