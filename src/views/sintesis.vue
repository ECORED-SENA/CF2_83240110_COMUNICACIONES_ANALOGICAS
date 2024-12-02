<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama que describe los sistemas de comunicaciones analógicas. El sistema se compone de una fuente que convierte la señal eléctrica a analógica, seguida de un canal que atenúa la señal y puede introducir distorsión, ruido e interferencia, y finalmente un destinatario que recibe y demodula la señal mediante un transductor y receptor. A la derecha, se representan amplificadores de radiofrecuencia con características como sensibilidad, selectividad y amplificación, así como moduladores que alteran parámetros como frecuencia, fase y amplitud. También se presentan los modos de transmisión que pueden ser simplex, half duplex y full duplex.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
