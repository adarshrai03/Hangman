export function getAllCharacters(word , usedLetter){
    usedLetter = usedLetter.map(letter => letter.toUpperCase());
    const guessedLetter = new Set(usedLetter);
    
    const characters = word.toUpperCase().split('').map(char=>{
        if(guessedLetter.has(char)){
            return char;
        }    
        return '_';
    });
    return characters.join('');
}