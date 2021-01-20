import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Body } from './styles/accordion';

export default function Accordion( { children, ...restProps} ) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}


const ToggleContext = createContext();

Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(flase);
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}
Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}
Accordion.Header = function AccordionHeader({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useContext(ToggleContext);
    return (
        <Header onclick={() => setToggleShow(!toggleShow)} {...restProps}>
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="close"/>
            ) : ( <img src="/images/icons/add.png" alt="open" />)}
            {children}
        </Header>
    )
}
Accordion.Body = function AccordionBody({children, ...restProps}) {
    return (
        <Body {...restProps}>{children}</Body>
    )
}