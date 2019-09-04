<template>
	<div>
		<router-link to="/">Shopping List</router-link>
		<br/>
		<router-link to="/form">Add To List</router-link>
		<hr/>
		<router-view/>
	</div>
</template>
<script>
export default {
	name:"ShoppingContainer",
}
</script>