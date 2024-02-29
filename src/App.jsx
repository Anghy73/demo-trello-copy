import Header from './components/Header'
import DropDragZone from './components/DropDragZone'
import useTask from './hooks/useTask'

function App () {
  const { tasks } = useTask()

  return (
    <div className='flex flex-col w-screen h-screen text-white bg-[#0f0f0f]'>
      <Header />
      <main className='flex-1 flex flex-col justify-center items-center'>
        <div className='flex gap-6'>
          <DropDragZone title='To Do' tasks={tasks} list={1} add />
          <DropDragZone title='To Do' tasks={tasks} list={2} add={false} />
          <DropDragZone title='To Do' tasks={tasks} list={3} add={false} />
        </div>
      </main>
    </div>
  )
}

export default App
