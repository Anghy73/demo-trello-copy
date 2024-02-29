import { useState } from 'react'
import useTask from '../hooks/useTask'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'

function TaskItem ({ task }) {
  const [editEnable, setEditEnable] = useState(true)
  const { updateTask, delTask } = useTask()

  const handleClickEdit = () => {
    setEditEnable(!editEnable)
  }

  const handleClickDel = () => {
    delTask(task)
  }

  const handleChangeDescription = (evt) => {
    const newValue = evt.target.value
    updateTask({ item: task, value: newValue })
  }

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData('itemID', item.id)
  }

  return (
    <div className='bg-emerald-700 px-2 py-2 rounded-md cursor-pointer w-full flex justify-between' draggable onDragStart={(evt) => startDrag(evt, task)}>
      <input type='text' className='focus-visible:outline-none flex-1 bg-transparent cursor-default mr-3' value={task.description} readOnly={editEnable} onChange={handleChangeDescription} />
      <div className='flex gap-2'>
        <HiOutlinePencil className='w-8 h-8 p-1' onClick={handleClickEdit} />
        <HiOutlineTrash className='w-8 h-8 p-1' onClick={handleClickDel} />
      </div>
    </div>
  )
}

export default TaskItem
