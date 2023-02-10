import type {PageServerLoad} from "../../.svelte-kit/types/src/routes/$types";
import {getOrRefreshToken} from "../lib/discordApi";
import {DISCORD_API_URL} from "$env/static/private";

export const load: PageServerLoad = async (event) => {
    const token = await getOrRefreshToken(event);
    if (!token) {
        return {}
    }
    const request = await fetch(`${DISCORD_API_URL}/users/@me`, {
        headers: {'Authorization': `Bearer ${token}`}
    });
    const response = await request.json();
    return {
        user: {...response}
    }
}