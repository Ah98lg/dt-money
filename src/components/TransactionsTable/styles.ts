import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        tr{
            text-align: left;
        }
        th{
            margin-bottom: 2rem;
            color: var(--text);
            font-weight: 400;
            padding: 1rem 2rem;
        }
        td{
            color: var(--text);
            background-color: var(--white);
            padding: 1.25rem 2rem;
            border-radius: 0.25rem;

            &:first-child{
                color: var(--title);
            }
        }
    }
`