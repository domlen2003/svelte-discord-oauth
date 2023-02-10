<script lang="ts">
    import type {DiscordUser} from "$lib/discordApi";
    export let data: { user: DiscordUser | null }
</script>

<div class="flex flex-col justify-center place-items-center h-screen w-screen space-y-4">
    {#if !data.user}
        <a class="w-max" href="/api/discord/auth">Login with Discord</a>
    {:else}
        <p class="w-3/4">{JSON.stringify(data.user, null, 2)}</p>
        <div class="flex flex-row place-items-center border-2 rounded-xl p-4 space-x-4 bg-gray-800">
            <img src="https://cdn.discordapp.com/avatars/{data.user.id}/{data.user.avatar}.png" alt={data.user.username}
                 class="w-20 h-20 p-1 rounded-full bg-gray-600"/>
            <h1 class="font-bold text-xl text-white">{data.user.username}</h1>
            <h2 class="text-lg text-gray-300">#{data.user.discriminator}</h2>
        </div>
        <a class="w-max px-4 py-2 rounded-full bg-gray-700 text-lg font-black text-white"
           href="/api/discord/signout">Logout</a>
    {/if}
    <!--p class="w-max">{data.user.username}</p-->
    <!--div class="w-[90vw] h-[90vh]">
        <BlocklyComponent on:codeChanged={(event)=> code=event.detail.code}>
            <block type="controls_ifelse"/>
            <block type="logic_compare"/>
            <block type="logic_operation"/>
            <block type="controls_repeat_ext"/>
            <block type="logic_operation"/>
            <block type="logic_negate"/>
            <block type="logic_boolean"/>
            <block type="logic_null" disabled="true"/>
            <block type="logic_ternary"/>
            <block type="math_number"/>
            <block type="math_arithmetic"/>
            <block type="math_single"/>
            <block type="math_constant"/>
            <block type="math_number_property"/>
            <block type="variables_get"/>
            <block type="variables_set"/>
            <block type="procedures_callreturn"/>
            <block type="procedures_callnoreturn"/>
            <block type="procedures_defreturn"/>
            <block type="procedures_defnoreturn"/>
            <block type="text_charAt"/>
        </BlocklyComponent>
        {code}
    </div-->
</div>
