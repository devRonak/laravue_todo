<template>
    <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><span>MENU</span></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link tag="a" to="/" class="nav-link" exact>Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/contact" class="nav-link">contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {

    }
</script>

