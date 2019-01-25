<script>
    import MainTransition from "app/transitions/GSAP";
    import IconComponent from "app/components/specific/IconComponent.vue"
    import MainButton from "app/components/specific/MainButton.vue"
    import ClientsSlider from "app/components/specific/ClientsSlider.vue"
    import StepsSlider from "app/components/specific/StepsSlider.vue"
    import SponsorSlider from "app/components/specific/SponsorSlider.vue"
    import CustomForm from "app/components/specific/CustomForm.vue"
    import FooterComponent from "app/components/FooterComponent.vue"
    import vSelect from '../../../node_modules/vue-select/src/components/Select.vue'

    
    export default {
        name: "Home",
        data() {
            return {
                users: [],
                filter: "",
                loading: true,
                error: false,
            };
            options: [
                { countryCode: "AU", countryName: "Australia" },
                { countryCode: "CA", countryName: "Canada" },
                { countryCode: "CN", countryName: "China" },
                { countryCode: "DE", countryName: "Germany" },
                { countryCode: "JP", countryName: "Japan" },
                { countryCode: "MX", countryName: "Mexico" },
                { countryCode: "CH", countryName: "Switzerland" },
                { countryCode: "US", countryName: "United States" }
            ]
        },
        created() {
            this.fetchData();
        },
        props: {},
        components: {
            MainTransition,
            IconComponent,
            MainButton,
            ClientsSlider,
            StepsSlider,
            CustomForm,
            SponsorSlider,
            FooterComponent,
            vSelect,
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
            <section class="Home-banner_container">
                <div class="Home-banner_content">
                    <div class="Home-banner_content_description">
                        <h1>Envíos, Logística y Mensajería express en Bogotá</h1>
                        <p class="Center">Vueltap te ofrece mensajeros disponibles por toda la ciudad para que hagan tus entregas de manera rápida y segura.</p>
                    </div>
                    <div class="Home-banner_content_delivery-card">
                        <h3 class="Light-text delivery-card_title" style="text-align: center;">Solicita tu envío ahora</h3>
                        <div class="delivery-card_second_row">
                            <div class="delivery-card_second_row-column">
                                <div class="Inline-content">
                                    <icon-component iconSrc='../../src/assets/img/icons/pin.png' small></icon-component>
                                    <p class="Inline-text Light-text Paragraph-small">Ingresa dirección de entrega</p>
                                </div>
                                <input type="text" placeholder="Ej: Calle 100 # 10 - 60">
                            </div>
                            <div class="delivery-card_second_row-column">
                                <div class="Inline-content">
                                    <icon-component iconSrc='../../src/assets/img/icons/pin.png' small></icon-component>
                                    <p class="Inline-text Light-text Paragraph-small">Ingresa dirección de entrega</p>
                                </div>
                                <input type="text" placeholder="Ej: Calle 100 # 10 - 60">
                            </div>
                            <p class="Paragraph-red Paragraph-small delivery-card_note" style="width: 100%;">Si necesitas incluir más puntos de entrega, haz <strong> click aquí</strong></p>
                        </div>
                        <div class="Separator-line"></div>
                        <div class="delivery-card_summary">
                            <div class="delivery-card_summary-total">
                                <p class="Light-text">Valor de tu envío</p>
                                <h3 class="Light-text">$50.400 COP</h3>
                            </div>
                            <main-button buttonText="Solicitar" red>
                            </main-button>
                        </div>
                    </div>
                </div>
                <div class="Home-banner_rotated"></div>
                <div class="Home-banner_steps">
                    <div class="delivery-person_image" style="background-image: url('../../src/assets/img/delivery_man.png')"></div>
                    <div class="delivery-steps">
                        <h2 class="Title Light-text">Tus envíos en tiempo record</h2>
                        <div class="delivery-steps_row">
                            <icon-component iconSrc="../../src/assets/img/icons/box.png"></icon-component>
                            <div class="delivery-steps_row-description">
                                <p class="Paragraph-red">1. Solicita un envío</p>
                                <p class="Light-text Paragraph-small">Ingresa la dirección de recogida, la de entrega y las instrucciones para el mensajero</p>
                            </div>
                        </div>
                        <div class="delivery-steps_row">
                            <icon-component iconSrc="../../src/assets/img/icons/money_ticket.png"></icon-component>
                            <div class="delivery-steps_row-description">
                                <p class="Paragraph-red">2. Pago fácil</p>
                                <p class="Light-text Paragraph-small">Selecciona el medio de pago que mejor se ajuste a tus necesidades.</p>
                            </div>
                        </div>
                        <div class="delivery-steps_row">
                            <icon-component iconSrc="../../src/assets/img/icons/car.png"></icon-component>
                            <div class="delivery-steps_row-description">
                                <p class="Paragraph-red">3. Entrega</p>
                                <p class="Light-text Paragraph-small">Uno de nuestros mensajeros recogerá tu pedido y lo llevará a su destino en el menor tiempo posible</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="Home-plans_services">
                <div class="Home-plans_services-container">
                    <div class="plans_services-description">
                        <h2 class="Title">Planes y precios</h2>
                        <p class="Center">En vueltap nos gusta hacer felices a nuestros clientes, por esa razón hemos querido ofrecer una serie de paquetes especiales con los que podrás beneficiarte y ahorrar dinero al momento de solicitar tu servicio</p>
                    </div>
                    <div class="plan-card_container">
                        <div class="plan-card">
                            <h3 class="Title">Básico</h3>
                            <div class="plan-card_details">
                                <h2 class="Paragraph-yellow">100 Km</h2>
                                <p class="Center">COP $300.000</p>
                            </div>
                            <p class="Paragraph-small Center" style="margin: 10px 0">No incluye descuento de obsequio</p>
                            <main-button buttonText="Comprar" border noIcon></main-button>
                        </div>
                        <div class="plan-card">
                            <h3 class="Title">Básico</h3>
                            <div class="plan-card_details">
                                <h2 class="Paragraph-yellow">100 Km</h2>
                                <p class="Center">COP $300.000</p>
                            </div>
                            <p class="Paragraph-small Center" style="margin: 10px 0">No incluye descuento de obsequio</p>
                            <main-button buttonText="Comprar" border noIcon></main-button>
                        </div>
                        <div class="plan-card">
                            <h3 class="Title">Básico</h3>
                            <div class="plan-card_details">
                                <h2 class="Paragraph-yellow">100 Km</h2>
                                <p class="Center">COP $300.000</p>
                            </div>
                            <p class="Paragraph-small Center" style="margin: 10px 0">No incluye descuento de obsequio</p>
                            <main-button buttonText="Comprar" border noIcon></main-button>
                        </div>
                        <div class="plan-card">
                            <h3 class="Title">Básico</h3>
                            <div class="plan-card_details">
                                <h2 class="Paragraph-yellow">100 Km</h2>
                                <p class="Center">COP $300.000</p>
                            </div>
                            <p class="Paragraph-small Center" style="margin: 10px 0">No incluye descuento de obsequio</p>
                            <main-button buttonText="Comprar" border noIcon></main-button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="Home-sliding_steps">
                <div class="Home-sliding_steps--container">
                    <h2>Vueltap, la solución que te ofrece todo lo que necesitas</h2>
                    <steps-slider></steps-slider>
                </div>
            </section>
            <section class="Home-clients">
                <div class="Home-clients--container">
                    <clients-slider></clients-slider>
                </div>
            </section>
            <section class="Home-form">
                <div class="Home-form--container">
                    <h2>¿Listo para empezar a utilizar Vueltap?</h2>
                    <div class="Home-form--content">
                        <div class="box-image"></div>
                        <custom-form
                            placeholder = "Tu nombre"
                            placeholder2 = "Tu correo electrónico"
                            placeholder3 = "Crea una contraseña"
                            type = "text"
                            buttonText = "Registrarme"
                            border
                            fieldsNumber = 3
                            select
                        ></custom-form>
                    </div>
                </div>
            </section>
            <section class="Home-sponsors">
                <div class="Home-sponsors--container">
                    <sponsor-slider></sponsor-slider>
                </div>
            </section>
            <footer-component></footer-component>
            </div>
    </main-transition>
</template>

<style src="styles/views/Home.styl" lang="stylus"></style>
