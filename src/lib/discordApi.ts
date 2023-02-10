import type {RequestEvent} from "@sveltejs/kit";

export const getOrRefreshToken = async (event: RequestEvent) => {
    const token = event.cookies?.get('discord_access_token');
    if (token) {
        return token;
    }

    // if only refresh token is found, then access token has expired. perform a refresh on it.
    const refreshToken = event.cookies?.get('discord_refresh_token');
    if (refreshToken) {
        const discord_request = await event.fetch(`api/discord/refresh?code=${refreshToken}`);
        const discord_response = await discord_request.json();
        return discord_response.token;
    }

    return null;
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