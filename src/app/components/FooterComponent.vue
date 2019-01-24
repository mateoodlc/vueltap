<style src="styles/components/FooterComponent.styl" lang="stylus" scoped></style>

<script>
    import CustomForm from "app/components/specific/CustomForm.vue"

    export default{
        name: "FooterComponent",
        data(){
            return {};
        },
        props: {},
        components: { CustomForm },
        methods: {},
        computed: {}
    };
</script>

<template>
    <div class="FooterComponent">
        <div class="Footer--container">
            <div class="Footer--row">
                <div class="Footer--logo" style="background-image: url('../../src/assets/img/logo.png')"></div>
            </div>
            <div class="Footer--row">
                <custom-form
                    fieldsNumber = 1
                    placeholder = "Suscríbete a nuestro newsletter"
                    type = "email"
                    buttonText = "Suscribirme"
                    inlineInput
                ></custom-form>
                <div class="Footer--social">
                    <div class="Footer--social--icon"></div>
                    <div class="Footer--social--icon"></div>
                    <div class="Footer--social--icon"></div>
                </div>
            </div>
            <div class="Footer--row">
                <div class="Footer--row--column">
                    <p class="Paragraph-red Font-bold">LEGAL</p>
                    <p class="Paragraph-small">Planes</p>
                    <p class="Paragraph-small">Políticas de envío</p>
                    <p class="Paragraph-small">Devoluciones</p>
                </div>
                <div class="Footer--row--column">
                    <p class="Paragraph-red Font-bold">AYUDA</p>
                    <p class="Paragraph-small">Atención al cliente</p>
                    <p class="Paragraph-small">Quejas y reclamos</p>
                    <p class="Paragraph-small">Términos y condiciones</p>
                </div>
                <div class="Footer--row--column">
                    <p class="Paragraph-red Font-bold">NOSOTROS</p>
                    <p class="Paragraph-small">Quiénes somos</p>
                    <p class="Paragraph-small">Partners</p>
                    <p class="Paragraph-small">Trabaja con nosotros</p>
                </div>
            </div>
            <div class="Separator-line"></div>
            <p class="Paragraph-small Center">2018 Vueltap. All rights reserved.</p>
        </div>
    </div>
</template>
