function Button({text , btntype = 'button' , onClickHandler}){
    return(
        <div>
            <button 
                type={btntype}
                onClick={onClickHandler}    
                
            >
                {text}
            </button>
        </div>
    );
}

export default Button;