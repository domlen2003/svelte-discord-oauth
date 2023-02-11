<script lang="ts">
    import type {DiscordUser} from "$lib/types/discord.ts";

    export let user: DiscordUser | null = null;
    export let title: string = "Page Title";

    function toggleUserMenu() {
        userMenu = !userMenu;
    }

    let userMenu = false;

</script>
<nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between content-center mx-auto">
        <div class="text-green-500">
            {title}
        </div>
        <div title="user" class="h-14 flex items-center">
            {#if !user}
                <a class="h-min w-max rounded-md bg-teal-800 p-2 text-white" href="/api/discord/login">Login with Discord</a>
            {:else}
                <button class="h-full" on:click={toggleUserMenu}>
                    <img src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.png"
                         alt={user.username}
                         class="h-full p-1 rounded-full bg-gray-600"/>
                </button>
            {/if}
        </div>
    </div>
    {#if userMenu}
        <div class="absolute right-0 w-min bg-gray-900 rounded-b-md p-2 mr-2 flex flex-col space-y-3">
            <div class="flex flex-row space-x-2">
                <h1 class="font-bold text-xl text-white">{user.username}</h1>
                <h2 class="text-lg text-gray-300">#{user.discriminator}</h2>
            </div>
            <a class="w-max px-3 py-1 rounded-full bg-gray-700 text-lg font-black text-white"
               href="/api/discord/logout">Logout</a>
        </div>
    {/if}
</nav>