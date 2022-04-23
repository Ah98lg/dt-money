import Modal from "react-modal"

import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'

import { 
    CategoryButton,
    Form,
    SubmitButton,
    TextInput 
} from "./styles"

interface IModalProps{
    isOpen: boolean,
    onRequestClose: () => void
}

export function TransactionsModal({isOpen, onRequestClose} : IModalProps){
    return(
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName='modalOverlay'
    className='reactModal'
    >
    <Form>
        <h2>Cadastrar transação</h2>
        <TextInput type="text" placeholder="Nome" required/>
        <TextInput type="text" placeholder="Preço" required/>
        <div>
        <CategoryButton>Entrada</CategoryButton>
        <CategoryButton>Saída</CategoryButton>
        </div>
        <TextInput type="text" placeholder="Categoria" required/>
        <SubmitButton>Cadastrar</SubmitButton>
    </Form>
    </Modal>
    )
}