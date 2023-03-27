import {buildSearchParams, requestDiscordToken, setCookies} from "../discordAuth";
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = async ({url, cookies, locals}): Promise<{ loggedIn: boolean, error?:string }> => {
    if (locals.user) return {loggedIn: true}
    // fetch returnCode set in the URL parameters.
    const returnCode = url.searchParams.get('code');
    if (!returnCode) {
        return {loggedIn: false, error: 'No code provided.'}
    }
    try {
        const tokens = await requestDiscordToken(buildSearchParams("identify email", "callback", returnCode));
        setCookies(tokens, cookies)
        return {loggedIn: true}
    } catch (e) {
        console.error(e)
        return {loggedIn: false, error: "Failed to authenticate with Discord."}
    }
}