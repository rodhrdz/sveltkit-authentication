<script>
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import "@picocss/pico";
	import "./styles.css";
</script>

<div class="app">
	<nav aria-label="breadcrumb">
		<ul>
			{#if !$page.data.user}
				<li><a href="/login">Login</a></li>
				<li><a href="/register">Register</a></li>
			{/if}
			{#if $page.data.user}
				
					<li><a href="/admin">Admin</a></li>
					<form
						class="logout"
						action="/logout"
						method="POST"
						use:enhance
					>
					
					<li><button type="submit" >Log out</button></li>	
					</form>
				
			{/if}
		</ul>
	</nav>

	<main class="container">
		<slot />
	</main>
</div>
