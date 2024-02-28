import { HiOutlinePencil } from 'react-icons/hi'

function Header () {
  return (
    <div className='flex items-center min-h-16 border-b-2 border-emerald-600'>
      <label className='flex items-center pl-2' htmlFor='title'>
        <input name='title' id='title' className='w-40 px-3 text-start text-xl font-semibold bg-transparent py-2 focus-visible:outline-none cursor-default' type='text' value='Title' readOnly />
        <HiOutlinePencil className='w-6 h-6 p-0.5 cursor-pointer' />
      </label>
    </div>
  )
}

export default Header
