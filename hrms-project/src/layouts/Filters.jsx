import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function Filters() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item name='İŞ İLANLARI' as={Link} to={"/"} >

                    <Icon name="list" />
         İŞ İLANLARI
        </Menu.Item>

                <Menu.Item name='ŞİRKET BİLGİLERİ' as={Link} to={"/10"} >

                    <Icon name="factory" />

         ŞİRKET BİLGİLERİ
        </Menu.Item>

                <Menu.Item name='CV BİLGİLERİ' as={Link} to={"/CV"}>

                    <Icon name="wordpress forms" />
         CV BİLGİLERİ
        </Menu.Item>
              
            </Menu>

            
        </div>
    )
}
