import useTask from '../hooks/useTask'
import AddTask from './AddTask'
import TaskItem from './TaskItem'

function DropDragZone ({ title, tasks, setTasks, list, add }) {
  const { dropTask } = useTask()
  const getList = (listNumber) => tasks.filter(task => task.list === list)

  const dragginOver = (evt) => {
    evt.preventDefault()
  }

  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData('itemID')
    dropTask({ item: tasks, itemID, list })
  }

  return (
    <div className='flex flex-col w-96 min-h-96 max-h-96 border-2 border-emerald-600 px-6 py-3 rounded'>
      <h1 className='font-bold text-center mb-5 text-xl'>{title}</h1>
      {
        add ? <AddTask /> : ''
      }
      <ul
        className='flex-1 flex flex-col h-72 gap-3 overflow-y-auto' droppable='true' onDragOver={(evt) => dragginOver(evt)} onDrop={(evt) => onDrop(evt, list)}
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
