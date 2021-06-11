import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


export default function JobAdvertisementList() {

   

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Konum</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
             
                    <Table.Row>
                        <Table.Cell>Yazılım Geliştirici</Table.Cell>
                        <Table.Cell>Yetiştirilmek Üzere tecrübesiz yazılım geliştirici alınacaktır.</Table.Cell>
                        <Table.Cell>İstanbul</Table.Cell>
                    </Table.Row>

                       <Table.Row>
                        <Table.Cell>Bilgisayar Mühendisi</Table.Cell>
                        <Table.Cell>En az 10 yıl tecrübeli.</Table.Cell>
                        <Table.Cell>Ankara</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                        <Table.Cell>Programcı</Table.Cell>
                        <Table.Cell>En az 5 yıl tecrübeli.</Table.Cell>
                        <Table.Cell>Antalya</Table.Cell>
                        </Table.Row>
                     
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
