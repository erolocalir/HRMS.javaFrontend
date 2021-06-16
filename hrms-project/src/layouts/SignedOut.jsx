import React from 'react'
import { Button, Menu, Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function SignedOut({ signIn }) {
    return (
        <div>

            <Menu.Item>

                <Button onClick={signIn} >Giriş yap</Button>


                <Dropdown  item text="Kayıt Ol" >

                    <Dropdown.Menu>
                   
                        <Dropdown.Divider />

                       
                        <Dropdown.Item as={NavLink} to="/6">İş arayan</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/5">İş veren</Dropdown.Item>


                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>


     


        </div>
    )
}
