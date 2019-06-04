<template>
  <div>
   <div style="color: red">
     this is app here!
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleError(e){
    }
  },
  created() {},
  mounted() {},
};
</script>