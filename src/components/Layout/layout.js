import React from 'react'
import Aux from '../../hoc/Aaux'
import "./layout.css"

const layout = (props) => (
    <Aux>
        <div>Toolbar, Slidedrivers, Backdrop</div>
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
)

export default layout;