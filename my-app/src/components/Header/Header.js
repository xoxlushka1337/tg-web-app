import { useTelegram } from '../../hooks/useTelegram'

export const Header = () => {
  const { onClose, user } = useTelegram()

  return (
    <div>
      <button onClick={onClose}>Закрыть</button>
      <span>{user?.username}</span>
    </div>
  )
}
