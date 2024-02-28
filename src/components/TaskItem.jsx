function TaskItem ({ task }) {
  const startDrag = (evt, item) => {
    evt.dataTransfer.setData('itemID', item.id)
  }

  return (
    <li className='bg-emerald-700 px-2 py-2 rounded-md cursor-pointer' draggable onDragStart={(evt) => startDrag(evt, task)}>{task.description}</li>
  )
}

export default TaskItem
