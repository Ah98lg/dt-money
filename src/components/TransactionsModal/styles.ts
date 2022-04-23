import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
        color: var(--title);
        margin-bottom: 1rem;
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
    margin-top: 0.5rem;
`

export const CategoryButton = styled.button`
    background: inherit;
    border: 1px solid #D7D7D7;
    height: 4rem;
    width: 14.75rem;
    border-radius: 0.25rem;

    :first-child{
        margin-right: 0.5rem    ;
    }
`

export const TextInput = styled.input`
    width: 100%;
    height: 4rem;
    background: var(--input-background);
    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;

    ::placeholder{
        padding: 1.5rem;
        color: var(--text);
        font-size: 1rem;
    }
`