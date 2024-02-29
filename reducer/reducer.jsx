export const reducerInitialState = JSON.parse(window.localStorage.getItem('tasks')) || []

const updateLocalStorage = list => {
  window.localStorage.setItem('tasks', JSON.stringify(list))
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TASK': {
      const newState = [
        ...state,
        {
          id: Date.now(),
          description: 'Task...',
          list: 1
        }
      ]

      updateLocalStorage(newState)

      return newState
    }

    case 'UPDATE_TASK': {
      const { id } = actionPayload.item
      const newState = state.map(item => {
        if (item.id === id) {
          item.description = actionPayload.value
        }
        return item
      })

      updateLocalStorage(newState)

      return newState
    }

    case 'DROP_TASK': {
      const item = state.find(task => task.id === +actionPayload.itemID)
      item.list = actionPayload.list

      const newState = state.map(task => {
        if (task.id === item.id) return item
        return task
      })

      updateLocalStorage(newState)

      return newState
    }

    case 'DELETE_TASK': {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)

      updateLocalStorage(newState)

      return newState
    }
  }
}
