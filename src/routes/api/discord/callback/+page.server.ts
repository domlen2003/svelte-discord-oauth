import {error} from "@sveltejs/kit";
import {buildSearchParams, requestDiscordToken, setCookies} from "../discordAuth";
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = async ({url, cookies}) => {
    // fetch returnCode set in the URL parameters.
    const returnCode = url.searchParams.get('code');
    if (!returnCode) {
        throw error(400, JSON.stringify({error: 'No code provided.'}))
    }
    const tokens = await requestDiscordToken(buildSearchParams("identify email guilds", "callback", returnCode));
    setCookies(tokens, cookies)
    return {
        token: tokens.access_token,
        timeout: tokens.access_valid_until
    }
}