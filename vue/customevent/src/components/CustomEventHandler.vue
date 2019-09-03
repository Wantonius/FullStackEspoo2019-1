<template>
	<div>
		<h1>Child component says: {{childmessage}}</h1>
		<CustomEventEmitter @my-custom-event="eventHandler(...arguments)"/>
	</div>
</template>
<script>
import CustomEventEmitter from './CustomEventEmitter';

export default {
	name:"CustomEventHandler",
	data() {
		return {
			childmessage:"No message yet"
		}
	},
	methods: {
		eventHandler: function(data) {
			this.childmessage = data
		}
	},
	components:{CustomEventEmitter}

}
</script>