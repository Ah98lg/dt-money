import styled from "styled-components";


export const HeaderContainer = styled.header`
    height: 212px;
    background-color: var(--blue);

    display: flex;
    align-items: flex-start;
    justify-content: center;
    
`

export const HeaderContent = styled.div`
    width: 70rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
`


export const Button = styled.button`
    width: 12.2rem;
    height: 3rem;
    background: var(--light-blue);
    color: var(--white);
    border: 0;
    border-radius: 0.25rem;
    font-weight: 600;

    transition: filter 0.25s;

    :hover{
        filter: brightness(0.9)
    }
`