var STORAGE_KEY = 'todos-vuejs'
var todoStorage = {
    fetch: function () {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function (todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}

const app = new Vue({
    el: '#app',
    data: {
        todos: [],
        current: -1,
        options: [
            { value: -1, label: 'すべて' },
            { value: 0, label: '作業中' },
            { value: 1, label: '完了済' },
        ]
    },
    computed: {
        computedTodos: function () {
            return this.todos.filter(function (el) {
                return this.current < 0 ? true : this.current === el.state
            }, this)
        },
        labels() {
            return this.options.reduce(function (a, b) {
                return Object.assign(a, { [b.value]: b.label })
            }, {})
            // キーから見つけやすいように、次のように加工したデータを作成
            // {0: '作業中', 1: '完了', -1: 'すべて'}
        }
    },
    watch: {
        todos: {
            handler: function (todos) {
                todoStorage.save(todos)
            },
            deep: true
        }
    },
    created() {
        this.todos = todoStorage.fetch()
    },
    methods: {
        doAdd: function (event, value) {
            var comment = this.$refs.comment
            if (!comment.value.length) {
                return
            }

            // { ID, comment, state }
            this.todos.push({
                id: todoStorage.uid++,
                comment: comment.value,
                state: 0
            })

            // 追加後はフォームを空に
            comment.value = ''
        },

        // 状態変更
        doChangeState: function (item) {
            item.state = !item.state ? 1 : 0
        },

        // 削除処理
        doRemove: function (item) {
            var index = this.todos.indexOf(item)
            this.todos.splice(index, 1)
        }

    }
})