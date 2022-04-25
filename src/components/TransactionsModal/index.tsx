import { FormEvent, useState } from "react"
import Modal from "react-modal"
import { RiCloseFill } from 'react-icons/ri'

import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'

import { 
    CategoryButton,
    CloseButton,
    Form,
    SubmitButton,
    TextInput 
} from "./styles"
import { api } from "../../services/api"

interface IModalProps{
    isOpen: boolean,
    onRequestClose: () => void
}

interface ITransactionResume{
    name: string;
    price: number;
    type: string;
    category: string;
    date: string;
}

export function TransactionsModal({isOpen, onRequestClose} : IModalProps){

    const [transactionType, setTransactionType] = useState('gain');
    const [transactionResume, setTransactionResume] = useState<ITransactionResume>({
        name: '',
        price: 0,
        type: transactionType,
        category: '',
        date: (new Date()).toString()
    });


    function handleCreateNewTransaction(event : FormEvent){
        event.preventDefault();
        api.post('/transactions', transactionResume)
        onRequestClose()
    }

    return(
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName='modalOverlay'
    className='reactModal'
    >
    <CloseButton>
        <RiCloseFill onClick={onRequestClose} size='2rem' color="var(--text)"/>
    </CloseButton>
    <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <TextInput 
            type="text" 
            placeholder="Nome" 
            required 
            value={transactionResume.name} 
            onChange={(event)=>{
                setTransactionResume((prevState)=>({
                    ...prevState,
                    name: event.target.value
                    }))
            }}/>
        <TextInput 
            type="number" 
            placeholder="Preço" 
            required 
            value={transactionResume.price || ''} 
            onChange={(event)=>{
                setTransactionResume((prevState)=>({
                    ...prevState,
                    price: Number(event.target.value)
                    }))
            }}/>
        <div>
        <CategoryButton type="button" onClick={()=> setTransactionType('gain')} transactionType={transactionType} className='income'>
            <img src={incomeSvg} alt='incomeSvg'/>
            <span>Entrada</span>
        </CategoryButton>
        <CategoryButton type="button" onClick={()=> setTransactionType('spend')} transactionType={transactionType} className='outcome'>
            <img src={outcomeSvg} alt='incomeSvg'/>
            <span>Saída</span>
        </CategoryButton>
        </div>
        <TextInput 
            type="text" 
            placeholder="Categoria" 
            required 
            value={transactionResume.category}
            onChange={(event)=>{
                setTransactionResume((prevState)=>({
                    ...prevState,
                    category: event.target.value
                    }))
            }}/>
        <SubmitButton type="submit" onClick={handleCreateNewTransaction}>
            <span>Cadastrar</span>
        </SubmitButton>
    </Form>
    </Modal>
    )
}