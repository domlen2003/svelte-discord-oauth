import type {Handle} from "@sveltejs/kit";
import {getOrRefreshToken} from "./lib/discordApi";
import {DISCORD_API_URL} from "$env/static/private";

export const handle: Handle = async ({event, resolve}) => {
    if (event.url.pathname.startsWith('/api')) {
        return resolve(event);
    }

    const token = await getOrRefreshToken(event);
    if (!token) {
        return resolve(event);
    }

    event.locals.user = await fetch(`${DISCORD_API_URL}/users/@me`, {
        headers: {'Authorization': `Bearer ${token}`}
    }).then(request => request.json());

    return resolve(event);
}