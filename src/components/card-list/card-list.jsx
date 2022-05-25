import React from 'react'
import Card from '../card/card'
import './card-list.styles.css'
const Cardlist=(props)=>{
 const {monsters}=props
    return (
      <div className='card-list'>
          {monsters.map((monster)=>{
          return(              
             <Card monster={monster}/>
            )}
          )}
      </div>
    )
}

export default Cardlist