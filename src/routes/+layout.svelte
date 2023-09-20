<script>
	 import { page } from '$app/stores'
	 import { enhance } from '$app/forms'
	import './styles.css';
</script>

<div class="app">
	<nav class="logout">
		{#if !$page.data.user}
		  <a href="/login">Login</a>
		  <a href="/register">Register</a>
		{/if}
	  
		{#if $page.data.user}
		<div class="btn-group nav-admin" role="group">
			<a href="/admin">Admin</a>
			<form class="logout" action="/logout" method="POST" use:enhance>
				<button type="submit" class="btn btn-link">Log out</button>
			  </form>
		  </div>
		  
	  
		  
		{/if}
	  </nav>

	<main>
		<slot />
	</main>

	
</div>


