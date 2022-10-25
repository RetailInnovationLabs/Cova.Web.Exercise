import { object, string } from "yup";

// Value must have at least 2 characters
// Value must not have numbers
// It should a clear message when the error is present
// Field is required

const NO_NUMBER_REGEXP = /^([^0-9]*)$/;

export const pokemonSearchSchema = object({
  searchValue: string()
    .min(2)
    .required("Please enter a pokemon name")
    .matches(NO_NUMBER_REGEXP, "Pokemon name should not contain numbers"),
});
