import styled from "styled-components"

interface IColor{
    containerColor?: string
}

export const Resume = styled.div<IColor>`
    width: 22rem;
    height: 8.5rem;
    padding: 1.6rem 2rem 0.8rem;

    background: ${(IColor) => IColor.containerColor? IColor.containerColor : 'var(--white)'};
    color: ${(IColor) => IColor.containerColor === 'var(--green)'? 'var(--white)' : 'var(--title)'};
`

export const ResumeHeader = styled.header`
    padding-bottom: 0.9rem;
    display: flex;
    justify-content: space-between;
`

export const Income = styled.div`
    height: 3.4rem;
    width: 13.8rem;

    font-size: 2rem;
    font-weight: 500;
    
`