<style src="styles/components/IconComponent.styl" lang="stylus" scoped></style>

<script>
    export default{
        name: "IconComponent",
        data(){
            return {};
        },
        props: {
            iconSrc: {
                type: String,
                required: true,
            },
            small: {
                type: Boolean,
                default: false,
            },
            extraSmall: {
                type: Boolean,
                default: false,
            },
        },
        components: {},
        methods: {},
        computed: {}
    };
</script>

<template>
    <div class="IconComponent" 
        :style="{backgroundImage: 'url(' + this.iconSrc + ')', 
        width: this.small ? '27px': '55px',
        height: this.small ? '27px': '55px',}">
    </div>
</template>
