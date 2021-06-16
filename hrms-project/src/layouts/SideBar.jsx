import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown} from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
            <Dropdown item text='İlan Verin'>
                <Dropdown.Menu>
                 
                    <Dropdown.Divider/>
                    
                    <Dropdown.Item as={NavLink} to="/job" >İş veren olduğunuzu doğrulayın</Dropdown.Item>
          
                </Dropdown.Menu>
            </Dropdown>

            
        </div>
    )
}
