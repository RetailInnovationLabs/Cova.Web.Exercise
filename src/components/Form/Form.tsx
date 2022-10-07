import { Input } from "@chakra-ui/input";
import { Container } from "@chakra-ui/layout";
import { useFormik } from "formik";
import { pokemonSearchSchema } from "../../validation/pokemon";

interface FormProps {
  setCurrentPokemonSearching: React.Dispatch<React.SetStateAction<string>>;
}

export const Form = ({ setCurrentPokemonSearching }: FormProps) => {
    // You must use all properties below
  const { values, errors, handleSubmit, handleBlur } = useFormik<{ searchValue: string }>({
    initialValues: {
      searchValue: "",
    },
    validationSchema: pokemonSearchSchema,
    onSubmit: (values) => {
        // This should be called only when values.searchValue has not number and the length is bigger than 0
      setCurrentPokemonSearching(values.searchValue);
    },
  });

  // Call handleSubmit function from useFormik below

  return (
    <Container bg="white">
      {/* Show errors when value contains numbers after the user left the field, you can allow users to type numbers but it will need to show the error message*/}
      {/* Add the right properties to the input field to work with the form */}
      <Input placeholder="Type to search" isInvalid  textColor="black"/>
    </Container>
  );
};
