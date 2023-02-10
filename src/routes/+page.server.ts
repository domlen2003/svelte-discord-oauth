import type {PageServerLoad} from "../../.svelte-kit/types/src/routes/$types";

export const load: PageServerLoad = async ({locals}) => {
    if (!locals.user) return {}
    return {
        user: locals.user
    }
}