<template>
  <div class="task-container row row-cols-1 row-cols-md-3">
    <div class="task-group">
      <h3>To Do</h3>
      <TaskItem
        v-for="task in todoTask"
        v-bind:key="task._id"
        v-bind:task="task"
      />
    </div>

    <div class="task-group">
      <h3>In Progress</h3>
      <TaskItem
        v-for="task in progressTask"
        v-bind:key="task._id"
        v-bind:task="task"
      />
    </div>

    <div class="task-group">
      <h3>Completed</h3>
      <TaskItem
        v-for="task in completedTask"
        v-bind:key="task._id"
        v-bind:task="task"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TaskItem from "./TaskItem.vue";

export default {
  components: {
    TaskItem,
  },
  props: ["tasks"],
  data() {
    return {};
  },
  computed: {
    todoTask: function () {
      return this.tasks.filter(function (task) {
        return task.status == "todo";
      });
    },
    progressTask: function () {
      return this.tasks.filter(function (task) {
        return task.status == "progress";
      });
    },
    completedTask: function () {
      return this.tasks.filter(function (task) {
        return task.status == "done";
      });
    },
  },
};
</script>