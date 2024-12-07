// Presentation
import Button from "../Button";
import TextInput from "../Textinput/TextInput";
import "./TextInputPres.css"

function TextInputFormPresentation({handleFormSubmit, handleTextInputChange, value, inputType, setInputType}) {

    return (
        <form className="TextInputForm flex ml-2" onSubmit={handleFormSubmit}>

            <div className="suggestionText">
                <TextInput
                    label="Type a word or phrase :"
                    type={inputType}
                    onChange={handleTextInputChange}
                    value={value}
                />
            </div>

            <div className="TextInputButton">
            <div className="TIB">
                <Button
                    text="OK"
                    btntype="submit"
                />
            </div>

            <div className="TIB">
                <Button
                    text={inputType == 'password' ? 'Show' : 'Hide'}
                    onClickHandler={() => {
                        setInputType(inputType == 'password' ? 'text' : 'password')
                    }}
                />
            </div>
            </div>

            



        </form>
    );
}

export default TextInputFormPresentation;