import React from 'react'
import { Link } from "react-router-dom";
import { Button, Form, Segment, Image, Message, Header } from 'semantic-ui-react'


export default function SignedUpforEmployer() {
    return (
        <div>

            <Header as="h2" color="teal" textAlign="center">
                İş Veren Kayıt
            </Header>
            <Form size="large">
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon="factory"
                        iconPosition="left"
                        placeholder="Company Name"
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Şifre"
                        type="password"
                    />

                    <Form.Input
                        fluid
                        icon="world"
                        iconPosition="left"
                        placeholder="Web Site"

                    />

                    <Form.Input
                        fluid
                        icon="info"
                        iconPosition="left"
                        placeholder="Company ID"

                    />

                    <Form.Input
                        fluid
                        icon="mail"
                        iconPosition="left"
                        placeholder="Company Mail"

                    />


                    <Button as={Link} to="/" color="teal" fluid size="large" >
                        Kaydol
                    </Button>
                </Segment>
            </Form>




        </div>
    )
}

