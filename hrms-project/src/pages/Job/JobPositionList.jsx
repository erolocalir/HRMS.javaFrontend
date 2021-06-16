import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function JobPositionList() {



    return (
        <div>
            <Menu vertical>
                <Dropdown item text='Çalışma Şekli'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Tam Zamanlı</Dropdown.Item>
                        <Dropdown.Item>Yarı Zamanlı</Dropdown.Item>
                        <Dropdown.Item>Staj</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>
    )
}
