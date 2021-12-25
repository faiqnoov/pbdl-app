<template>
  <div class="task-container row row-cols-1 row-cols-md-3">
    <div class="task-group mb-5">
      <button type="button" class="btn btn-danger btn-sm mb-3">
        To Do <span class="badge">{{ todoCount }}</span>
      </button>
      <TaskItem
        v-for="task in todoTask"
        v-bind:key="task._id"
        v-bind:task="task"
      />
    </div>

    <div class="task-group mb-5">
      <button type="button" class="btn btn-warning btn-sm mb-3">
        In Progress <span class="badge">{{ progCount }}</span>
      </button>
      <TaskItem
        v-for="task in progressTask"
        v-bind:key="task._id"
        v-bind:task="task"
      />
    </div>

    <div class="task-group mb-5">
      <button type="button" class="btn btn-success btn-sm mb-3">
        Completed <span class="badge">{{ doneCount }}</span>
      </button>
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
import { TasksCollection } from "../../api/TasksCollection";

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
  meteor: {
    todoCount() {
      return TasksCollection.find({ status: "todo" }).count();
    },
    progCount() {
      return TasksCollection.find({ status: "progress" }).count();
    },
    doneCount() {
      return TasksCollection.find({ status: "done" }).count();
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 16px;
  font-weight: 300;
}

.btn {
  border: none;
  color: var(--cText);
  font-size: 16px;
}

.btn .badge {
  font-weight: 400;
  background-color: var(--c2);
}

.btn-danger {
  background-color: var(--cTodo);
}
.btn-warning {
  background-color: var(--cProg);
}
.btn-success {
  background-color: var(--cDone);
}
</style>