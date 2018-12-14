<template>
	<div class="alert_message">		
		<collapse v-model="show">
	      <alert :type="warning" :duration="duration" :show="show" :dismissible="dismissible" @dismissed="changeStatus()">{{message}}</alert>
	    </collapse>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			message: {
				type: String,
				default: 'this is a message',
				
			},
			show: {
				type: Boolean,
				default: false
			},
			duration: {
				type: Number,
				default: 2000
			},
			warning: {
				type: String,
				default: 'warning'
			},
			dismissible: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			changeStatus() {
				this.$emit('changeStatus',this.show)
			}
		}
	}
</script>

<style scoped>
	.alert_message {
		width: 50%;
		position: absolute;
		top: 10px;
		left: 25%;
	}
</style>