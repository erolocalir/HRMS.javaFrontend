import React from 'react'
import { Card, Icon, Image, Form, TextArea, Table } from 'semantic-ui-react'


export default function CvDetail() {
    return (
        <div>
            < Card>
                <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>erol</Card.Header>
                    <Card.Meta>
                        <span className='date'>17 yaşında</span>
                    </Card.Meta>
                    <Card.Description>
                        yazılımcı
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        560 arkadaşı mevcut
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='mail' />
                        dfeheqr@gmail.com
                    </a>
                </Card.Content>

            </Card>

            <Card fluid>
                <Card.Content header="Otobiyografi" />
            

            <Form>
                <TextArea placeholder='Otobiyogrofinizi yazabilirsiniz...' style={{ minHeight: 100 }} />
            </Form>

            </Card>


            <Card fluid>
                <Card.Content header="Okuduğu Okullar" />


                <Table celled color={"black"}>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                            <Table.HeaderCell>Bölüm</Table.HeaderCell>
                            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                            <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Row>

                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>

                    </Table.Row>

                </Table>

            </Card>



            <Card fluid>
                <Card.Content header="Yabancı Diller" />


                <Table celled color={"black"}>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Bilinen Yabancı Diller</Table.HeaderCell>
                            <Table.HeaderCell>Seviye(1-10)</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Row>

                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>

                    </Table.Row>

                </Table>

            </Card>

            <Card fluid>
                <Card.Content header="Yazılım/Bilişim Yetenekleri" />
           


            <Table celled color={"black"}>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bilinen Programlama Dilleri</Table.HeaderCell>
                        <Table.HeaderCell>Kullanabilme Durumu(1-10)</Table.HeaderCell>
                        <Table.HeaderCell>Bilinen Diğer Teknolojiler</Table.HeaderCell>
                        <Table.HeaderCell>Kullanabilme Durumu(1-10)</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Row>

                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>

                </Table.Row>

            </Table>

            </Card>



        </div>
    )
}
