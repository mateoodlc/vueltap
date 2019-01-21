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
            small: {
                type: Boolean,
                default: false,
            },
            small: {
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
        },
        components: {},
        methods: {},
        computed: {}
    };
</script>

<template>
    <div class="MainButton" :style="{width: this.small ? '160px' : '225px', 
    backgroundColor: 
    border ? 'transparent' : red ? '#FF3D3D' : this.backgroundColor, 
    color: red ? '#fff' : this.border ? '#fff' : '#000', 
    border: this.border ? '1px solid white' : none,
    }">
        <p>{{this.buttonText}}</p>
        <img v-if="!this.small" :src="red ? yellowSrc : blackSrc" width=19/>
    </div>
</template>
