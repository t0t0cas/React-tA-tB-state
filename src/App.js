//App.js
//Esta classe será o ponto de partida da nossa aplicação

//importar da pasta 'node_modules' a package do React 
import React from 'react'
//import do componente 'Tabela'
import Tabela from './Tabela'
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

  //método que sabe identificar o 'aluno' que deverá ser retirado da tabela
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

  //todas as classes terão, obrigatoriamente, um método chamado 'render'
  render() {
    //definir o acesso à variável com dados dos alunos
    const{alunos} = this.state;

  return(
    <div className = "container" > {/*e apanas consegue devolver um Único Objeto*/ }
      <h1>Lista com dados dos alunos</h1>
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
