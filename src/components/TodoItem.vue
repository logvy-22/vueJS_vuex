<template>
    <div class="to-do-item-wrapp">
        <div :class="['to-do-item', {'done': item.done}]">
            <span class="text-content">{{ item.itemText }}</span>
            <span class="control-btn remove-btn" @click="removeHandler">x</span>
            <span class="control-btn check-done-state" @click="doneStatusChanged">{{ buttonText }}</span>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    computed: {
        buttonText () {
            return this.item.done
                ? 'Return to list'
                : 'Check as done'
        }
    },
    props: {
        item: {
            type: Object,
            default: {
                itemText: '',
                id: '',
                isDone: false
            }
        }
    },
    methods: {
        ...mapActions('todoModule', [
            'removeItemAction',
            'changeDoneStatus'
        ]),
        doneStatusChanged() {
            this.changeDoneStatus(this.item.id)
        },
        removeHandler() {
            this.removeItemAction(this.item.id)
        }
    }
}
</script>
<style lang="scss" scoped>
.to-do-item-wrapp {
    padding: 10px;
    width: 25%;
}
.to-do-item {
    border: 1px solid #dcdcdc;
    padding: 20px;
    position: relative;
    min-height: 80px;
    height: 100%;
    background: #bd7a0b;

    &.done {
        background: transparent;
    }
    .text-content {
        word-break: break-all;
    }
}
.control-btn {
    position: absolute;
    right: 20px;
    cursor: pointer;

    &.remove-btn {
        top: 10px;
    }

    &.check-done-state {
        bottom: 10px;
    }
}


</style>
