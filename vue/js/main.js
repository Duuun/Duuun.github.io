var STORAGE_KEY = 'todos-vue'
var todoStorage = {
    fetch: function () {
        var todos = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || '[]'
        )
        todos.forEach(function (todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    }
}

const app = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    }
})