# Getting Started with Cova Exercise
This project has been created in order to show your skills, you are able to look into documentation but not ask for help. 



## Installation

```js
yarn install
yarn start
```
### Requirements
Node: v16.15.1

## Instructions

### Form
The form should validate on submission
* Input value doesn't have numbers
* Input value length is bigger than 0

Field 
* It should show an error only after the user has submitted or touched the field
* It should clear itself after it has successfully set a value into the parent

Validation
* There an schema validation that needs to be implemented to make sure Formik can detect errors on the form

Handle Submit Function
* handleSubmit from useFormik should be exposed to the parent

### Service 
* There can be more than one request and you can add more interfaces but expected interfaces can't be removed
* Throw an error when the unique parameter length is less than 2 characters
* useSWR should handle errors

### Interfaces
* The interface expects to get 3 properties which most of which are available when requested
```js
export interface PokemonAbility {
    name: string;
    url: string
    image?: string;
}
```
Note: The sprites property contains images that can be used to populate the desired interface

### Root App
* The user should be able to click the button and trigger the form - You can not move the button within the children component.


## Submission

Fork this project and share with us your GitHub repository, you can add screenshots if needed and explain how you have completed this task. Please make sure not to ask for help as mentioned at the top of this ReadMe. 

We will evaluate how you organize your code and implemented your solution, you are expected to have this repo showing a list of abilities with images which is already built for you.

## Some test strings you can use 
* charmander
* ditto
* pikachu



