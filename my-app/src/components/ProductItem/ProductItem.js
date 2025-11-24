import { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'

import './ProductItem.css'

export const ProductItem = ({ product, className, onAdd }) => {
  const [isStateButton, setIsStateButton] = useState(false)

  const onAddHandler = () => {
    setIsStateButton(!isStateButton)
    onAdd(product)
  }
  return (
    <div className='product-card'>
      <div className='img'>img</div>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <button onClick={onAddHandler}>{isStateButton ? 'Удалить' : 'Добавить'}</button>
    </div>
  )
}
