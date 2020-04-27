import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import './App.css'



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={ language : 'english', color : ''}
    }

    onLanguageChange = (lang) =>{
        this.setState({language : lang})
    }

    onColorChange = (color) =>{
        this.setState({color : color})
    }

    render(){
        return(
            <div className="ui container">
                <div>
                    Select a language : 
                    <i onClick={() => this.onLanguageChange('english')} className="flag us"/>
                    <i onClick={() => this.onLanguageChange('dutch')} className="flag nl"/>
                    <i onClick={() => this.onLanguageChange('हिन्दी')} className="flag in"/>
                </div>

                <p>
                    <i className="language icon"></i> {this.state.language.toUpperCase()}
                </p>
                

                <div>
                    Select a Color of button: 
                    <i onClick={() => this.onColorChange('green')} className="flag cc"/>
                    <i onClick={() => this.onColorChange('red')} className="flag cn"/>
                    <i onClick={() => this.onColorChange('primary')} className="flag so"/>
                </div>

                
                <div className="page-content">
                    <ColorContext.Provider value={{color : this.state.color}}>
                        <LanguageContext.Provider value={{selectedLanguage : this.state.language}}>
                            <UserCreate/>
                        </LanguageContext.Provider>
                    </ColorContext.Provider>
                </div>
            </div>
        );
    }
}

export default App;