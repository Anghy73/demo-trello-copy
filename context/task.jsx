import { createContext, useReducer } from 'react'
import { reducer, reducerInitialState } from '../reducer/reducer'

export const TaskContext = createContext()

export function TaskProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, reducerInitialState)

  const addTask = product => dispatch({
    type: 'ADD_TASK',
    payload: product
  })

  const updateTask = product => dispatch({
    type: 'UPDATE_TASK',
    payload: product
  })

  const delTask = product => dispatch({
    type: 'DELETE_TASK',
    payload: product
  })

  const dropTask = product => dispatch({
    type: 'DROP_TASK',
    payload: product
  })

  return (
    <TaskContext.Provider value={{
      tasks: state,
      addTask,
      updateTask,
      dropTask,
      delTask
    }}
    >
      {children}
    </TaskContext.Provider>
  )
}
