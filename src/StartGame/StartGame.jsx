import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../TextInputForm/TextInputFormContainer";
import "./StartGame.css"

function StartGame() {
    const navigate = useNavigate();

    function handleSubmit(inputvalue) {
        navigate('/play' , {state : {wordSelected :inputvalue}}); // This will navigate to the PlayGame page
        
    }

    

    return (
        <div className="start-game">
            <TextInputFormContainer onSubmit={handleSubmit} />
        </div>
    );
}

export default StartGame;
