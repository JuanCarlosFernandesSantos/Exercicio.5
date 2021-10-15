import React from 'react';

class Retangulo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comprimento: 8,
      largura: 5
    };
  }
  mudarLargura() {
    this.setState({ largura: 6 })
  }

  render() {
    return (
      <div>


        <h2>A área do retanglo é:{this.state.comprimento * this.state.largura}</h2>



        <button onClick={() => this.mudarLargura('mudarLargura')}  >mudarLargura</button>

      </div>

    )

  };


}
export default Retangulo;


// Crie uma aplicação React com um componente chamado "Retangulo", utilizando o objeto 
//state com o seguinte conjunto de chaves e valores:
//comprimento: 8
//largura: 5
//• Crie um método chamado "mudarLargura()" e altere o valor para 6.
//• Renderize a seguinte mensagem: A área do retângulo é: <valor do cálculo> e um botão 
//</valor>mostrando o rótulo "Mudar largura".