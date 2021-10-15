import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }
  opera(op) {
    switch (op) {
      case 'decrementar':
        this.setState({
          contador: this.state.contador - 1
        });
        break;
      case 'incrementar':
        this.setState({
          contador: this.state.contador + 1
        });
        break;

    }
  }
  render() {
    return (
      <div>


        <button onClick={() => this.opera('incrementar')}  >Incrementa</button>

        <label>-----------O valor do contador é {this.state.contador} -----------------</label>

        <button onClick={() => this.opera('decrementar')}  >Decrementa</button>

      </div>


    );
  }


}
export default App;

// Crie uma aplicação React e no componente de classe principal chamado "App":
//• Renderize dois botões: o primeiro mostrando o rótulo "Incrementa" e, o segundo,
//"Decrementa", com a seguinte mensagem entre eles "O valor do contador é: ".
//• Crie um contador com valor inicial 0 e renderize esse número na tela do browser. Toda vez 
//que acontecer um clique no botão "Incrementa / Decrementa", esse número deverá ser 
//incrementado / decrementado.

