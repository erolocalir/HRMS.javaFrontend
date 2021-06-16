import React from 'react'
import { Dropdown, MenuItem } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <MenuItem>

            <Image avatar spaced="right" src="https://yt3.ggpht.com/ytc/AAUvwngwJNZN3WObqCSP3MlLYGiR3cGFXbOkO3vWScSp2A=s900-c-k-c0x00ffffff-no-rj"/>
                
                <Dropdown pointing="top left" text="Erol">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>

                </Dropdown>

            </MenuItem>
        </div>
    )
}
