import { getAllCharacters } from "./MaskedTestUtility";
import "./MaskedTest.css";

function Masked({word , usedLetter}){

    const letters = getAllCharacters(word , usedLetter).split('');

    return(
        <>

        {letters.map((word , index) =>{
            return(
                
                    <span key={`word-${index}`}  className="Dash">{word}</span>
                
                
            )
        })}

        </>
    )
    
}

export default Masked;