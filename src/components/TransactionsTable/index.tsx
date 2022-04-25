import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface ITransactions{
    id:number,
    name: string,
    type: string,
    price: number,
    category: string,
    date: string,
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<ITransactions[]>([]);

    async function getTransactions(){
        try{
            await api.get('/transactions').then((response) => {
                setTransactions(response.data.transactions)
            })
        } catch(error){
            console.log('Não foi possivel completar a requisição')
        }
    }

    useEffect(()=>{
        getTransactions()
    }, [transactions])

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
                    {transactions.map((transaction)=>(
                        <tr key={transaction.id}>
                            <td>{transaction.name}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.date}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </Container>
    )
}