import React from 'react'
import './card.styles.css'
const card =(props)=> {
      const {id,name,email}=props.monster;
    return (
        <div className="card-container" key={id}>
        <img src={`https://robohash.org/${id}?set=set2`} alt="monster" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  
}

export default card