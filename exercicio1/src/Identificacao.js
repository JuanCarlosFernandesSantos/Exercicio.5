import React from 'react';

class Identificacao extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nome: "Juan",
            sobrenome: "Carlos",
            idade: 20
        };
    }
    render() {
        return (
            <div>
                <h1>Eu me chamo {this.state.nome}</h1>
                <p>
                    Meu sobrenome é {this.state.sobrenome} e tenho {this.state.idade} anos
                </p>
            </div>
        )
    }
}

export default Identificacao;