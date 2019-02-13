<template>
    <div v-if="!filteredList.length">
        <h3 class="empty-list-text">Your list is empty</h3>
    </div>
    <div v-else class="list-wrapper">
        <todo-item
            v-for="item in filteredList"
            :key="item.id"
            :item="item"
        />
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import TodoItem from './TodoItem.vue'

export default {
    components: {
        TodoItem
    },
    computed: {
        ...mapGetters('todoModule', [
            'filteredList'
        ])
    },
    methods: {
        ...mapActions('todoModule', [
            'getItems'
        ]),
    },
    created() {
        this.getItems()
    }
}
</script>
<style lang="scss" scoped>
.empty-list-text {
    text-align: center;
    margin: 20px;
    }
.list-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
}
</style>
