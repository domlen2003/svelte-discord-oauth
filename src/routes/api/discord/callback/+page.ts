import {onMount} from "svelte";
import {goto} from "$app/navigation";
import type {PageLoad} from "./$types";

/*
*   Callback needs to be handled this way -> setting the cookies on the serverside only gets applied on the next page load.
*    If the pageload happens to be a page relying on the cookies they won't be set for that request.
*   -> show a temporary redirect page (loading cookies into client and then redirect to the front page.
*  */
export const load: PageLoad = async () => {
    onMount(async () => {
        await goto("/")
    })
    return {}
}