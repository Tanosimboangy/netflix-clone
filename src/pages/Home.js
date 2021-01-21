import React from "react";
import JumbontronContainer from "../containers/jumbotron";
import FooterContainer from '../containers/footer'
import FaqsContainer from '../containers/faqs'
import HeaderContainer from '../containers/header'
import { OptForm, Feature } from "../components";

export default function Home() {
  return (
    <>
    <HeaderContainer>
      <OptForm>
        <Feature>
          <Feature.Title>
            Unlimited Films, TV programms and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere, cancel anytime.
          </Feature.SubTitle>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now!</OptForm.Button>
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
        </Feature>
      </OptForm>
    </HeaderContainer>
    <JumbontronContainer ></JumbontronContainer>
    <FaqsContainer></FaqsContainer>
    <FooterContainer></FooterContainer>
    </>
  );
}
