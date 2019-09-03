<template>
	<div class="hello">
		<h1>Hello World</h1>
		<p>{{msg}}</p>
		<p>Hello, {{firstName}}</p>
		<p>{{helloMessage}}</p>
		<p>{{helloMethod()}}</p>
	</div>
</template>

<script>
export default {
	name:'MyFirstComponent',
	props:['firstName'],
	data() {
		return {
			msg:"Hello World"
		}
	},
	computed: {
		helloMessage: function() {
			return "Hello again, "+this.firstName;
		}
	},
	methods: {
		helloMethod: function() {
			return "Hello from method, "+this.firstName;
		}
	}
}
</script>
