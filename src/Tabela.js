//Tabela.js
//********************************

import { render } from '@testing-library/react'
import React from 'react'

//função que devolve o Cabeçalho da Tabela
function CabecalhoTabela() {
    return (
        <thead>
            <tr>
                <td>Nome</td>
                <td>Apelido</td>
            </tr>
        </thead>
    )
}

//definição da função que devolve o Corpo da tabela
//faz exatamente o mesmo da linha 7
const CorpoTabela = (props) => {
    //esta função 'interna' irá ler e processar todos
    //os objetos definidos dentro do array 'dados recebidos'
    const rows=props.dadosRecebidos.map((row,index) => {
        return (
          <tr key={index}>
              <td>{row.nome}</td>
              <td>{row.apelido}</td>
              <td>
                  <button className="btn btn-outline-danger" onClick={()=>props.alunoARemover(index)}>
                      Apagar aluno
                  </button>
              </td>
          </tr>  
        )
    })
    //valor devolvido pela função 'CorpoTabela'
    return (
        <tbody>{rows}</tbody>
    )
}

//componente que junta os dois sub-componentes
class Tabela extends React.Component {
       render() {
        //estamos a ler os dados que são recebidos pelo componente   
        // <=> this.props.dadosAlunos
        const{dadosAlunos, aluno}= this.props
        return (
            <table className="table table-striped table-success">
                <CabecalhoTabela />
                {/* o parâmetro 'dadosRecebidos' irá ajudar ao processamento dos dados que vêm da componente */}
                <CorpoTabela  dadosRecebidos={dadosAlunos} alunoARemover={aluno}/>
            </table>
        )
    }
}

export default Tabela

