<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <btn type="primary" @click="notify()">VueBootstrap</btn>
   	<alert-message :message="message" :show="show" @changeStatus="show = false" :duration="duration"></alert-message>
  </div>
</template>

<script>
import alertMessage from '@/assets/plugin/alert.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      message:'Welcome to Your Vue.js App',
      duration: 2000
    }
  },
  components: {
  	alertMessage
  },
  methods: {
  	notify() {
			this.show = true;
			setTimeout(() => {
				this.show = false;
			},1500)
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.alerts {
		text-align: center;
		margin-left: 37.5%;
	}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
