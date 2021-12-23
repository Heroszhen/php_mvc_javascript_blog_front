<script>
    import PageStore from '../stores/PageStore.js';
    import { onMount } from 'svelte';
    import { getBaseurl } from "../services/ToolService.js";

    PageStore.set("home");
    function getData(){
        fetch(getBaseurl() + "/getallcategory")
		.then(response=>response.json())
		.then(json=>{
			console.log(json)
		});
    }

    onMount(() => { // = onMount + beforeDestroy
		//......
		getData();
	});
</script>

<div id="home">
	home
</div>

<style>
	
</style>