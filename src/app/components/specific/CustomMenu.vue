<style src="styles/components/CustomMenu.styl" lang="stylus" scoped></style>

<script>
    import MainButton from "app/components/specific/MainButton.vue"
    export default{
        name: "CustomMenu",
        data() {
            return {
                burgerMenu: false,
                menuHover: undefined,
            };
        },
        props: {},
        components: {
            MainButton,
        },
        methods: {
            animate: function() {
                if(this.$store.getters.menuOpened) {
                    this.menuHover.play();
                } else {
                    this.menuHover.reverse(0.5);
                }
            }
        },
        computed: {
            menuOpened() {
                return this.$store.getters.menuOpened
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.menuHover = new TimelineMax({delay: 0, paused: true});
                this.menuHover.fromTo(this.$refs.menuCurtain, 0.6, {scaleX: 0}, {scaleX: 1, ease: Power3.ease})
                this.menuHover.fromTo(this.$refs.menuContent, 0.3, {opacity: 0, marginTop: "300px"}, {opacity: 1, marginTop: "0", ease: Power1.easeIn})
                /*this.menuHover.fromTo(this.$refs.item1, 0.3, {opacity: 0}, {opacity: 1, ease: Power1.ease});
                this.menuHover.fromTo(this.$refs.item2, 0.3, {opacity: 0}, {opacity: 1, ease: Power1.ease});
                this.menuHover.fromTo(this.$refs.item3, 0.3, {opacity: 0}, {opacity: 1, ease: Power1.ease});
                this.menuHover.fromTo(this.$refs.item4, 0.3, {opacity: 0}, {opacity: 1, ease: Power1.ease});
                */
                
            });
        },
        watch: {
            menuOpened() {
                console.log("holi");
                this.animate();
            }
        }
    };
</script>

<template>
    <div class="Menu">
        <div class="Menu--curtain" ref="menuCurtain"></div>
        <div class="Menu--container">
            <div class="Menu--content" ref="menuContent">
                <div ref="item1">
                    <router-link to="/home"><h3>Cotiza en línea</h3></router-link>
                </div>
                <div ref="item2">
                    <router-link to="/test"><h3>¿Cómo funciona?</h3></router-link>
                </div>
                <div ref="item3">
                    <router-link to="/test"><h3>Planes</h3></router-link>
                </div>
                <div ref="item4">
                    <router-link to="/test"><h3>Contacto</h3></router-link>
                </div>
                <div ref="item5">
                    <main-button buttonText="Reserva tu pedido" border small noIcon style="margin-right: 10px;"></main-button>
                    <main-button buttonText="Ingresa" extraSmall noIcon></main-button>
                </div>
            </div>
        </div>
    </div>
</template>
