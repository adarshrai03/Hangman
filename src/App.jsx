import { Route, Routes } from "react-router-dom";
import PlayGame from "./PlayGame/PlayGame";
import StartGame from "./StartGame/StartGame";
import Home from "./Home/Home"



function App() {



    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/play" element={<PlayGame />} />


                <Route path="/start" element={<StartGame />} />
            </Routes>

        </div>
    )
}
export default App;