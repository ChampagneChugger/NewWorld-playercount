import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
    const url = "https://nwdb.info/server-status/servers_24h.json"
    const response = await fetch(url)

    const {data} = await response.json()

    return {
        servers: data.servers
    }
}