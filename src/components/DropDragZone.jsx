import TaskItem from './TaskItem'

function DropDragZone ({ title, tasks, tasksRender, setTasks, list, add }) {
  const getList = (listNumber) => tasks.filter(task => task.list === list)

  const dragginOver = (evt) => {
    evt.preventDefault()
  }

  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData('itemID')
    const item = tasks.find(task => task.id === +itemID)
    item.list = list

    const newState = tasks.map(task => {
      if (task.id === itemID) return item
      return task
    })

    setTasks(newState)
  }

  return (
    <div className='flex flex-col min-w-72 max-w-xl w-full min-h-52 border-2 border-emerald-600 px-6 py-3 rounded'>
      <h1 className='font-bold text-center mb-5 text-xl'>{title}</h1>
      {
        add ? <div className='flex justify-center items-center border-2 border-dashed border-emerald-800 py-2 rounded cursor-pointer mb-8 hover:border-emerald-600'><span>Add Task</span></div> : ''
      }
      <ul
        className='flex-1 flex flex-col justify-start min-h-40 gap-3 py-4 px-2 bg-emerald-950 rounded' droppable='true' onDragOver={(evt) => dragginOver(evt)} onDrop={(evt) => onDrop(evt, list)}
      >
        {
          getList(list).map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        }
      </ul>
    </div>
  )
}

export default DropDragZone
