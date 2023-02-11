<script>
    import Navbar from "$lib/Navbar.svelte";

    export let data;
</script>

<Navbar user="{data.user}" title="Dashboard"/>
<div class="w-screen h-screen flex flex-col justify-center items-center text-white">
    <p class="text-xl"> Dashboard (only visible whe logged in)</p>
    <a href="/" class="mt-16 font-bold text-2xl p-2 rounded-md bg-teal-800">Home</a>
</div>