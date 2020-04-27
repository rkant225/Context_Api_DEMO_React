import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component{
    static contextType = LanguageContext;
    render(){
        const labelText = this.context.selectedLanguage === 'english' ? 'Name' : this.context.selectedLanguage === 'हिन्दी' ? 'नाम' : 'Naam';
        return(
            <div className="ui field">
                <label>{labelText} : </label>
                <input type="text" />
            </div>
        );
    }
}

export default Field;