import React from 'react'
import { Button, Card,} from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function EmployerList() {
    return (
        <div>
            <Card.Group>
                <Card>
                    <Card.Content>



                        <Card.Header>SOLİD TEAM</Card.Header>
                        <Card.Meta>yazılım</Card.Meta>
                        <Card.Description>
                            yazılım şirketi <strong>TAKİP EDİN</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='black' as={Link} to={"/AdvertisementDetail"}  >
                                Detaylar
                            </Button>
                            <Button basic color='black'>
                                Web Sitesi
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
