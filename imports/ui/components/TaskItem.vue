<template>
  <div class="task-item" v-bind:class="taskStatus">
    <ul>
      <li>Matkul: {{ task.matkul }}</li>
      <li>Deskripsi: {{ task.deskripsi }}</li>
      <li>Deadline: {{ task.deadline }}</li>
      <li>
        Pengumpulan:
        <a v-bind:href="task.link" target="_blank">{{ task.pengumpulan }}</a>
      </li>
      <li>Status: {{ task.status }}</li>
    </ul>

    <div class="action-panel">
      <button
        v-if="task.status == 'progress' || task.status == 'done'"
        class="mark-as-todo"
        @click="statusTodo"
      >
        T
      </button>
      <button
        v-if="task.status == 'todo' || task.status == 'done'"
        class="mark-as-progress"
        @click="statusProgress"
      >
        P
      </button>
      <button
        v-if="task.status == 'todo' || task.status == 'progress'"
        class="mark-as-done"
        @click="statusDone"
      >
        D
      </button>
      -
      <button class="delete" @click="deleteTask">X</button>
    </div>
  </div>
</template>

<script>
import { TasksCollection } from "../../api/TasksCollection";

export default {
  props: ["task"],
  data() {
    return {};
  },
  computed: {
    taskStatus: function () {
      return {
        todo: this.task.status == "todo",
        progress: this.task.status == "progress",
        done: this.task.status == "done",
      };
    },
  },
  methods: {
    statusProgress() {
      TasksCollection.update(this.task._id, {
        $set: { status: "progress", dateModified: new Date() },
      });
    },
    statusTodo() {
      TasksCollection.update(this.task._id, {
        $set: { status: "todo", dateModified: new Date() },
      });
    },
    statusDone() {
      TasksCollection.update(this.task._id, {
        $set: { status: "done", dateModified: new Date() },
      });
    },
    deleteTask() {
      TasksCollection.remove(this.task._id);
    },
  },
};
</script>

<style scoped>
.task-item {
  border: 1px solid #000;
  width: 300px;
  margin-bottom: 10px;
  padding-right: 20px;
}
</style>