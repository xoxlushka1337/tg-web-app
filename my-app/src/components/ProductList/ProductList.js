import { useEffect } from 'react'
import { useTelegram } from '../../hooks/useTelegram'

export const ProductList = () => {
  const { onToggle, tg } = useTelegram()
  useEffect(() => {
    tg.ready()
  }, [])

  return <div>ProductList</div>
}
