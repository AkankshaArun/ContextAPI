import React, {Component,createContext} from 'react';

export const LangContext = createContext();

export class LangProvider extends Component{
    constructor(props){
        super(props);
        this.state = {lang: 'spanish'}
        this.changeLang = this.changeLang.bind(this);       }
    changeLang(e){
        this.setState({lang: e.target.value })
    }
    render(){
        return (
        <LangContext.Provider value={{...this.state, handleChange:this.changeLang}}>
            {this.props.children}
        </LangContext.Provider>
        );
    }
} 

export const withLangContext = Component => props => (
    <LangContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LangContext.Consumer>
);