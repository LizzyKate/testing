<template>
  <div>
    <h1>List</h1>
    <Message-toggle :text="msg" />
    <list :choose="items" />
  </div>
</template>

<script>
import MessageToggle from './message'
import List from './list'

export default {
  components: {
    MessageToggle,
    List,
  },
  data() {
    return {
      items: ['Item-One', 'Item-Two'],
      msg: 'Default message',
    }
  },
}
</script>
