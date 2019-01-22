<script>
    import MainTransition from "app/transitions/GSAP";
    import VideoPlayer from "foo/components/VideoPlayer.vue";
    import IconComponent from "app/components/specific/IconComponent.vue"
    import MainButton from "app/components/specific/MainButton.vue"
    
    export default {
        name: "Home",
        data() {
            return {
                users: [],
                filter: "",
                loading: true,
                error: false,
            };
        },
        created() {
            this.fetchData();
        },
        props: {},
        components: {
            MainTransition,
            IconComponent,
            MainButton
        },
        mounted() {},
        methods: {
            fetchData() {
                this.$get("https://jsonplaceholder.typicode.com/users")
                    .then(response => {
                        this.loading = false;
                        this.users = response.body;
                    })
                    .then(undefined, error => {
                        this.loading = false;
                        this.error = true;
                        console.error(error);
                    });
            },
            beforeEnter(el) {
                TweenMax.set(el, {
                    alpha: 0,
                    height: 0
                });
            },
            enter(el, done) {
                let delay = el.dataset.index * 0.015;
                TweenMax.to(el, 0.65, {
                    alpha: 1,
                    height: 24,
                    delay: delay,
                    ease: Power4.easeOut,
                    onComplete: done,
                });
            },
            leave(el, done) {
                let delay = el.dataset.index * 0.015;
                TweenMax.to(el, 0.65, {
                    alpha: 0,
                    height: 0,
                    ease: Power4.easeOut,
                    delay: delay,
                    onComplete: done,
                });
            },
        },
        computed: {
            filteredUsers() {
                return this.users.filter(item => {
                    return (
                        item.name
                        .toLowerCase()
                        .indexOf(this.filter.toLowerCase()) !== -1
                    );
                });
            },
        },
    };
</script>

<template>
    <main-transition>
        <div class="Home">
            <div class="Home-banner_container">
                <div class="Home-banner_content">
                    <div class="Home-banner_content_description">
                        <h1>Envíos, Logística y Mensajería express en Bogotá</h1>
                        <p class="Center">Vueltap te ofrece mensajeros disponibles por toda la ciudad para que hagan tus entregas de manera rápida y segura.</p>
                    </div>
                    <div class="Home-banner_content_delivery-card">
                        <h3 class="Light-text">Solicita tu envío ahora</h3>
                        <div class="delivery-card_second_row">
                            <div class="delivery-card_second_row-column">
                                <div class="Inline-content">
                                    <icon-component iconSrc='../../src/assets/img/icons/pin.png' small></icon-component>
                                    <p class="Inline-text Light-text">Ingresa dirección de recogida</p>
                                </div>
                                <input type="text" placeholder="Ej: Calle 100 # 10 - 60">
                            </div>
                            <div class="delivery-card_second_row-column">
                                <div class="Inline-content">
                                    <icon-component iconSrc='../../src/assets/img/icons/pin.png' small></icon-component>
                                    <p class="Inline-text Light-text">Ingresa dirección de recogida</p>
                                </div>
                                <input type="text" placeholder="Ej: Calle 100 # 10 - 60">
                            </div>
                        </div>
                        <div class="Separator-line"></div>
                        <div class="delivery-card_summary">
                            <div class="delivery-card_summary-total">
                                <p class="Light-text">Valor de tu envío</p>
                                <h3 class="Light-text">$50.400 COP</h3>
                            </div>
                            <main-button buttonText="Solicitar" red></main-button>
                        </div>
                    </div>
                </div>
                <div class="Home-banner_rotated"></div>
            </div>
        </div>
    </main-transition>
</template>

<style src="styles/views/Home.styl" lang="stylus"></style>
