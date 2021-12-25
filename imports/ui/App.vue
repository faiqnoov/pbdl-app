<template>
  <div class="container">
    <header class="row align-items-center">
      <div class="col">
        <h1 class="text-center">NugasKuy</h1>
      </div>
    </header>
    <main>
      <TaskForm />
      <Task v-bind:tasks="getTasks" />
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import Task from "./components/Task.vue";
import TaskForm from "./components/TaskForm.vue";
import { TasksCollection } from "../api/TasksCollection";

export default {
  components: {
    Task,
    TaskForm,
  },
  data() {
    return {};
  },
  methods: {},
  meteor: {
    getTasks() {
      // show latest modified task first
      return TasksCollection.find({}, { sort: { dateModified: -1 } }).fetch();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");

/* color pallete */
:root {
  --c1: #2f3437;
  --c2: #3f4447;
  --c3: #aca9a9;
  --cText: #ebebeb;
  --cTodo: #7a363b;
  --cProg: #92763f;
  --cDone: #325241;
}

body {
  background-color: var(--c1);
  color: var(--cText);
  font-family: "Poppins", sans-serif;
}

header {
  height: 180px;
}

header h1 {
  font-family: "Kanit", sans-serif;
  font-weight: 600;
}
</style>
