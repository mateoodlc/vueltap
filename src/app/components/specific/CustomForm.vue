<style src="styles/components/Form.styl" lang="stylus" scoped></style>

<script>
    import MainButton from 'app/components/specific/MainButton.vue'
    
    export default {
        name: "CustomForm",
        data() {
            return {};
        },
        props: {
            placeholder: {
                type: String,
                required: true,
            },
            placeholder2: {
                type: String,
                required: false,
            },
            placeholder3: {
                type: String,
                required: false,
            },
            placeholder4: {
                type: String,
                required: false,
            },
            placeholder5: {
                type: String,
                required: false,
            },
            fieldsNumber: {
                type: Number,
                required: true,
                default: 1,
            },
            type: {
                type: String,
                required: true,
            },
            border: {
                type: Boolean,
                default: false,
            },
            inlineInput: {
                type: Boolean,
                default: false,
            }
        },
        components: {
            MainButton
        },
        methods: {},
        computed: {}
    };
</script>

<template>
    <div class="CustomForm" :class="{ with_border: this.border, inline_input: this.inlineInput }">
        <input :type="this.type" :placeholder="this.placeholder">
        <input v-if="this.fieldsNumber > 1" :type="this.type" :placeholder="this.placeholder2">
        <input v-if="this.fieldsNumber > 2" :type="this.type" :placeholder="this.placeholder3">
        <input v-if="this.fieldsNumber > 3" :type="this.type" :placeholder="this.placeholder4">
        <input v-if="this.fieldsNumber > 4" :type="this.type" :placeholder="this.placeholder5">
        <main-button buttonText="Registrarme"></main-button>
    </div>
</template>
