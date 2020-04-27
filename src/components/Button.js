import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component{

    render(){
        const buttonText = this.context.selectedLanguage === 'english' ? 'Submit' : 'Voorleggen';
        return(
            <div>
                <LanguageContext.Consumer>
                    {(language) =>{
                        return (
                            <ColorContext.Consumer>
                                {(color) => {
                                    const buttonText = language.selectedLanguage === 'english' ? 'Submit' : language.selectedLanguage === 'हिन्दी' ? 'प्रस्तुत करें': 'Voorleggen';
                                    const buttonColor = color.color;

                                    return(
                                        <button className={`ui button ${buttonColor}`}>{buttonText}</button>
                                    )
                                }}
                            </ColorContext.Consumer>
                        )
                    }}
                </LanguageContext.Consumer>
                
            </div>
        );
    }
}

export default Button;