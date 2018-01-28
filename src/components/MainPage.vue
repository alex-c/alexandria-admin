<template>
    <div id="main-page">
        <nav class="navbar shadowed" role="navigation" aria-label="main navigation" >
            <div class="container">
                <div class="navbar-brand">
                    <span href="/" class="navbar-item">
                        <img id ="logo" src="../assets/Alexandria-64.png" alt="Alexandria" /> Alexandria Administration
                    </span>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" target="_blank" href="https://github.com/alex-c/alexandria">
                            <b-icon icon="github-circle" type="is-dark" />
                        </a>
                        <div class="navbar-item">
                            <a class="button is-link" target="_blank">Documentation</a>
                        </div>
                        <div class="navbar-item">
                            <a class="button is-danger" target="_blank">
                                <span>Logout</span>
                                <b-icon icon="logout" size="is-small" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="hero is-link">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-9">
                            <p class="title">Welcome to the Alexandria!</p>
                            <p class="subtitle">Please log in to proceed.</p>
                        </div>
                        <div class="column">
                            <div class="tile box">
                                <section>
                                    <b-field label="Username">
                                        <b-input value="" maxlength="30" icon="account"></b-input>
                                    </b-field>

                                    <b-field label="Password">
                                        <b-input type="password" value="" icon="lock" password-reveal>
                                        </b-input>
                                    </b-field>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        Text here
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'mainpage',
    components: {},
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../assets/global-style.scss";

#logo {
    width: 32px;
    height: 32px;
    margin-right: 8px;
}
</style>
