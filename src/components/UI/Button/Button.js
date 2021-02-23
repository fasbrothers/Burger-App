import React from 'react';

const button = (props) => (
    <span className='Button' >
        <button className={props.className} onClick={props.clicked}>{props.children}</button>
    </span>
)

export default button;