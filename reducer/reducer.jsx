export const reducerInitialState = [
  {
    id: 1,
    description: 'Realizar una copia de Trello',
    list: 1
  },
  {
    id: 2,
    description: 'Realizar los funcionalidades de la copia de Trello',
    list: 1
  },
  {
    id: 3,
    description: 'Realizar los estilos de la copia de Trello',
    list: 1
  }
]

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TASK': {
      console.log('add')
      const newState = [
        ...state,
        {
          id: Date.now(),
          description: 'Task...',
          list: 1
        }
      ]

      return newState
    }

    case 'UPDATE_TASK': {
      console.log('update')
      const { id } = actionPayload.item
      const newState = state.map(item => {
        if (item.id === id) {
          item.description = actionPayload.value
        }
        return item
      })
      return newState
    }

    case 'DROP_TASK': {
      console.log('drop')
      const item = state.find(task => task.id === +actionPayload.itemID)
      console.log(actionPayload.list)
      item.list = actionPayload.list

      const newState = state.map(task => {
        if (task.id === item.id) return item
        return task
      })

      return newState
    }
  }
}
