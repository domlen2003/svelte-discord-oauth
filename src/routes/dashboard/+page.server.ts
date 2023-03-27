import type {PageServerLoad} from "./$types";
import type {DiscordUser} from "../../lib/types/discord";

export const load: PageServerLoad = async ({locals}): Promise<{ user?: DiscordUser }> => {
    if (!locals.user) return {}
    return {
        user: locals.user
    }
}