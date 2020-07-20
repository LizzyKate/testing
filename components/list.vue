<template>
  <div>
    <ul>
      <li v-for="(item, i) in choose" :key="i">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    choose: {
      type: Array,
      required: true,
    },
  },
}
</script>
