import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function CandidatesList() {
    return (
        <div>
            <Menu vertical>
                <Dropdown item text='İş Türü'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Uzaktan Çalışma</Dropdown.Item>
                        <Dropdown.Item>İş Yerinde Çalışma</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>
    )
}
