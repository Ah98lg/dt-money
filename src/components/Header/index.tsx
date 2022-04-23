import logoSvg from '../../assets/logo.svg'
import { 
    Button, 
    HeaderContainer, 
    HeaderContent
} from "./styles";

interface RequestModal{
    onRequestOpenModal: () => void
}

export function Header({onRequestOpenModal}: RequestModal){
    return(
        <>
        <HeaderContainer>
            <HeaderContent>
                <img src={logoSvg} alt="DT-Money logo"/>
                <Button onClick={onRequestOpenModal}>Nova transação</Button>
            </HeaderContent>
        </HeaderContainer>
        </>
    )
}