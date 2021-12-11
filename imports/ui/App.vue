<template>
  <div class="container">
    <header>
      <h1>Task Manager</h1>
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
body {
  margin: 30px;
}
</style>
