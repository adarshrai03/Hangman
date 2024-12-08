import { Link, useLocation } from "react-router-dom";
import Masked from "../MaskedTest/Masked";
import LetterButton from "../LetterButton/LetterButton";
import { useState , useContext , useEffect} from "react";
import HangManImages from "../ImagesSetUp/HangManImages";
import "./PlayGame.css";
import { InputValueContext } from "../InputValue/InputValueContext";

function PlayGame(){

    const[usedLetter , setUsedLetter] = useState([]);

    const[step , setStep] = useState(0);

    const [correctStep , setCorrectStep] = useState(0);

    const {result} = useContext(InputValueContext)

    const gemini_data = result;

    const handleLetterClick = function(letter){
        if(Selectedword.toUpperCase().includes(letter)){
            console.log('Correct');
            setCorrectStep(correctStep+1);
        }
        else {
            console.log('Incorrect');
            setStep(step+1);
        }


        setUsedLetter([...usedLetter , letter]);
    }


    const location = useLocation();
    const Selectedword = location.state?.wordSelected;

    const SelectedwordArray = Selectedword.toUpperCase().split("");
    SelectedwordArray.sort();
    let Wordlength = 0;

    for(let i = 0 ; i < SelectedwordArray.length ; i++){
        
        if(SelectedwordArray[i] != SelectedwordArray[i+1]){
            Wordlength = Wordlength + 1;
        }
        
    }

    return (
        <div className="main-playgame">



            {(() => {
                if (step > 5) {
                    // Game Over box
                    return (
                        <div className="game-over-box">
                            <p>
                                Your word is :
                                <hr className="p-2" />
                                <span className="selected-word">{Selectedword}</span>
                            </p>
                            <a href="/">Return to Home</a>
                        </div>
                    );
                    
                } 
                
                if(correctStep >= Wordlength){

                    return (
                        <div className="game-win-box">
                            <p className="game-won-word">
                                Your Word is : {Selectedword}
                            </p>
                            <p className="return"> <a href="/">Return to Home</a></p>
                            
                        </div>


                    )
                    
                }
                
                
                
                else {
                    // Main Game Components
                    return (
                        <>
                            <div className="sub-playgame1">
                                <HangManImages step={step} />
                            </div>

                            <div className="sub-playgame2">


                                <div className="gemini-hint">
                                    <p>Hint : {result}</p>
                                </div>

                                <div className="sub-playgame2a">
                                    <div className="sub-playgame21">
                                        <Masked word={Selectedword} usedLetter={usedLetter} />
                                    </div>

                                    <hr />

                                    <div className="sub-playgame22">
                                        <LetterButton
                                            text={Selectedword}
                                            usedLetter={usedLetter}
                                            OnLetterClick={handleLetterClick}
                                        />
                                    </div>

                                </div>

                                
                            </div>
                        </>
                    );
                }
            })()}
        </div>
    );
}

export default PlayGame;
