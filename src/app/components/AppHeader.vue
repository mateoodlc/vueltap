<style src="styles/components/AppHeader.styl" lang="stylus" scoped></style>

<script>
    import {
        mapActions
    } from "vuex";
    import {
        LOADING
    } from "app/store/modules/loader";
    import MainButton from "app/components/specific/MainButton.vue"
    
    export default {
        name: "AppHeader",
        data() {
            return {};
        },
        props: {},
        components: {MainButton},
        methods: {
            ...mapActions({
                summonLoader: LOADING
            })
        },
        computed: {}
    };
</script>

<template>
    <div class="AppHeader">
        <div class="main-logo"></div>
        <!--<transition name="fade" mode="out-in">
            <span :key="$route.path">{{$route.path}}</span>
        </transition>
        -->
        <nav>
        </nav>
        <ul>
            <li>
                <router-link to="/test">Cotiza en línea</router-link>
            </li>
            <li>
                <router-link to="/test">¿Cómo funciona?</router-link>
            </li>
            <li>
                <router-link to="/test">Planes</router-link>
            </li>
            <li>
                <router-link to="/test">Contacto</router-link>
            </li>
        </ul>
        <main-button
            buttonText = "Reserva tu pedido"
            border
            small
        ></main-button>
        <main-button
            buttonText = "Ingresa"
            extraSmall
        ></main-button>
    </div>
    <!--<router-link to="/">{{$t("home.title")}}</router-link>
                <router-link to="/test">{{$t("test.title")}}</router-link>
                <router-link to="/404">404</router-link>-->
</template>
