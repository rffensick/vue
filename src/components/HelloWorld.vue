<template>
  <div>
    <h1>All Tasks</h1>
    <ul>
      <li :key="index" v-for="(task, index) in tasks" v-text="task.desc" ></li>
    </ul>

    <h1>Completed</h1>
    <ul>
      <li :key="index" v-for="(task, index) in complitedTasks" v-text="task.desc" ></li>
    </ul>

    <h1>Uncomplited</h1>
    <ul>
      <li :key="index" v-for="(task, index) in uncomplitedTasks" v-text="task.desc" ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tasks: [
        {desc: 'Go to the store', completed: true},
        {desc: 'Finish screencast', completed: false},
        {desc: 'Make donation', completed: false},
        {desc: 'Clean inbox', completed: false},
        {desc: 'Make dinner', completed: false},
        {desc: 'Clean room', completed: true},
      ],
    }
  },

  computed: {
    complitedTasks() {
      return this.tasks.filter(task => task.completed)
    },
    uncomplitedTasks() {
      return this.tasks.filter(task => !task.completed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.is-loading {
  background-color: red;
}

h1, h2 {
  font-weight: normal;
}
ul {
  width: 300px;
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
