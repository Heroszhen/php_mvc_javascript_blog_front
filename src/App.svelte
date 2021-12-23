<script>
	import Home from './components/Home.svelte';

	import { Router, Route, Link, navigate } from "svelte-navigator";
	import PageStore from './stores/PageStore.js';
	import { onDestroy } from 'svelte';
	import { getRelativepath } from './services/ToolService.js';


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
	<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div class="navbar-brand mr-5">Mon Blog</div>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
	  
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul class="navbar-nav mr-auto">
			<li class="nav-item" class:active="{page==='home'}">
				<Link to="/" class="nav-link">Accueil</Link>
			</li>
			<li class="nav-item" class:active="{page==='connection'}">
				<Link to="/connexion" class="nav-link">Connexion</Link>
			</li>
			<li class="nav-item" class:active="{page==='registration'}">
				<Link to="/inscription" class="nav-link">Inscription</Link>
			</li>
		  </ul>
		</div>
	</nav>
	<main>
		<div>
			<img src="assets/shutterstock_731369419-min.png" alt="">
		</div>
		<Route path="/">
			<Home />
		</Route>
	</main>
</Router>

<style>
	nav li.nav-item.active :global(.nav-link){
		color:orange;
		font-weight: bold;
	}
</style>