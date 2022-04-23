import { 
    Income, 
    Resume, 
    ResumeHeader 
} from "./styles";

interface ITransactionsProps{
    label: string,
    svg: string,
    value: string,
    color?: string
}

export function Transactions({label,svg,value,color = 'var(--white)'} : ITransactionsProps){
    return(
        <Resume containerColor={color}>
        <ResumeHeader>
            {label}
            <img src={svg} alt='IncomeSvg'></img>
        </ResumeHeader>
        <Income>R$ {value}</Income>
    </Resume>
    )
}