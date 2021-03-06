import { useState } from 'react'



const Counter = ({ onAdd }) => {

  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }


  return (
    <div className="btn-counter">
      <p>Cantidad : {contador} </p>
      <button onClick={sumar} className="material-icons">add</button>
      <button onClick={restar} className="material-icons">remove</button>
      <button className="btn-counter" onClick={(e) => onAdd(contador, e)}>Confirmar compra</button>
    </div>
  )
}

export default Counter

