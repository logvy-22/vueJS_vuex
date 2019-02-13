<template>
    <div class="search-wrapp">
        <input
            type="text"
            @input="onSearchChange"
            placeholder="what are you looking for"
            class="search"
            :value="seachValue"
        />
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('todoModule', [
            'seachValue'
        ])
    },
    methods: {
        ...mapActions( 'todoModule', [
            'changeSearchRequest'
        ]),
        onSearchChange(e) {
            this.changeSearchRequest(e.target.value)
        }
    }
}
</script>
<style lang="scss" scoped>
.search-wrapp {
    display: flex;
    height: 40px;
    position: relative;
    justify-content: center; 
    margin-top: 40px;

    .search {
        width: 30%;
    }
}

</style>