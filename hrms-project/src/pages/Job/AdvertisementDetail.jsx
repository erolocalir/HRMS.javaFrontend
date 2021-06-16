import React from 'react'
import { Button, Comment, Form, Table, Icon, Card } from 'semantic-ui-react'

export default function AdvertisementDetail() {
    return (
        <div>
            <Table celled color={"black"}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Veren</Table.HeaderCell>
                        <Table.HeaderCell>Detay</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell ><Icon name="building" /> Şirket İsmi: </Table.Cell>
                        <Table.Cell>SOLID TEAM</Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Icon name="phone" /> Telefon: </Table.Cell>
                        <Table.Cell>021207278</Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell> <Icon name="world" /> Web Sitesi:</Table.Cell>
                        <Table.Cell>SOLİDTEAM.com</Table.Cell>

                    </Table.Row>

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>Çalışan Sayısı:</Table.HeaderCell>
                        <Table.HeaderCell>1500 </Table.HeaderCell>

                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell>Ortalama Maaş:</Table.HeaderCell>
                        <Table.HeaderCell>5000 TL </Table.HeaderCell>

                    </Table.Row>
                </Table.Footer>
            </Table>

            <Button circular color='facebook' icon='facebook' />
            <Button circular color='twitter' icon='twitter' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='google plus' icon='google plus' />

            <Table celled color={"grey"} >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    <Table.Row>
                        <Table.Cell>İş Pozisyonu</Table.Cell>
                        <Table.Cell>yazılımcı</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Şehir </Table.Cell>
                        <Table.Cell>ankara</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell> Çalışma Yeri </Table.Cell>
                        <Table.Cell>Uzaktan</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell> İş Türü </Table.Cell>
                        <Table.Cell>Tam Zamanlı</Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell>MİN maaş  </Table.Cell>
                        <Table.Cell>3000 TL</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>MAX maaş  </Table.Cell>
                        <Table.Cell>6000 TL</Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell> Açık Pozisyon </Table.Cell>
                        <Table.Cell>26</Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell> Yayınlanma Tarihi  </Table.Cell>
                        <Table.Cell>2021/01/05</Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.Cell> Son Başvuru Tarihi </Table.Cell>
                        <Table.Cell>2022/01/05</Table.Cell>
                    </Table.Row>




                </Table.Body>


            </Table>



            <Card fluid>
                <Card.Content header="Şirket Hakkında Yorumlar"/>

            </Card>


            <Comment.Group>

                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>güzel</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>

                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Elliot Fu</Comment.Author>
                        <Comment.Metadata>
                            <div>Yesterday at 12:30AM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                            <p>müthiş</p>
                        </Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                <Comment.Metadata>
                                    <div>Just now</div>
                                </Comment.Metadata>
                                <Comment.Text>harika</Comment.Text>
                                <Comment.Actions>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Comment>

                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                        <Comment.Metadata>
                            <div>5 days ago</div>
                        </Comment.Metadata>
                        <Comment.Text>idare eder</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>

                <Form reply>
                    <Form.TextArea />
                    <Button content='Yorum Yap' labelPosition='left' icon='edit' primary />
                </Form>
            </Comment.Group>

        </div>
    )
}
