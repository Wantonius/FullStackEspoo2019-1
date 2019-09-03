<template>
	<div>
		<ShoppingForm @add-to-list="addToList(...arguments)"/>
		<ShoppingList v-bind:list="list" @remove-item="remove(...arguments)"
		@edit-item="edit(...arguments)"/>
	</div>
</template>
<script>
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';

export default {
	name:"ShoppingContainer",
	components: {
		ShoppingForm,
		ShoppingList
	},
	data() {
		return {
			list:[],
			id:0
		}
	},
	methods: {
		addToList:function(data) {
			this.id++;
			data.id = this.id;
			this.list.push(data);
		},
		remove:function(id) {
			for(let i=0;i<this.list.length;i++) {
				if(id === this.list[i].id) {
					this.list.splice(i,1);
					return;
				}
			}
		},
		edit:function(item) {
			for(let i=0;i<this.list.length;i++) {
				if(item.id === this.list[i].id) {
					this.list.splice(i,1,item);
					return;
				}
			}		
		}
	}
}
</script>