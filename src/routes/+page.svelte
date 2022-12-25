<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData

	const servers = data.servers

	const serverlist: any[] = []

	servers.forEach((e: any[]) => {
		serverlist.push({status: e[8], world: e[4], worldset: e[5], region: e[6], currentonline: e[1], maxonline: e[0], queue: e[2]})
	})
</script>

<div class="servermenu">
	<div>
		<p>Status</p>
		<p>World</p>
		<p>World Set</p>
		<p>Region</p>
		<p>Online</p>
		<p>Queue</p>
	</div>
	{#each serverlist as server}
		<div>
			<p>{server.status}</p>
			<p>{server.world}</p>
			<p>{server.worldset}</p>
			<p>{server.region}</p>
			<p>{server.currentonline}/{server.maxonline}</p>
			<p>{server.queue}</p>
		</div>
	{/each}
</div>