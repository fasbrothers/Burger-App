import React from 'react'
import Aux from '../../hoc/Aaux'
import "./layout.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
)

export default layout;