import Vue from 'vue'
import Vuex from 'vuex'
import difference from 'lodash/difference'
import findIndex from 'lodash/findIndex'
import { getTodoListApi, addItemApi, removeItemApi, updateTodoDataApi } from '../api'


Vue.use(Vuex)

const todoModule = {
    namespaced: true,
    state: {
        todoItems: [],
        searchValue: '',
    },
    mutations: {
        setItemsList(state, items) {
            state.todoItems = items
        },
        addItem(state, item) {
            state.todoItems = [...state.todoItems, item]
        },
        removeItem(state, id) {
            const removedItem = state.todoItems.find(item => item.id === id)
            state.todoItems = difference(state.todoItems, [removedItem])
        },
        setTodo(state, { id, updatedItem: newItemData }) {
            const { todoItems } = state
            const itemIndex = findIndex(state.todoItems, item => item.id === id)
            todoItems.splice(itemIndex, 1, newItemData)
            state.todoItems = todoItems
        },
        setSearchValue(state, value) {
            state.searchValue = value
        }
    },
    actions: {
        async getItems({ commit }) {
            const todoList = await getTodoListApi()
            commit('setItemsList', todoList)
        },
        async addItem({ commit }, text) {
            const item = {'itemText': text, done: false }
            const addedItem = await addItemApi(item)
            commit('addItem', addedItem)
            commit('setSearchValue', '')
        },
        async removeItemAction({ commit }, id) {
            await removeItemApi(id)
            commit('removeItem', id)
        },
        async changeDoneStatus({ commit, getters }, id) {
            const item = getters.todoList.find(item => item.id === id)
            const newDoneStatus = !item.done
            const updatedItem = {...item, done: newDoneStatus }
            await updateTodoDataApi(id, updatedItem)
            commit('setTodo', { id, updatedItem })
        },
        changeSearchRequest ({ commit }, text) {
            commit('setSearchValue', text)
        }
    },
    getters: {
        todoList: (state) => state.todoItems,
        seachValue: (state) => state.searchValue,
        filteredList: (state) => state.todoItems
            .filter(item => item.itemText.includes(state.searchValue))
            .reverse()
    }
  }


const store = new Vuex.Store({
    modules: {
        todoModule
    }
})

export default store;
