import styled from "styled-components";

interface TransactionType{
    transactionType: string;
}


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h2{
        color: var(--title);
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const SubmitButton = styled.button`
    background: var(--green);
    color: white;
    width: 100%;
    height: 4rem;
    border: 0;
    border-radius: 0.25rem;

    font-weight: 600;
    font-size: 1rem;
    margin-top: 2rem;
`

export const CategoryButton = styled.button<TransactionType>`
    border: 1px solid #D7D7D7;
    height: 4rem;
    width: 14.75rem;
    border-radius: 0.25rem;
    border-color: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1rem;


    &.income{
        background-color: ${(TransactionType) => TransactionType.transactionType === ('gain') ? 'RGBA(18,164,84,0.21)' : 'inherit'};
    }

    &.outcome{
        background-color: ${(TransactionType) => TransactionType.transactionType === ('spend') ? 'RGBA(229,46,77,0.19)' : 'inherit'};
    }

    :first-child{
        margin-right: 0.5rem    ;
    }

    transition: border-color 0.2s;

    &:hover{
        border-color: #aaa;
    }

    span{
        color: var(--title);
        font-weight: 500;
    }
`

export const TextInput = styled.input`
    width: 100%;
    height: 4rem;
    background: var(--input-background);
    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;
    font-size: 1rem;
    padding: 1.5rem;


    ::placeholder{
        color: var(--text);
        font-size: 1rem;
    }
`

export const CloseButton = styled.div`
    position: relative;
    top: -3rem;
    left: 2rem;
    text-align: end;
    height: 0px;
`