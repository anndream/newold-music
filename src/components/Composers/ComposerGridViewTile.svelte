<script lang="ts">
  import Product20 from "carbon-icons-svelte/lib/Product20";
  import { _ } from "svelte-i18n";
  import { GridViewTile, GridViewTileDetail } from "../GridView";

  export let id: number;
  export let composer: string = undefined;
  export let role: string = undefined;
  export let worksCount: number = undefined;
</script>

<GridViewTile href="composers/{id}" meta={role} title={composer}>
  <div slot="details">
    {#if worksCount !== undefined}
      <GridViewTileDetail
        icon={Product20}
        label={$_('numerable.works', { values: { n: worksCount } })}
      />
    {/if}
  </div>
</GridViewTile>
