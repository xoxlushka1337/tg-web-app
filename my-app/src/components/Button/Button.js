import { useEffect } from 'react'
import { useTelegram } from '../../hooks/useTelegram'

export const Button = () => {
  const { onToggle, tg } = useTelegram()
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div>
      <button onClick={onToggle}>Закрыть</button>
    </div>
  )
}
