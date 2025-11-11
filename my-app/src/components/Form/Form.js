import { useCallback, useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

export const Form = () => {
  const { tg } = useTelegram()

  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [type, setType] = useState('legal')

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      name,
      type
    }

    tg.sendData(JSON.stringify(data))
  }, [country, street, name, type])

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить'
    })
  }, [])

  useEffect(() => {
    if (!name || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [name, country])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)

    return () => tg.offEvent('mainButtonClicked', onSendData)
  }, [onSendData])

  return (
    <div className='form-container'>
      <h3>Введите данные в форму</h3>

      <input
        className='form-input'
        type='text'
        placeholder='Имя'
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        className='form-input'
        type='text'
        placeholder='Страна'
        value={country}
        onChange={e => setCountry(e.target.value)}
      />

      <input
        className='form-input'
        type='text'
        placeholder='Улица'
        value={street}
        onChange={e => setStreet(e.target.value)}
      />

      <select className='form-select' value={type} onChange={e => setType(e.target.value)}>
        <option value='legal'>Юр лицо</option>
        <option value='physical'>Физ лицо</option>
        <option value='private'>Частное лицо</option>
      </select>
    </div>
  )
}
