<template>
    <nav>
    <ul class="NavLink">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/characters/DuncanSmokey">Duncan Smokey</NuxtLink></li>
        <li><NuxtLink to="/characters/DanteWhite">Dante White</NuxtLink></li>
        <li><NuxtLink to="/characters/Arthur">Arthur Carbun</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
</template>

<style lang="css">
    nav {
        background-color: #333;
        padding: 1rem;
    }
    .NavLink {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
    }
    li a {
        color: white;
        text-decoration: none;
    }
    li a:hover {
        text-decoration: underline;
    }
</style>