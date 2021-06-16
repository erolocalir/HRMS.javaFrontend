import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function CvList() {
    return (
        <div>
            <Table celled color={"black"}>
                <Table.Header>
                    <Table.Row>

                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Bilinen Teknolojiler</Table.HeaderCell>
                        <Table.HeaderCell>Yabancı Diller</Table.HeaderCell>
                        <Table.HeaderCell>Sosyal Medya</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>

                    
                    </Table.Row>
                    <Table.Row>

                     
                    </Table.Row>
                    <Table.Row>

                        <Table.Cell>erol</Table.Cell>
                        <Table.Cell>JAVA</Table.Cell>
                        <Table.Cell>ingilizce</Table.Cell>
                        <Table.Cell><a target={"_blank"} rel="noopener noreferrer">
                            <Button color="linkedin">
                                <Icon name="linkedin" /> LinkedIn
                            </Button>
                        </a></Table.Cell>
                        
                        <Table.Cell><Button animated as={Link} to={"/CvDetail"}>
                  <Button.Content visible>Detayları Gör</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button></Table.Cell>

                    </Table.Row>
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                            <Button as={Link} to={"/AddCv"}
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'>
                                <Icon name='wordpress forms'/> CV'ni Paylaş
                            </Button> 

                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
