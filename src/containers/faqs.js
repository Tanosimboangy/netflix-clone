import React from 'react'
import {Accordion, OptForm, Input} from '../components'
import { Frame } from '../components/accordion/styles/accordion'
import faqsData from '../fixtures/faqs.json'

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Question</Accordion.Title>
            <Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.header}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.body}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Frame>
            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now!</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}
