<script lang="ts">
    import { page } from '$app/stores'
  </script>
   {#if $page.data.user.role === 'ADMIN'}
   <form action="/logout" method="POST">
     <button type="submit">Log out</button>
   </form>
 {/if}
  <h1>Module Admin</h1>
  
  {#if $page.data.user}
    <span>Welcome {$page.data.user.name}!</span>
  {/if}
  
 
  <style>
    span{
      font-size: 30px;
      text-align: center;
    }
  </style>