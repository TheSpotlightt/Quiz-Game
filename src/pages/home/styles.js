import styled from 'styled-components';

export const Title = styled.h1 `
    font-size: 4rem;
    text-align: center;
`;


export const Categories = styled.div `
    display: flex;
    justify-content: space-around;
    margin-top: 10rem;
`;

export const Button = styled.button `
    padding: 2rem;
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    &:hover {
        transform: scale(1.1);    
        transition: all 500ms ease-out;
    }
`;