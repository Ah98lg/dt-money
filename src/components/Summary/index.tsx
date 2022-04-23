import { ResumeContainer } from "./styles";
import IncomeSvg from '../../assets/income.svg'
import OutcomeSvg from '../../assets/outcome.svg'
import TotalSvg from '../../assets/total.svg'

import { Transactions } from "../Transactions";

export function Summary() {
    return(
        <ResumeContainer>
            <Transactions label={"Entradas"} svg={IncomeSvg} value={"17.400,00"}/>
            <Transactions label={"Saidas"} svg={OutcomeSvg} value={"1.259,00"}/>
            <Transactions label={"Total"} svg={TotalSvg} value={"16.141,00"} color='var(--green)'/>
        </ResumeContainer>
    )
}