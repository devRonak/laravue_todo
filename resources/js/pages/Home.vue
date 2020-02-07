<template>
    <div>
        <div class="container ">
            <div class="todo_input_container">
                <form method="post" @submit="searchForm">
                    <div class="form-group">
                        <label>Todo</label>
                        <input type="text" class="form-control" ref="todo_input" name="todo_input" required>
                    </div>

                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>

            <div class="todo_area">
                <ul>
                    <li v-for="todo in todos" :class="{ 'check': todo.status }">
                        <input type="checkbox" class="todoCheck" v-model="todo.status">
                        {{ todo.todo }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                todos: [],
                check: false
            };
        },
        methods: {
            searchForm(e) {
                e.preventDefault();
                const single_todo = this.$refs.todo_input.value;
                this.todos.push({todo: single_todo});
                this.$refs.todo_input.value = ''; // clear input
                axios.post('/add', {
                    'todo' : single_todo,
                }).then(response => {
                    //console.log('done');
                }).catch(function (error) {
                    //console.log(error);
                });
            },
        }
    }

</script>
