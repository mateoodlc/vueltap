<style src="styles/components/StepsSlider.styl" lang="stylus" scoped></style>

<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="StepsSlider">
        <swiper :options="swiperOption">
            <swiper-slide>
                <div class="sliding_steps-content">
                    <div class="sliding_steps-slides">
                        <div style="background-image: url('../../src/assets/img/mockup.png')" class="slide-image" />
                        <div class="slide-description">
                            <h3 class="Paragraph-red">4. Dashboard</h3>
                            <p class="Paragraph-small">Vueltap cuenta con un dashboard que te brinda de manera rápida y práctica la información más relevante sobre el estado de tus servicios, rastreo de envios, visualización de novedades, además de un completo historial de servicios</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="sliding_steps-content">
                    <div class="sliding_steps-slides">
                        <div style="background-image: url('../../src/assets/img/mockup.png')" class="slide-image" />
                        <div class="slide-description">
                            <h3 class="Paragraph-red">4. Dashboard</h3>
                            <p class="Paragraph-small">Vueltap cuenta con un dashboard que te brinda de manera rápida y práctica la información más relevante sobre el estado de tus servicios, rastreo de envios, visualización de novedades, además de un completo historial de servicios</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="sliding_steps-content">
                    <div class="sliding_steps-slides">
                        <div style="background-image: url('../../src/assets/img/mockup.png')" class="slide-image" />
                        <div class="slide-description">
                            <h3 class="Paragraph-red">4. Dashboard</h3>
                            <p class="Paragraph-small">Vueltap cuenta con un dashboard que te brinda de manera rápida y práctica la información más relevante sobre el estado de tus servicios, rastreo de envios, visualización de novedades, además de un completo historial de servicios</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="sliding_steps-content">
                    <div class="sliding_steps-slides">
                        <div style="background-image: url('../../src/assets/img/mockup.png')" class="slide-image" />
                        <div class="slide-description">
                            <h3 class="Paragraph-red">4. Dashboard</h3>
                            <p class="Paragraph-small">Vueltap cuenta con un dashboard que te brinda de manera rápida y práctica la información más relevante sobre el estado de tus servicios, rastreo de envios, visualización de novedades, además de un completo historial de servicios</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    // require styles
    import "../../../../node_modules/swiper/dist/css/swiper.css"
    
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    
    export default {
        name: 'StepsSlider',
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                },
            }
        },
        components: {
            swiper,
            swiperSlide
        },
    }
</script>
