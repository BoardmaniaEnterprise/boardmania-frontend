import React from 'react'
import { useParams } from 'react-router-dom'

const EventComponent = () => {
    const { id } = useParams();

  return (
    <div>EventComponent with id: {id}</div>
  )
}


export default EventComponent