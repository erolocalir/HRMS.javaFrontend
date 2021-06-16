import React from 'react'
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Link } from "react-router-dom";
import { Card, Button, Icon } from 'semantic-ui-react'

export default function EmployerVerificationDetail() {


   
    return (



        <div>


            <Card fluid>

                <Card.Content header="Sistem Doğrulaması" />



                
            </Card>

            <Button animated as={Link} to={"/AddJob"}>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name="arrow right" />
                </Button.Content>
            </Button>

        </div>
    )
}
