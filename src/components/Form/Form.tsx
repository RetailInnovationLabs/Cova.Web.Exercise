import { Input } from "@chakra-ui/input";
import { FormControl , FormErrorMessage } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";
import { useFormik } from "formik";
import { pokemonSearchSchema } from "../../validation/pokemon";
import { PokemonSearchForm } from '../../interfaces/pokemon';

interface FormProps {
  setCurrentPokemonSearching: React.Dispatch<React.SetStateAction<string>>;
  searchFormId: string;
}

export const Form = ({ setCurrentPokemonSearching , searchFormId }: FormProps) => {
    // You must use all properties below
  const { values, errors, handleSubmit, handleBlur , handleChange } = useFormik<PokemonSearchForm>({
    initialValues: {
      searchValue: "",
    },
    validationSchema: pokemonSearchSchema,
    onSubmit: (values : PokemonSearchForm) => {
        // This should be called only when values.searchValue has not number and the length is bigger than 0
      setCurrentPokemonSearching(values.searchValue);
    },
  });

  // Call handleSubmit function from useFormik below

  return (
    <Container bg="white">
      <form id={searchFormId}>
        <FormControl isInvalid={Boolean(errors.searchValue)}>
          {/* Show errors when value contains numbers after the user left the field, you can allow users to type numbers but it will need to show the error message*/}
          {/* Add the right properties to the input field to work with the form */}
          <Input placeholder="Type to search"  textColor="black" isInvalid={Boolean(errors.searchValue)} name="searchValue" onChange={handleChange} value={values.searchValue}/>
          {errors.searchValue ? <FormErrorMessage>{errors.searchValue}</FormErrorMessage> : <></>}
        </FormControl>
      </form>
    </Container>
  );
};
