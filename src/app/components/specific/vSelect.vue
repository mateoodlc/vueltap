<style src="styles/components/VSelect.styl" lang="stylus" scoped></style>

<script>
    Vue.component("v-select", VueSelect.VueSelect);

new Vue({
  el: "#app",
  data: {
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
  }
});
</script>

<template>
    <div class="VSelect">
        <h1>Vue Select - Custom Labels</h1>
        <v-select label="countryName" :options="options"></v-select>
    </div>
</template>
