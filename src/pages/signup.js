import React, {useState} from 'react';
import {Form} from '../components';
import HeaderContainer from '../containers/header'
import * as ROUTES from "../constants/routes";
import FooterContainer from '../containers/footer';

export default function Signup() {
    const [firstName, setFirstName] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleSignup = (event) => {
        event.preventDefault();
    }

    const isValid = firstName === '' || emailAddress === '' || password === ''; 

    return (
        <>
            <HeaderContainer>
            <Form>
                    <Form.Title>Sign in</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isValid} type="submit">
                            Sign in
                        </Form.Submit>
                        <Form.Text>
                            Already have an account. <Form.Link to={ROUTES.SIGN_IN}>Sign in</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}