<template>
	<div>
		<h1>Vue router test home page</h1>
		<h2>Enter a person to greet:</h2>
		<input type="text" v-model="personname"/>
		<button v-on:click="greetPerson()">Greet</button>
	</div>
</template>
<script>
export default {
	name:"Home",
	data() {
		return {
			personname:""
		}
	},
	methods: {
		greetPerson: function() {
			let person = {person:this.personname}
			this.$router.push({name:"Greet", params:person});
		}
	}
}

</script>