<script lang="ts">
    import type { ActionData } from './$types'
    import { enhance } from '$app/forms'
    export let form: ActionData
  </script>
  
  <h1>Login</h1>
  <div class="form-box">
    <form action="?/login" method="POST" use:enhance>
      <div class="inputbox">
        <label for="username">Username</label>
        <input id="username" name="username" type="text" required />
      </div>
    
      <div class="inputbox">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>
    
      {#if form?.invalid}
        <p class="error">Username and password is required.</p>
      {/if}
    
      {#if form?.credentials}
        <p class="error">You have entered the wrong credentials.</p>
      {/if}
    
      <button type="submit">Log in</button>
    </form>
  </div>
 
  