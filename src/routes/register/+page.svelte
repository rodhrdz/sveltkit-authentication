<script lang="ts">
    import type { ActionData } from './$types'
    import { enhance } from '$app/forms'
    export let form: ActionData
  </script>
   
    <div class="grid">
      <article>
        <h2>Register</h2>
        <form action="?/register" method="POST" use:enhance>
          <div>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" required />
          </div>
          <div>
            <label for="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" required />
          </div>
        
          {#if form?.user}
            <p class="error">Username is taken.</p>
          {/if}
          <button type="submit">Register</button>
        </form>
      </article>
    </div>
  
  <style>
 
  </style>