<script>
  export let open = false;
  import { slide } from "svelte/transition";
  import { getProtocol } from "~/lib/metadata";
  import Text from "./text.svelte";

  export let topic;
  const protocol = getProtocol(topic);

  let el;

  const handleClick = () => {
    open = !open;
  };
</script>

<div class="accordion p-xs" bind:this={el}>
  <button class="header text-left" on:click={handleClick}>
    <div class="text">
      <Text content="Protocol" />
    </div>
    <Text content={open ? "–" : "+"} />
  </button>
  {#if open}
    <ol class="details" transition:slide>
      {#each protocol as item}
        <li>
          <Text content={item} />
        </li>
      {/each}
    </ol>
  {/if}
</div>

<style>
  .accordion {
    margin: 1rem 0;
    border: var(--border-default);
    border-radius: var(--border-radius);
  }

  ol {
    padding-inline-start: 1.5em;
  }
  li {
    margin-bottom: 0.5em;
  }

  .header {
    display: flex;
    width: 100%;
    .text {
      flex: 1;
    }
  }
</style>
