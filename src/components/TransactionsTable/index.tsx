import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface ITransactions{
    title: string,
    type: string,
    price: number,
    category: string,
    date: Date
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<ITransactions[]>([]);

    async function getTransactions(){
        try{
            await api.get('/transactions').then((response) => {
                setTransactions(response.data)
            })
        } catch(error){
            console.log('Não foi possivel completar a requisição')
        }
    }

    useEffect(()=>{
        getTransactions()
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction)=>{
                        return(
                            <tr>
                        <td>{transaction.title}</td>
                        <td>{transaction.price}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.date.toString()}</td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}