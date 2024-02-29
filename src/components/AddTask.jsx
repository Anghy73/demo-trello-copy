import useTask from '../hooks/useTask'

function AddTask () {
  const { addTask } = useTask()
  const handleClickAdd = () => {
    addTask()
  }

  return (
    <>
      <div className='flex justify-center items-center border-2 border-dashed border-emerald-800 py-2 rounded cursor-pointer mb-8 hover:border-emerald-600' onClick={handleClickAdd}><span>Add Task</span></div>
    </>
  )
}

export default AddTask
