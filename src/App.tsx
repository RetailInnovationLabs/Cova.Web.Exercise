import {
  Button,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Highlight,
  Image,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import useSWR from "swr";
import { Form } from "./components";
import { getPokemonAbilities } from "./services/pokemon";

const Title = ({ title, query }: { title: string; query: string }) => (
  <Center>
    <Heading padding={3}>
      <Highlight
        query={query}
        styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
      >
        {title}
      </Highlight>
    </Heading>
  </Center>
);

const SEARCH_FORM_ID = "pokemon-search-form";

function App() {
  const toast = useToast();
  const [currentPokemonSearching, setCurrentPokemonSearching] = useState("");
  const { data: pokemonAbilities } = useSWR(
    [currentPokemonSearching, "PokemonAbilities"],
    getPokemonAbilities,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        if (data.length) {
          toast({
            title: "Abilities Found",
            description: "We have found some abilities for your pokemon",
            status: "success",
          });
        }
      },
    }
  );

  const title = currentPokemonSearching
    ? `You are currently searching for ${currentPokemonSearching}`
    : "Please search for a pokemon and pick some abilities.";

  const handleOnSubmitForm = () => {
    // Submit your form here
  };

  return (
    <ChakraProvider>
      <Title title={title} query={currentPokemonSearching} />
      <Center>
        <Flex color="white" gap="16px" padding="2">
          <Center>
            <Form setCurrentPokemonSearching={setCurrentPokemonSearching} searchFormId={SEARCH_FORM_ID} />
          </Center>
          <Center>
            <UnorderedList>
              {(pokemonAbilities ?? []).map(({ name, url, image }) => (
                <ListItem color="teal.500" key={url}>
                  {name}
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={image}
                    alt={name}
                  />
                </ListItem>
              ))}
            </UnorderedList>
          </Center>
        </Flex>
      </Center>
      <Center>
        <Button form={SEARCH_FORM_ID} colorScheme="teal" size="md">
          Search Pokemon
        </Button>
      </Center>
    </ChakraProvider>
  );
}

export default App;
