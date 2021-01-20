import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Item = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto; 
`;

export const Inner = styled.div`
    color: white;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3px;
    }
`;

export const Header = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center; 

    @media(max-width: 600px) {
        font-size: 16px;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer; 
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    background: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-self: center;

`;

export const Body = styled.div`
    max-width: 1200px;
    line-height: normal;
    font-weight: normal;
    background: #303030;
    transition: max-height 0.25s cubic-bezier(0.25, 0, 0, 1);
    background: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-self: center;

    @media(max-width: 600px) {
        font-size: 26px;
        line-height: 22px;
    }
`;