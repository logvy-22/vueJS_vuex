
import ApiCreator from './api'

const api = ApiCreator('localhost:3000')

export const getTodoListApi = () => api.get('todoItems')

export const addItemApi = (item) => api.post('todoItems', 
    {
        body: JSON.stringify(item),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
)

export const removeItemApi = (id) => api.delete(`todoItems/${id}`)

export const updateTodoDataApi = (id, newData) => api.put(`todoItems/${id}`, 
    {
        body: JSON.stringify(newData),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
)