import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Spinner,
  VStack,
  Heading,
  Tag,
  Stack,
  Flex
} from "@chakra-ui/react";

// Tradução das informações dos personagens
const statusPt = {
  Alive: 'Vivo',
  Dead: 'Morto',
  unknown: 'Desconhecido'
};

const generoPt = {
  Male: 'Masculino',
  Female: 'Feminino',
  Genderless: 'Sem Gênero',
  unknown: 'Desconhecido'
};

const especiePt = {
  Human: 'Humano',
  Alien: 'Alienígena',
  Robot: 'Robô',
  Humanoid: 'Humanoide',
  Animal: 'Animal',
  Mythological: 'Mitológica',
  Poopybutthole: 'Poopybutthole',
  Cronenberg: 'Cronenberg',
  unknown: 'Desconhecido'
};

function Detalhes() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);

        const episodeUrls = data.episode.slice(0, 5); 
        Promise.all(
          episodeUrls.map((url) =>
            fetch(url).then((res) => res.json())
          )
        ).then(setEpisodes);
      });
  }, [id]);

  if (loading) {
    return <Spinner size="xl" color="green.400" />;
  }

  return (
    <Flex justify="center" align="center" minH="100vh" bg="gray.900" color="white">
      <Box p="6" maxW="400px" mx="auto" borderWidth="1px" borderRadius="lg" boxShadow="md" bg="gray.800">
        <VStack spacing={4}>
          <Image
            src={character.image}
            alt={character.name}
            borderRadius="md"
            boxShadow="md"
          />
          <Heading size="md" textAlign="center">{character.name}</Heading>

          <Stack direction="row" spacing={2}>
            <Tag colorScheme="purple">{statusPt[character.status] || character.status}</Tag>
            <Tag colorScheme="green">{especiePt[character.species] || character.species}</Tag>
            <Tag colorScheme="blue">{generoPt[character.gender] || character.gender}</Tag>
          </Stack>

          <Text><strong>Origem:</strong> {character.origin.name}</Text>
          <Text><strong>Localização:</strong> {character.location.name}</Text>

          <Box pt={2} w="100%">
            <Heading size="sm" mb={1}>Episódios</Heading>
            <ul style={{ paddingLeft: "20px" }}>
              {episodes.map((ep) => (
                <li key={ep.id}>
                  <Text fontSize="sm">{ep.episode} - {ep.name}</Text>
                </li>
              ))}
            </ul>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default Detalhes;
