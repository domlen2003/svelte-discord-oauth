<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/Navbar.svelte";

    const navbarItems: { title: string, href: string }[] = [
        {href: "/", title: "Home"},
        {href: "/dashboard", title: "Dashboard"}
    ]
    export let data;
</script>
<Navbar user="{data.user}" items="{navbarItems}"/>
<slot/>