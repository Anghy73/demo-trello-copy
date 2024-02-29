import { useContext } from 'react'
import { TaskContext } from '../../context/task'

const useTask = () => {
  const task = useContext(TaskContext)

  if (task === undefined) throw new Error('useTask must be used within a TaskProvider')

  return task
}

export default useTask
