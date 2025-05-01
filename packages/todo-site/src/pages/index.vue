<script setup lang="ts">
import { YN_VALUE } from "@my-packages/toolkits/constants/common";
import type { TodoItem } from "@my-packages/toolkits/types/todo";

const todoItem: TodoItem = {
  id: "1",
  title: "Todo item",
  completedYn: YN_VALUE.Y,
  content: "Todo item content",
  createdAt: new Date().getTime(),
};
</script>

<template>
  <h1>Home page</h1>
  <div>
    {{ JSON.stringify(todoItem) }}
  </div>
</template>
