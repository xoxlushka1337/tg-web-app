const tg = window.Telegram.WebApp

export const useTelegram = () => {
  const onClose = () => {
    tg.close()
  }

  const onToggle = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.show()
    } else {
      tg.MainButton.hide()
    }
  }

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggle
  }
}
