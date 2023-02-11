// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type {DiscordUser} from "./lib/server/discordApi";

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user: DiscordUser | null
        }

        // interface PageData {}
        // interface Platform {}
    }
}

export {};
