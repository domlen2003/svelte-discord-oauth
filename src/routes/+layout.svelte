<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/Navbar.svelte";
    import {navbarItems} from "$lib/data/routeNames";

    export let data;
</script>
<Navbar user="{data.user}" items="{navbarItems}"/>
<slot/>