<style src="styles/components/SponsorSlider.styl" lang="stylus" scoped></style>

<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="SponsorSlider">
        <swiper :options="swiperOption">
            <swiper-slide>
                <div class="sponsor-image"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="sponsor-image"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="sponsor-image"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="sponsor-image"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="sponsor-image"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="sponsor-image"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="sponsor-image"></div>
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
        name: 'SponsorSlider',
        data() {
            return {
                swiperOption: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        // when window width is <= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        }
                    }
                },
            }
        },
        components: {
            swiper,
            swiperSlide
        },
    }
</script>
