import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainerContainer } from '../containers/faqs';
// import { FooterContainer } from '../containers/footer';
export default function Home() {
  return (
  <>
    <JumbotronContainer />
    <FaqsContainerContainer />
    {/* <FooterContainer /> */}
  </>
  )
}