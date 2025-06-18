import { Box, HStack, Image, Tag, Heading, Center } from "@chakra-ui/react"

function Cards() {
    return (
        <Center as="section" bg="gray.100" h="100vh">
            <Box maxW="420px" bg="White" p="6">
            <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
                alt="foto Rick"
                borderRadius="xl"
                objectFit="cover"
                mx="auto"
            />
            <HStack mt="5" spacing="3">
                {["Rick", "C-137"].map((item) => (
                    <Tag key={item} variant="outline">
                        {item}
                    </Tag>
                ))}
            </HStack>
            <Heading my="4" size="lg">Rick Sanchez</Heading>
            <Center my="6">
                <button>Leia mais</button>
            </Center>
            
            </Box>
        </Center>
    );
}

export default Cards;