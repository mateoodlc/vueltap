<style src="styles/components/MainButton.styl" lang="stylus" scoped></style>

<script>
    export default {
        name: "MainButton",
        data(){
            return {
                yellowSrc: "../../src/assets/img/arrows/arrow_yellow.png",
                blackSrc: "../../src/assets/img/arrows/arrow_black.png",
            };
        },
        props: {
            buttonText: {
                type: String,
                required: true,
            },
            backgroundColor: {
                type: String,
                default: "#F8E71C",
            },
            fontColor: {
                type: String,
                default: "#fff",
            },
            large: {
                type: Boolean,
                default: false,
            },
            small: {
                type: Boolean,
                default: false,
            },
            extraSmall: {
                type: Boolean,
                default: false,
            },
            border: {
                type: Boolean,
                default: false,
            },
            red: {
                type: Boolean,
                default: false,
            },
            iconSrc: {
                type: String,
            },
            noIcon: {
                type: Boolean,
                default: false,
            },
            route: {
                type: Function,
            }
        },
        components: {},
        methods: {},
        computed: {}
    };
</script>

<template>
    <button class="MainButton" @click="this.route" :style="{width: this.small ? '160px' : this.large ? '330px' : this.extraSmall ? '113px' : '225px', 
    backgroundColor: 
    border ? 'transparent' : red ? '#FF3D3D' : this.backgroundColor, 
    color: red ? '#fff' : this.border ? '#fff' : '#000', 
    border: this.border ? '2px solid white' : none,
    }">
        <p>{{this.buttonText}}</p>
        <img v-if="!this.noIcon" v-show="!this.extraSmall || !this.noIcon" :src="red ? yellowSrc : blackSrc" width=19/>
    </button>
</template>
