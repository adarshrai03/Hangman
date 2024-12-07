import "./Textinput.css"
function TextInput({label , type="text" , value , onChange}){



    return(
         
        <label className="block">
            {label && <span className="">{label}</span>}

            <input 
                className="form-input px-4 py-1 "
                placeholder={label}
                type = {type}
                onChange={onChange}
                value={value}
            />
        </label>
            


    )
}

export default TextInput;