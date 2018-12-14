<template>
	<div>
		<message-alert :message="message" :show="show" @changeStatus="show = false" :dismissible="true"></message-alert>
		<btn type="primary" @click="notify()">VueBootstrap</btn>
	</div>
</template>
<script>
	import messageAlert from '@/assets/plugin/alert'
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
			    show: true,
			    message:'Welcome to Your Vue.js App',
			    duration: 2000
			}
		},
		components: {
			messageAlert
		},
		methods: {
			notify() {
				this.show = true;
					setTimeout(() => {
						this.show = false;
					},900)
			},
		},
		created() {
			
		}
	}
</script>
<style scoped>

</style>