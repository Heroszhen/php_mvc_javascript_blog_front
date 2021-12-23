<script>
	import Home from './components/Home.svelte';

	import { Router, Route, Link, navigate } from "svelte-navigator";
	import PageStore from './stores/PageStore.js';
	import { onMount, onDestroy } from 'svelte';
	import { getBaseurl, getRelativepath, stopPropagation } from './services/ToolService.js';


	let baseurl = getBaseurl();
	let page = "";
	//developement on localhost
	window.onload = () =>{
		if(window.location.host.includes("localhost")){
			let path = getRelativepath(window.location.host,window.location.href);
			navigate('/' + path, { replace: true });
		}
	}
	const unsubscribe = PageStore.subscribe(value => {
		page = value;
	});
	onDestroy(unsubscribe);
</script>

<Router primary={false}>
	<header>

	</header>
	<main>
		<Route path="/">
			<Home />
		</Route>
	</main>
</Router>

<style>
	
</style>