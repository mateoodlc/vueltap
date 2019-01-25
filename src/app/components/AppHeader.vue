<style src="styles/components/AppHeader.styl" lang="stylus" scoped></style>

<script>
    import CustomMenu from 'app/components/specific/CustomMenu.vue'
    
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
            return {
                burgerMenu: true,
                message: "hello",
                addClass: false
            };
        },
        props: {},
        components: {
            MainButton,
            CustomMenu
        },
        methods: {
            ...mapActions({
                summonLoader: LOADING
            }),
            menuOpen: function() {
                this.$store.commit("MENU_OPEN");
            }
        },
        computed: {
            menuOpened() {
                return this.$store.getters.menuOpened;
            }
        },
        mounted() {
        },
        watch: {
            menuOpened() {
                this.addClass = !this.addClass;
            }
        }
    };
</script>

<template>
    <div class="AppHeader">
        <div class="menu-button" v-on:click="menuOpen()">
            <span class="burger-line" :class="{rotatePos: this.menuOpened}"></span>
            <span class="burger-line" :class="{removeMiddle: this.menuOpened}"></span>
            <span class="burger-line" :class="{rotateNeg: this.menuOpened}"></span>
        </div>
        <custom-menu></custom-menu>
        <div class="main-logo"></div>
        <!--<transition name="fade" mode="out-in">
                    <span :key="$route.path">{{$route.path}}</span>
                </transition>
                -->
        <nav>
        </nav>
        <ul>
            <li>
                <router-link to="/home">Cotiza en línea</router-link>
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
        <main-button buttonText="Reserva tu pedido" border small noIcon style="margin-right: 10px;"></main-button>
        <main-button buttonText="Ingresa" extraSmall noIcon></main-button>
    </div>
    <!--<router-link to="/">{{$t("home.title")}}</router-link>
                        <router-link to="/test">{{$t("test.title")}}</router-link>
                        <router-link to="/404">404</router-link>-->
</template>
