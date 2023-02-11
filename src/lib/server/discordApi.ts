import type {RequestEvent} from "@sveltejs/kit";
import {DISCORD_API_URL} from "$env/static/private";

export async function authenticateUser(event: RequestEvent): Promise<DiscordUser | null> {
    const token = await getOrRefreshToken(event);
    if (!token) {
        return null
    }

    return await fetch(`${DISCORD_API_URL}/users/@me`, {
        headers: {'Authorization': `Bearer ${token}`}
    }).then(request => request.json())
}

async function getOrRefreshToken(event: RequestEvent): Promise<string | null> {
    const token = event.cookies?.get('discord_access_token')
    if (token) {
        return token
    }

    // if only refresh token is found, access token has expired
    // fetch refresh only if not already on refresh route (otherwise recursion go brrr)
    const refreshToken = event.cookies?.get('discord_refresh_token')
    if (refreshToken && !event.url.pathname.startsWith('/api/discord/refresh')) {
        const discord_request = await event.fetch(`api/discord/refresh?code=${refreshToken}`)
        const discord_response = await discord_request.json()
        return discord_response.token
    }

    return null
}

export type DiscordUser = {
    id: string,
    username: string,
    discriminator: string,
    avatar: string,
    email: string,
    verified: boolean,
    flags: number,
    premium_type: number,
    public_flags: number,
    mfa_enabled: boolean,
    locale: string,
    accent_color: string,
    banner_color: string,
    banner: string,
    avatar_decoration: string,
    display_name: string
}