<script>
    import Navbar from "$lib/Navbar.svelte";

    export let data;
</script>

<Navbar user="{data.user}" title="Dashboard"/>
<div class="w-screen h-screen flex justify-center items-center text-white font-bold text-2xl">
    Dashboard (only visible whe logged in)
</div>