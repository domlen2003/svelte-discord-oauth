import type {RequestHandler} from '@sveltejs/kit';
import {deleteCookies} from "../discordAuth";

export const GET: RequestHandler = async ({cookies}) => {
    deleteCookies(cookies)
    return new Response(null, {
        // @ts-ignore
        headers: {
            Location: "/"
        },
        status: 302
    })
}