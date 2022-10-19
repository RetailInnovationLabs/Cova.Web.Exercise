
  

# Cova Web - Take Home 

## Introduction

This is the take home exercise for Cova for a web developer role conducted before a technical interview. We will evaluate how you organize your code and implement your solution. You are expected to have this repo showing a list of required activities with images.


## Expectations

- Clean, readable, high quality code using TypeScript and React 16+ best practices. 
- Reasoning behind major decisions and understanding of relative benefit can be discussed in the following technical interview. 
- Official documention for React, JavaScript etc should be the primary reference point. Referring to other sources is the reality of developer life but arbitary copy/pasting of code is discouraged and as mentioned the technical interview will discuss the reasoning behind decisions made. 
- Comment in the code if something is unclear,  assumptions have been made or general design decisions when appropriate.  


## Ways to get help?

If you have any questions please email webdev@covasoftware.com and we will get back to you as soon as possible. 


## Time estimate

You should spend maximum 2 hours on this task. 


## Getting Started

### Pre-requisites
  
- Node.js version 16+
- Fork the folllowing repo and start the project.

```js
yarn install
yarn start
```


## Required Activities

### Form

- The form should validate the following on submission:

	* Input value doesn't have numbers.
	* Input value length is bigger than 0.


#### Fields

* Should show an error only after the user has submitted or touched the field.
* Should clear after it has successfully setting a value in the parent.

  
#### Validation

* There an schema validation that needs to be implemented to make sure Formik can detect errors on the form


##### Handle Submit Function

* `handleSubmit` from useFormik should be exposed to the parent

  
### Service

There can be more than one request and you can add more interfaces but expected interfaces can't be removed (DR - CHECK THIS)

* Throw an error when the unique parameter length is less than 2 characters
* `useSWR` should handle the errors

  

  

### Root App

* The user should be able to click the button and trigger the form  (nb: You can not move the button within the child component).

  
## Submission of task

Fork or create a instance of [this project](https://github.com/RetailInnovationLabs/Cova.Web.Exercise/generate) and send a link to your repository. You can add screenshots/comments if needed and explain how you have completed this task.
