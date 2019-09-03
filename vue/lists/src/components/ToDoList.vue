<template>
	<div>
		<label for="todoinput">Enter new Todo</label>
		<input type="text"
				name="todoinput"
				v-model="currentToDo"
				v-on:keyup.enter="addToDo()"/>
		<hr/>
		<ul v-if="toDoItems.length">
			<li v-for="(todo,index) in toDoItems" :key="todo.id">
				{{todo.todo}}
				<button v-on:click="remove(index)">Do!</button>
			</li>
		</ul>
		<p v-else>
			Nothing to do!
		</p>
	</div>
</template>
<script>
export default {
	name: "ToDoList",
	data() {
		return {
			toDoItems: [
				{todo:"Do Laundry",id:0},
				{todo:"Code Vue",id:1},
			],
			currentId:2,
			currentToDo:""
		}
	},
	methods: {
		addToDo: function() {
			this.toDoItems.push({
				todo:this.currentToDo,
				id:this.currentId
			})
			this.currentId++;
			this.currentToDo = "";
		},	
		remove: function(index) {
			this.toDoItems.splice(index,1);
		}
	}
}

</script>