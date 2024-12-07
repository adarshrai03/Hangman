import "./LetterButton.css"
const ALPHABET = new Array(26).fill('').map((elmnt , index)=>String.fromCharCode(65+ index));
// ABCD.....Z and 65 is a ASCI value

function LetterButton({text , usedLetter , OnLetterClick}){

    const orgCharacter = new Set(text.toUpperCase().split(''));
    const letterUsed = new Set(usedLetter.join('').toUpperCase().split(''));

    const buttonStyling = function(letters){
        if(letterUsed.has(letters)){
            return `${orgCharacter.has(letters) ? 'bg-green-400' : 'bg-red-900'}`
        }
        else{ // if letter is not used 
            return 'bg-transparent hover:bg-orange-200'
        }
    }



    const button = ALPHABET.map(letter=>{
        return(

                    <button 
                    key={`button-${letter}`}
                    value = {letter}
                    disabled = {letterUsed.has(letter)}
                    onClick={() => OnLetterClick(letter)}
                    className={`keyboard-button h-12 w-12 rounded-md mx-1  ${buttonStyling(letter)}`}>

                    {letter}

                    </button>
                
                
            
            
        )
    })



    return (
        <div className="keyboard-container">
          <div className="keyboard">
            {button}
          </div>
        </div>
      );

}   

export default LetterButton;