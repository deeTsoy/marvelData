import { useState } from "react";
import {Helmet} from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErorBoundary from "../errorBoundary/ErorBoundary";
import decoration from '../../resources/img/vision.png';
import CharSearchForm from "../charSearchForm/charSearchForm";

const MainPage = () =>{

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id);
    }

    return(
        <>
        <Helmet>
            <meta
                name="description"
                content="MARVEL"
                />
            <title>Marvel information portal</title>
        </Helmet>
            <ErorBoundary>
                <RandomChar/>
            </ErorBoundary>
            <div className="char__content">
                <ErorBoundary>
                    <CharList onCharSelected = {onCharSelected}/>
                </ErorBoundary>
                <div>
                    <ErorBoundary>
                        <CharInfo charId = {selectedChar}/>
                    </ErorBoundary>
                    <ErorBoundary>
                        <CharSearchForm/>
                    </ErorBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}


export default MainPage;