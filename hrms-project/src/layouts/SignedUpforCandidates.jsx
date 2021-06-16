import React from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function SignedUpforCandidates() {


    return (
        <div>

            <Header as="h2" color="teal" textAlign="center">
                İş Arayan Kayıt
            </Header>
            <Form size="large">
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail adresi"
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Şifre"
                        type="password"
                    />

                    <Button as={Link} to="/" color="teal" fluid size="large" >
                        Kaydol
                    </Button>
                </Segment>
            </Form>

        </div>
    )
}
