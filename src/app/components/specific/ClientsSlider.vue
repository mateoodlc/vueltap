<style src="styles/components/ClientsSlider.styl" lang="stylus" scoped></style>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default{
        name: "ClientsSlider",
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 600,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        // when window width is <= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                            centeredSlides: true,
                        }
                    }
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                }
            }
        },
        props: {},
        components: { swiper, swiperSlide },
        methods: {},
    };
</script>

<template>
    <div class="Slider">
        <swiper :options="swiperOption" ref="mySwiper2" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide>
                <div class="client_card">
                    <div class="client_card--image" style="background-image: url('../../src/assets/img/client.jpeg')"></div>
                    <div class="client_card--content">
                        <p class="Paragraph-red">Vueltap facilitó mi trabajo</p>
                        <p class="Light-text Paragraph-small Font-light">"Encantada con la eficiencia y rapidez con la que entregan nuestros pedidos."</p>
                        <p class="Light-text Paragraph-small">Carolina Estupiñán</p>
                        <p class="Light-text Paragraph-small">Gerente de Ventas en Falabella</p>
                        <div class="client_card--content--logo" style="background-image: url('../../src/assets/img/falabella.png')"></div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="client_card">
                    <div class="client_card--image" style="background-image: url('../../src/assets/img/client.jpeg')"></div>
                    <div class="client_card--content">
                        <p class="Paragraph-red">Vueltap facilitó mi trabajo</p>
                        <p class="Light-text Paragraph-small Font-light">"Encantada con la eficiencia y rapidez con la que entregan nuestros pedidos."</p>
                        <p class="Light-text Paragraph-small">Carolina Estupiñán</p>
                        <p class="Light-text Paragraph-small">Gerente de Ventas en Falabella</p>
                        <div class="client_card--content--logo" style="background-image: url('../../src/assets/img/falabella.png')"></div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="client_card">
                    <div class="client_card--image" style="background-image: url('../../src/assets/img/client.jpeg')"></div>
                    <div class="client_card--content">
                        <p class="Paragraph-red">Vueltap facilitó mi trabajo</p>
                        <p class="Light-text Paragraph-small Font-light">"Encantada con la eficiencia y rapidez con la que entregan nuestros pedidos."</p>
                        <p class="Light-text Paragraph-small">Carolina Estupiñán</p>
                        <p class="Light-text Paragraph-small">Gerente de Ventas en Falabella</p>
                        <div class="client_card--content--logo" style="background-image: url('../../src/assets/img/falabella.png')"></div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="client_card">
                    <div class="client_card--image" style="background-image: url('../../src/assets/img/client.jpeg')"></div>
                    <div class="client_card--content">
                        <p class="Paragraph-red">Vueltap facilitó mi trabajo</p>
                        <p class="Light-text Paragraph-small Font-light">"Encantada con la eficiencia y rapidez con la que entregan nuestros pedidos."</p>
                        <p class="Light-text Paragraph-small">Carolina Estupiñán</p>
                        <p class="Light-text Paragraph-small">Gerente de Ventas en Falabella</p>
                        <div class="client_card--content--logo" style="background-image: url('../../src/assets/img/falabella.png')"></div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="client_card">
                    <div class="client_card--image" style="background-image: url('../../src/assets/img/client.jpeg')"></div>
                    <div class="client_card--content">
                        <p class="Paragraph-red">Vueltap facilitó mi trabajo</p>
                        <p class="Light-text Paragraph-small Font-light">"Encantada con la eficiencia y rapidez con la que entregan nuestros pedidos."</p>
                        <p class="Light-text Paragraph-small">Carolina Estupiñán</p>
                        <p class="Light-text Paragraph-small">Gerente de Ventas en Falabella</p>
                        <div class="client_card--content--logo" style="background-image: url('../../src/assets/img/falabella.png')"></div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="client_card">
                    <div class="client_card--image" style="background-image: url('../../src/assets/img/client.jpeg')"></div>
                    <div class="client_card--content">
                        <p class="Paragraph-red">Vueltap facilitó mi trabajo</p>
                        <p class="Light-text Paragraph-small Font-light">"Encantada con la eficiencia y rapidez con la que entregan nuestros pedidos."</p>
                        <p class="Light-text Paragraph-small">Carolina Estupiñán</p>
                        <p class="Light-text Paragraph-small">Gerente de Ventas en Falabella</p>
                        <div class="client_card--content--logo" style="background-image: url('../../src/assets/img/falabella.png')"></div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>