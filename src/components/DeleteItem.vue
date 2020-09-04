<template>
  <div class="delete">
    <img
      class="deleteIcon"
      src="@/assets/trashcan.svg"
      alt="delete"
      @click="$emit('send-id', id)"
    />
  </div>
</template>

<script>
//import { component } from "vue/types/umd";
export default {
  props: ["id"],

  methods: {}
};
</script>

<style lang="scss" scoped>
.delete {
  margin: 20px;
  display: flex;
  justify-content: flex-end;

  .deleteIcon {
    width: 20px;
    height: 20px;
  }
}
</style>
