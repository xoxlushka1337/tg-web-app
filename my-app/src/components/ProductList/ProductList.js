import { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { ProductItem } from '../ProductItem/ProductItem'

export const ProductList = () => {
  const products = [
    { title: '111111111', description: 'qqqqqqqqq qqqqqqqqqqqqqqqq', price: 111, id: '1' },
    { title: '222222222', description: 'wwwwwww wwwwwww wwwwwwwwwww www', price: 220, id: '2' },
    { title: '3333', description: 'eeee ee e e  e e', price: 300, id: '3' },
    { title: '4444444444444444444', description: 'rrrrrrrrrr rrr r  r r r r r', price: 4444, id: '4' }
  ]

  const tg = useTelegram()

  const [addItems, setAddItems] = useState([])

  const onAdd = product => {
    const alreadyAdded = addItems.find(item => item.id === product.id)

    if (alreadyAdded) {
      setAddItems(prev => prev.filter(item => item.id !== product.id))
    } else {
      setAddItems(prev => [...prev, product])
    }
  }

  useEffect(() => {
    if (addItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()

      tg.MainButton.setParams({
        text: `Купить ${addItems.reduce((acc, item) => {
          return (acc += item.price)
        }, 0)}`
      })
    }
  }, [addItems])

  console.log(addItems)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' }}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} onAdd={onAdd} className={'item'} />
      ))}
    </div>
  )
}
