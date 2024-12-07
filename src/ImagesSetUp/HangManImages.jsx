import Level1 from '../assets/HangManImg/Image1.png';
import Level2 from '../assets/HangManImg/Image2.png';
import Level3 from '../assets/HangManImg/Image3.png';
import Level4 from '../assets/HangManImg/Image4.png';
import Level5 from '../assets/HangManImg/Image5.png';
import Level6 from '../assets/HangManImg/Image6.png';
import Level7 from '../assets/HangManImg/Image7.png';
import Level8 from '../assets/HangManImg/Image8.png';


function HangManImages({step}){
    const HangManImages = [Level1 , Level2 , Level3 , Level4 , Level5 , Level6 , Level7 , Level8];

    return(
        <div className='w-full h-full'>
            <img  src={step >= HangManImages.length ? HangManImages[HangManImages.length-1] : HangManImages[step]}
            className="w-full h-full object-contain"
            />
        </div>
    )
}
export default HangManImages;