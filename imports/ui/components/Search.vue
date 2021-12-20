<template>
  <div class="search">
    <!-- <form @submit.prevent="handleSearch">
    </form> -->
    <input
      type="text"
      placeholder="Cari Tugas"
      v-model="searchKeyword"
      v-on:keyup.enter="$emit('searchKey', $event)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
    };
  },
};
</script>