import useTask from '../hooks/useTask'

function TaskItem ({ task }) {
  // const [value, setValue] = useState('')
  const { updateTask } = useTask()

  const handleChangeDescription = (evt) => {
    const newValue = evt.target.value
    updateTask({ item: task, value: newValue })
  }

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData('itemID', item.id)
  }

  return (
    <div>
      <input type='text' className='bg-emerald-700 px-2 py-2 rounded-md cursor-pointer inline-block w-full' value={task.description} draggable onDragStart={(evt) => startDrag(evt, task)} onChange={handleChangeDescription} />
      {/* <li className='bg-emerald-700 px-2 py-2 rounded-md cursor-pointer' draggable onDragStart={(evt) => startDrag(evt, task)}>{task.description}</li> */}
    </div>
  )
}

export default TaskItem
