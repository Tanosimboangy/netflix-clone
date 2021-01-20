import React, {children} from 'react';
import { Input, Container, Button, Text} from './styles/opt-form';

export default function OptForm({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

OptForm.Input = function OptFormInput({...restProps}) {
    return (
        <Input {...restProps}>{children}</Input>
    )
}

OptForm.Button = function OptFormButton({children, ...restProps}) {
    return (
        <Button {...restProps}> 
            {children}
            <img src="/images/icons/chevron-right.png" alt="Try now"/>
        </Button>
    )
}

OptForm.Text = function OptFormText({...restProps}) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}