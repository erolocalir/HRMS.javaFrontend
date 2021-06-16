import React from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function JobAdvertisementList() {

   

    return (
        <div>
            <Table celled color={"black"}>
                <Table.Header>
                    <Table.Row >

                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Konum</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                    </Table.Row>


                </Table.Header>

                <Table.Body>
             
                    <Table.Row>

                        <Table.Cell>SOLID TEAM</Table.Cell>
                        <Table.Cell>Yazılım Mühendisi</Table.Cell>
                        <Table.Cell>Yetiştirilmek Üzere tecrübesiz yazılım geliştirici alınacaktır.</Table.Cell>
                        <Table.Cell>İstanbul</Table.Cell>
                        <Table.Cell><Button animated as={Link} to={"/AdvertisementDetail"}>
                  <Button.Content visible>Detayları Gör</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button></Table.Cell>
                        
                        
                    </Table.Row>
                </Table.Body>

            </Table>
        </div>
    )
}
