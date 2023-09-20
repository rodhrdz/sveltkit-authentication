<script lang="ts">
    import type { ActionData } from './$types'
    import { enhance } from '$app/forms'
    export let form: ActionData
  </script>
  
  <h1>Register</h1>
  <div class="form-box">
    <form action="?/register" method="POST" use:enhance>
    
      <div class="inputbox">
        <label for="username">Username</label>
        <input id="username" name="username" type="text" required />
      </div>
    
      <div class="inputbox">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>
    
      {#if form?.user}
        <p class="error">Username is taken.</p>
      {/if}
    
      <button type="submit">Register</button>
    </form>
  </div>
  
  <style>
 
  </style>