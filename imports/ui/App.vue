<template>
  <div class="container">
    <header>
      <h1>Task Manager</h1>
    </header>
    <main>
      <!-- <Task v-for="task in getTasks()" v-bind:key="task._id" v-bind:task="task" /> -->
      <Task v-bind:tasks="getTasks" />
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import Task from "./components/Task.vue";
import { TasksCollection } from "../api/TasksCollection";

export default {
  components: {
    Task,
  },
  data() {
    return {};
  },
  methods: {},
  meteor: {
    getTasks() {
      return TasksCollection.find({}).fetch();
    }
  }
};
</script>

<style>
body {
  margin: 30px;
}
</style>
