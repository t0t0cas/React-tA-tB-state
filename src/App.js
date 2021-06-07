//App.js
//Esta classe será o ponto de partida da nossa aplicação

//importar da pasta 'node_modules' a package do React 
import React from 'react'
//import do componente 'Tabela'
import Tabela from './Tabela'
//import do 'Formulario'
import Formulario from './Formulario'
//import CSS
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
   //esta variável é passível de ser alterado o seu conteúdo
    //e, essa é uma das características dos STATE
    //estamos a definir esta variável fora do 'render'
    state = {
      //o sinal de atribuição é conseguido à custa do símbolo :
      //alunos: [...] <=> alunos = [...]
      alunos: [
     {
       nome:"João",
       apelido: "Lopes"
     },
     {
      nome:"Mario",
      apelido: "Santos"
     },
     {
      nome:"Luisa",
      apelido: "Matos"
     },
     {
      nome:"Ana",
      apelido: "Silva"
     }
    ]
  }

  /**
   * método que sabe identificar o 'aluno' que deverá ser retirado da tabela
   * @param {*} index - dados do aluno a remover
   */
  removeAluno=(index)=>{
    //recuperar os alunos que estão representados na tabela 
    const {alunos} = this.state
    //alterar essa lista, retirando dela o aluno identificado pelo 'index'
    this.setState({
      //filter é um método do 'state' que permite aplicar um filtro sobre os
      //dados do state 
      alunos:alunos.filter((aluno,i)=>{
        //devolve todos os dados que não forem iguais ao index
        return i !== index
      }),
    });
  }

  /**
   * Adiciona os dados do novo aluno ao 'state'
   * @param {*} novoAluno - dados do novo aluno, recebidos do formulário 
   */
  addAluno = (novoAluno) =>{
    this.setState({
      alunos:[...this.state.alunos, novoAluno] 
      //... é um operador que junta a um array, um novo elemento
    });
  }

  //todas as classes terão, obrigatoriamente, um método chamado 'render'
  render() {
    //definir o acesso à variável com dados dos alunos
    const{alunos} = this.state;

  return(
    <div className = "container" > {/*e apanas consegue devolver um Único Objeto*/ }
      <h1>Processar os daods dos alunos...</h1>
      <h4>Lista com dados dos alunos</h4>
      {/** este Formulário irá receber os dados de um nome e apelido do aluno */}
      {/**o parâmetro 'dadosRecolhidos' é um parâmetro de 'saída'
       * I.e., serve para retirar do 'Formulário' os dados que foram lá recolhidos*/}
      <Formulario dadosRecolhidos={this.addAluno} />
      <br />
      {/* 'dadosAlunos' é uma variável de entrada no componente 
                Naturalmente, do lado do componente existirá um parâmetro para receber estes dados*/}
      {/* {alunos} - 'alunos' será o nome dos dados
                            está escrita entre chavetas {} pq é a forma de se aceder ao conteúdo das variáveis JSX */}
      <Tabela dadosAlunos={alunos} aluno={this.removeAluno}/>
     <br />
    </div >
    );
  }
}

export default App;
