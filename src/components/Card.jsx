import './card.css';
import React from 'react';

function getColor(props){
    if(props.red) return "Red";
    if(props.green) return "Green";
    if(props.blue) return "Blue";
    if(props.purple) return "Purple";
}

export default function Card(props){
    return(
        <div className={`card ${getColor(props)}`}>
            <div className="header">
                <span className='title'>{ props.title }</span>
            </div>

            <div className="content">
                { props.children }
            </div>
        </div>
    );
}