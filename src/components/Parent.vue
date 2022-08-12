<template>
  <div>
    <span
      class="title"
    >
      Parent Component
    </span>
    <Child/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data () {
    return {
      showSpan: false,
      showChild: false
    }
  }
}
</script>