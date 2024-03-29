import React from "react";

class Produtos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contar: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState((state) => ({contar: state.contar+1}))
    }

    componentDidMount(){
        console.log('Criado')
    }

    componentDidUpdate(){
        console.log('Atualizado')
    }

    componentWillUnmount(){
        Console.log('Deletado')
    }

    render(){
        return <div>
            <h1>{this.props.title}</h1>
            <p></p>
            <h1>{this.state.contar}</h1>
            <p></p>
            <button onClick={this.handleClick} >Somar</button>
        </div>
    }
}

export default Produtos