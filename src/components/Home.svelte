<script>
    import PageStore from '../stores/PageStore.js';
    import { onMount } from 'svelte';
    import { getBaseurl } from "../services/ToolService.js";

    PageStore.set("home");
    let allarticle = [];
    function getData(){
        fetch(getBaseurl() + "/getallarticle")
        .then(response=>response.json())
        .then(json=>{
          console.log(json);
          allarticle = json["data"].reverse();
        });
    }

    onMount(() => { // = onMount + beforeDestroy
		  getData();
	  });
</script>

<div id="home">
    <div class="container pt-5">
      home
    </div>
</div>

<style>
	
</style>