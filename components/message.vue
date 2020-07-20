<template>
  <div>
    <h1>{{ text }}</h1>
    <button id="toggle-message" @click="toggleMessage">
      Change message
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    toggleMessage() {
      this.text = 'Message'
      //   if (this.text === 'Message') {
      //     this.text = 'toggled message'
      //   } else {
      //     return this.text
      //   }
      //   this.msg = this.msg === 'message' ? 'toggled message' : 'message'
    },
  },
}
</script>
