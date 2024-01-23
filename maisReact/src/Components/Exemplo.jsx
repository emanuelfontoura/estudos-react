import React from "react";

const reducer = (state, action) => {
    switch (action.type){
        case 'remover':
            return state.filter(fruit => fruit !== action.content)
        case 'adicionar':
            return [...state, action.content]
    }
}

const Exemplo = () => {
    const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva', 'Maçã', 'Manga'])

    return <>
        <p></p>
        {state.map(fruit => <p key={fruit}>{fruit}</p>)}
        <button onClick={() => dispatch({type: 'remover', content: 'Banana'})} >Remover Banana</button>
        <button onClick={() => dispatch({type: 'remover', content: 'Uva'})}>Remover Uva</button>
        <button onClick={() => dispatch({type: 'adicionar', content: 'Banana'})}>Adicionar Banana</button>
    </>
}

export default Exemplo