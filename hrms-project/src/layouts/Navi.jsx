import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react'
import SideBar from './SideBar';

export default function Navi() {
    return (

        <div>
            <Menu inverted fixed="top" >
                <Container>
                    <Menu.Item
                        name='Ana Sayfa' />
                    <Menu.Item
                        name='İlan Verin' />

                    <Menu.Menu position='right'>
                        <SideBar/>

                        <Menu.Item>
                            <Button primary>Sign In</Button>
                        </Menu.Item>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>

                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
