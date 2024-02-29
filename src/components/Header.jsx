import { useState } from 'react'
import { HiOutlinePencil } from 'react-icons/hi'

function Header () {
  const [editEnable, setEditEnable] = useState(true)
  const [title, setTitle] = useState(window.localStorage.getItem('title') || 'Title')

  const handleClickEdit = () => {
    setEditEnable(!editEnable)
  }

  const handleChangeTitle = (evt) => {
    const newTitle = evt.target.value
    window.localStorage.setItem('title', newTitle)
    setTitle(newTitle)
  }

  return (
    <div className='flex items-center min-h-16 border-b-2 border-emerald-600'>
      <label className='flex items-center pl-2' htmlFor='title'>
        <input name='title' id='title' className='w-40 px-3 text-start text-xl font-semibold bg-transparent py-2 focus-visible:outline-none cursor-default' type='text' value={title} readOnly={editEnable} onChange={handleChangeTitle} />
        <HiOutlinePencil className='w-6 h-6 p-0.5 cursor-pointer' onClick={handleClickEdit} />
      </label>
    </div>
  )
}

export default Header
