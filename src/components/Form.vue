<template>
    <div class="form">
        <input type="text" placeholder="to do text" v-model.trim="todoText" >
        <button @click="onSubmitHandler">Add</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        ...mapActions('todoModule', [
            'addItem'
        ]),
        onSubmitHandler() {
            if (!this.todoText) return 
            this.addItem(this.todoText)
            this.todoText = ''
        }
    },
}
</script>
<style lang="scss" scoped>
.form {
    display: flex;
    justify-content: center;
    height: 40px;
}
.form button {
    padding: 0 25px;
}
</style>
