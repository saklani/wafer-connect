<script>
  import CustomThemes from "./CustomThemes.svelte"
</script>

<div class="column">
  <h1>Themes</h1>
  <CustomThemes/>
  <zero-md src="/documentation/02-themes.md" />
</div>

<style>
  .column {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
</style>
