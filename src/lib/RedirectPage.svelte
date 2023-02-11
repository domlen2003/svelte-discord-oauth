<script lang="ts">
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    onMount(async () => {
        await goto(to)
    })
    export let to: string;
</script>
<div class="flex flex-col justify-center place-items-center space-y-4 h-screen w-screen">
    <p class="text-center font-bold text-2xl">You should be automatically redirected to {to} a few seconds.</p>
    <p class="pt-4 text-center text-lg">
        Click
        <a class="font-bold text-xl" href="{to}">here</a>
        to go there manually.
    </p>

</div>