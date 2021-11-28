import React from 'react'
import './Card_Styled.css'


function Card({quote, name, position}) {
    return (
            <div className="card--hidden-container">
                <div className="card--flex-row card--flex-first-row">
                    <img src="./images/logo.png" alt="Logo" />
                    <p className='card--width-first-row'>{quote}</p>
                </div>
                <div className="card--author">
                    <p>{name}</p>
                    <p>{position}</p>
                </div>
            </div>
    )
}

export default Card
