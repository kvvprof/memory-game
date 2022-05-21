import { useEffect, useState } from 'react'
import data from './data'
import MemoryItem from './MemoryItem'

function MemoryGame() {
  const [memoryGameItems, setMemoryGameItems] = useState(data)
  const [currentItems, setCurrentItems] = useState([])
  const [successfulItems, setSuccessFulItems] = useState([])
  const [stepsCounter, setStepsCounter] = useState(0)
  const [totalCounter, setTotalCounter] = useState(0)
  
  const choosingItem = (id, value) => {
    
    if (currentItems.length === 0 && successfulItems.includes(id) !== true) {
      setMemoryGameItems(memoryGameItems.map(item => {
        if (id === item.id) {
          return { ...item, active: true }
        }
        return item
      }))
      setCurrentItems([...currentItems, { id, value }])
    }

    if (currentItems.length < 2 && currentItems.length !== 0 && successfulItems.includes(id) !== true && id !== currentItems[0].id) {
      setMemoryGameItems(memoryGameItems.map(item => {
        if (id === item.id) {
          return { ...item, active: true }
        }
        return item
      }))
      setCurrentItems([...currentItems, { id, value }])
    }
  }

  useEffect(() => {

    if (currentItems.length === 2) {

      if (currentItems[0].value === currentItems[1].value) {
        setSuccessFulItems([...successfulItems, currentItems[0].id, currentItems[1].id])
        setTimeout(() => {
          setTotalCounter(totalCounter + 2)
        }, 1000)

        setTimeout(() => {
          setMemoryGameItems(memoryGameItems.map(item => {
            if (item.id === currentItems[0].id || item.id === currentItems[1].id) {
              return { ...item, success: 'success' }
            }
            return item
          }))
        }, 300)

        setTimeout(() => {
          setMemoryGameItems(memoryGameItems.map(item => {
            if (item.id === currentItems[0].id || item.id === currentItems[1].id) {
              return { ...item, success: '' }
            }
            return item
          }))
          setCurrentItems([])
        }, 1000)

      } else {

        setTimeout(() => {
          setMemoryGameItems(memoryGameItems.map(item => {
            if (item.id === currentItems[0].id || item.id === currentItems[1].id) {
              return { ...item, success: 'error' }
            }
            return item
          }))
        }, 500)

        setTimeout(() => {
          setMemoryGameItems(memoryGameItems.map(item => {
            if (item.id === currentItems[0].id || item.id === currentItems[1].id) {
              return { ...item, active: false, success: '' }
            }
            return item
          }))
          setCurrentItems([])
          setStepsCounter(stepsCounter + 1)
        }, 2000)
      }
    }
    // eslint-disable-next-line
  }, [currentItems])

  return (
    <section className="memory">
      <h1 className="memory__title">Игра на память</h1>
      <h1 className="memory__sub-title">Найдите все пары картинок за наименьшее количество ошибок</h1>
      {totalCounter === memoryGameItems.length
        ? <div className="memory__info memory__info--active">
          <p className="memory__text">У вас получилось! Количество ошибок: {stepsCounter}</p>
          <p className="memory__restart" onClick={() => window.location.reload()}>Начать заново</p>
        </div>

        : <div className="memory__info">
          <p className="memory__text">У вас получилось! Количество шагов: {stepsCounter}</p>
          <p className="memory__restart">Начать заново</p>
        </div>
      }
      <div className="memory__items">
        {memoryGameItems.map(item =>
          <MemoryItem
            key={item.id}
            id={item.id}
            success={item.success}
            value={item.value}
            src={item.src}
            active={item.active}
            choosingItem={choosingItem}
          />
        )}
      </div>
      <footer className="memory__footer">
        <p className="footer__author">Разработал <a href="https://t.me/kvvprof" target="blank"><b>@kvvprof</b></a></p>
      </footer>
    </section>
  )
}

export default MemoryGame
