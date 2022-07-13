import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErorBoundary from "../errorBoundary/ErorBoundary";

import decoration from '../../resources/img/vision.png';

const App = () => {

const [selectedChar, setChar] = useState(null)


 const onCharSelected = (id) => {
    setChar(id);
 } 
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErorBoundary>
                    <RandomChar/>
                </ErorBoundary>
                <div className="char__content">
                    <ErorBoundary>
                        <CharList onCharSelected = {onCharSelected}/>
                    </ErorBoundary>
                    <ErorBoundary>
                        <CharInfo charId = {selectedChar}/>
                    </ErorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}


export default App;