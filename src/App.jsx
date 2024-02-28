import Header from './components/Header'
import DropDragZone from './components/DropDragZone'
import { useState } from 'react'

function App () {
  const [Tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Realizar una copia de Trello',
      list: 1
    },
    {
      id: 2,
      description: 'Realizar los funcionalidades de la copia de Trello',
      list: 1
    },
    {
      id: 3,
      description: 'Realizar los estilos de la copia de Trello',
      list: 1
    }
  ])

  return (
    <div className='flex flex-col w-screen h-screen text-white bg-[#0f0f0f]'>
      <Header />
      <main className='flex-1 flex flex-col justify-center items-center'>
        {/* <h1>Tasks</h1> */}
        <div className='flex gap-6'>
          <DropDragZone title='To-Do' tasks={Tasks} setTasks={setTasks} list={1} add />
          <DropDragZone title='Process' tasks={Tasks} setTasks={setTasks} list={2} add={false} />
          <DropDragZone title='Done' tasks={Tasks} setTasks={setTasks} list={3} add={false} />
        </div>
      </main>
    </div>
  )
}

export default App
