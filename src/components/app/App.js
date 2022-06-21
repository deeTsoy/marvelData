import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErorBoundary from "../errorBoundary/ErorBoundary";

import decoration from '../../resources/img/vision.png';

class App extends Component {

 state = {
    selectedChar: null
 }

 onCharSelected = (id) => {
    this.setState({
        selectedChar: id
    })
 } 


    render(){
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErorBoundary>
                        <RandomChar/>
                    </ErorBoundary>
                    <div className="char__content">
                        <ErorBoundary>
                            <CharList onCharSelected = {this.onCharSelected}/>
                        </ErorBoundary>
                        <ErorBoundary>
                            <CharInfo charId = {this.state.selectedChar}/>
                        </ErorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;