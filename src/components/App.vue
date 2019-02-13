<template>
   <div>
        <h1 id="title">To do list</h1>
        <todo-form />
        <search-form />
        <todo-list />
   </div>
</template>
<script>
import TodoForm from './Form.vue'
import SearchForm from './Search'
import TodoList from './TodoList.vue'

export default {
    data() {
        return {
            todoList: [],
        }
    },
    components: {
        TodoForm,
        TodoList,
        SearchForm
    },
}
</script>
<style scoped>
@import '../style.scss' ;

#title {
    padding: 20px;
    text-align: center;
    font-family: 'Orbitron', sans-serif;
    margin: 0;
    font-size: 2.5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    user-select: none;
}
</style>

