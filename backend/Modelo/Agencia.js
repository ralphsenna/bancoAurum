//import conectar from '../Persistencia/Conexao.js';
import AgenciaBD from '../Persistencia/AgenciaBD.js';

export default class Agencia 
{
    #cod_ag;
    #endereco;
    #cidade;
    #uf;

    constructor(cod_ag=0, endereco='', cidade='', uf='') 
    {
        this.#cod_ag = cod_ag;
        this.#endereco = endereco;
        this.#cidade = cidade;
        this.#uf = uf;
    }

    //Métodos publicos (Gets, Sets e metodo de conversão para JSON)
    get cod_ag() 
    {
        return this.#cod_ag;
    }
    set cod_ag(novoCodigo) 
    {
        this.#cod_ag = novoCodigo;
    }

    get endereco() 
    {
        return this.#endereco;
    }
    set endereco(novoEndereco) 
    {
        this.#endereco = novoEndereco;
    }

    get cidade() 
    {
        return this.#cidade;
    }
    set cidade(novaCidade) 
    {
        this.#cidade = novaCidade;
    }

    get uf() 
    {
        return this.#uf;
    }
    set uf(novaUf) 
    {
        this.#uf = novaUf;
    }

    toJSON() 
    {
        return {
            cod_ag: this.#cod_ag,
            endereco: this.#endereco,
            cidade: this.#cidade,
            uf: this.#uf,
        };
    }

    //Métodos de persistência (CRUD de Agência)
    //Chama a função de cadastro de agência diretamente no banco de dados
    async cadastrarBD() 
    {
        const agenciaBD = new AgenciaBD();
        await agenciaBD.cadastrar(this);
    }

    //Chama a função de consulta de agência diretamente no banco de dados
    async consultarBD(cod_ag) 
    {
        const agenciaBD = new AgenciaBD();
        return await agenciaBD.consultar(paramConsulta);
        /* if (cod_ag == undefined) {
            const conexao = await conectar();
            const sql = 'SELECT * FROM Agencia';
            const parametros = ['%'];
            const [rows] = await conexao.query(sql, parametros);
            const listaAgencias = [];
            for (const row of rows) {
                const agencia = new Agencia(row['cod_ag'], row['endereco'], row['cidade'], row['uf']);
                listaAgencias.push(agencia);
            }
            return listaAgencias;
        } else {
            const conexao = await conectar();
            const sql = 'SELECT * FROM Agencia WHERE cod_ag=?';
            const parametros = [cod_ag];
            const [rows] = await conexao.query(sql, parametros);
            const listaAgencias = [];
            for (const row of rows) {
                const agencia = new Agencia(row['cod_ag'], row['endereco'], row['cidade'], row['uf']);
                listaAgencias.push(agencia);
            }
            // PQ RETORNA [0] ?
            return listaAgencias[0];
        } */
    }

    //Chama a função de alteração de agência diretamente no banco de dados
    async alterarBD() 
    {
        const agenciaBD = new AgenciaBD();
        await agenciaBD.alterar(this);
    }

    //Chama a função de exclusão de agência diretamente no banco de dados
    async excluirBD() {
        const agenciaBD = new AgenciaBD();
        await agenciaBD.excluir(this);
    }
}
