// Container
import { useState , useContext } from "react";
import TextInputFormPresentation from "./TextInputFormPresentation";
import { InputValueContext } from "../InputValue/InputValueContext";
import run from "../Gemini/Gemini.js";

function TextInputFormContainer({onSubmit}){


    
    const { inputvalue } = useContext(InputValueContext);
    const { setValue } = useContext(InputValueContext);
    const [inputType , setInputType] = useState('password');


    const result = useContext(InputValueContext);
    const {setResult} = useContext(InputValueContext);

    const handleFetchData = async () => {
        try {
          const response = await run(inputvalue); // Replace "happiness" with your desired prompt
          setResult(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };







    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted with input:", inputvalue);
    
        // Fetch the data before proceeding
        await handleFetchData();
    
        // Print the result after data fetching is complete
        console.log(result);
    
        // Call the onSubmit prop if it exists
        if (onSubmit) {
          onSubmit(inputvalue);
        }
      };

    


    function handleTextInputChange(event){
        console.log(event.target.value);
        setValue(event.target.value);

    }

    return(

        <TextInputFormPresentation
            handleFormSubmit = {handleFormSubmit}
            handleTextInputChange = {handleTextInputChange}
            value = {inputvalue}
            setInputType = {setInputType}
            inputType = {inputType}
        />


    )
}

export default TextInputFormContainer;