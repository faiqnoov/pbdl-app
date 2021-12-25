<template>
  <div class="card task-item mb-2" v-bind:class="taskStatus">
    <div class="card-body">
      <div class="task-info">
        <h4>{{ task.matkul }}</h4>
        <p><i class="fas fa-clipboard-list"></i> {{ task.deskripsi }}</p>
        <p><i class="fas fa-calendar-alt"></i> {{ task.deadline }}</p>
        <p>
          <i class="fas fa-server"></i>
          <a
            v-if="task.link.length > 1"
            v-bind:href="task.link"
            target="_blank"
          >
            {{ task.pengumpulan }}
            <i class="fas fa-external-link-alt ms-2 text-primary"></i>
          </a>
          <span v-else>{{ task.pengumpulan }}</span>
        </p>
      </div>

      <div class="action-panel">
        <div class="d-flex justify-content-center">
          <button
            v-if="task.status == 'progress' || task.status == 'done'"
            type="button"
            class="btn btn-outline-danger btn-sm mark-as-todo"
            @click="statusTodo"
          >
            <i class="fas fa-exclamation"></i>
          </button>
          <button
            v-if="task.status == 'todo' || task.status == 'done'"
            type="button"
            class="btn btn-outline-warning btn-sm mark-as-progress"
            @click="statusProgress"
          >
            <i class="fas fa-hourglass-half"></i>
          </button>
          <button
            v-if="task.status == 'todo' || task.status == 'progress'"
            type="button"
            class="btn btn-outline-success btn-sm mark-as-done"
            @click="statusDone"
          >
            <i class="fas fa-check"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm delete"
            @click="deleteTask"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
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
        prog: this.task.status == "progress",
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
      if (confirm("Apakah kamu yakin akan menghapus data?")) {
        TasksCollection.remove(this.task._id);
      }
    },
  },
};
</script>

<style scoped>
.task-item {
  border: 2px solid #fff;
  background-color: var(--c2);
}

.todo {
  border-color: var(--cTodo);
}

.prog {
  border-color: var(--cProg);
}

.done {
  border-color: var(--cDone);
}

.task-item h4 {
  font-weight: 500;
  font-size: 16px;
}

.task-item p {
  margin-bottom: 0;
  font-weight: 300;
  font-size: 16px;
}

.task-info i {
  margin-right: 8px;
  font-size: 14px;
  color: var(--c3);
}

.task-info a {
  text-decoration: none;
  color: var(--cText);
}

.action-panel {
  margin-top: 15px;
  display: none;
}

.task-item:hover .action-panel {
  display: block;
}

button {
  margin: 0 5px;
}

.delete {
  margin-left: 30px;
}

.btn:hover {
  color: var(--cText);
}
</style>