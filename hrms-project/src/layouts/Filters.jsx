import React from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

export default function Filters() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item
                    name='İŞ İLANLARI'

                >
                    <Label color='teal'>156</Label>
         İŞ İLANLARI
        </Menu.Item>

                <Menu.Item
                    name='ŞİRKET BİLGİLERİ'

                >
                    <Label></Label>
         ŞİRKET BİLGİLERİ
        </Menu.Item>

                <Menu.Item
                    name='CV BİLGİLERİ'

                >
                    <Label>632</Label>
         CV BİLGİLERİ
        </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Bir şey arayın...' />
                </Menu.Item>
            </Menu>
        </div>
    )
}
