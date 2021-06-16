import React, { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import SideBar from './SideBar';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Link } from "react-router-dom";

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (

        <div>


            <Menu inverted fixed="top" >

                <Container>
                    <Menu.Item name="Ana Sayfa" as={Link} to={"/"} icon={"home"} />

                    <SideBar />


                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>


                </Container>



            </Menu>
        </div>
    )
}
