import React from 'react'
import './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button className='More'>Less</button>
            <button className='Less'>More</button>
        </div>
    )
}

export default buildControl