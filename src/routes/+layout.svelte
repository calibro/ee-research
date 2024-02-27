<script>
  import "virtual:uno.css"
	import "~/app.css"
  
	import { onMount } from "svelte"

  onMount(() => {
    console.log('app mounted: apply vh fix here')
  })
</script>

<slot />
