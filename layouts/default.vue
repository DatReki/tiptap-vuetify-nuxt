<template>
<div class="body-main">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                <span uk-icon="icon: menu; ratio: 2"></span>
            </button>
            <div id="navbar-content" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="content-body container">
        <Nuxt />
    </div>
    <footer>
    </footer>
</div>
</template>

<script>
export default {
    name: 'LayoutDefault',
    methods: {
    }
}
</script>
