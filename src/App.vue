<template>
    <div id="app">
        <div class="container">
            <h1>{{ msg }}</h1>
            <ul>
                <li>
                    <router-link :exact="true" to="/">Home</router-link>
                </li>
                <li>
                    <router-link :exact="true" to="/about">About</router-link>
                </li>
            </ul>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Some random PWA app'
            }
        }
    }
</script>

<style>
    body {
        background-color: #ebebeb;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .router-link-active {
        color: blue;
    }

    hr {
        margin: 10px 0;
        height: 1px;
        border: none;
        border-bottom: 1px solid #DDD;
    }

    .container {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        padding: 30px;
        background-color: #FFF;
    }
</style>
