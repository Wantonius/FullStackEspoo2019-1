<template>
	<div>
		<label for="itemtype">Item type:</label>
		<input type="text"
		       v-model="item.type"
			   name="itemtype"/>
		<br/>
		<label for="price">Price:</label>
		<input type="number"
			   minimum="0"
			   step="0.01"
			   name="price"
			   v-model="item.price"/>
		<br/>
		<label for="count">Count:</label>
		<input type="number"
			   minimum="0"
			   name="count"
			   v-model="item.count"/>
		<br/>
		<button v-on:click="addToList()">Add</button>
	</div>
</template>
<script>
export default {
	name:"ShoppingForm",
	data() {
		return {
			item: {
				id:0,
				type:"",
				price:0,
				count:0
			}
		}
	},
	methods: {
		addToList: function() {
			this.$emit("add-to-list",this.item);
			this.item = {
				id:0,
				type:"",
				price:0,
				count:0
			}
		}
	}
}
</script>