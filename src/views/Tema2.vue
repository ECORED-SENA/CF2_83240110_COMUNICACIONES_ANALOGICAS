<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Amplificadores de radiofrecuencia
    .row.bg-c9
      .col-12
        .px-5
          .row.align-items-center.mb-3(data-aos="fade-down")
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style="width: 90px").m-auto
            .col
              p.mb-0 Los amplificadores de radiofrecuencia son dispositivos que incrementan el nivel de señal en sistemas de comunicaciones de radio de onda modulada o televisión con señales análogas. Su rango de frecuencias va desde los 100 kHz hasta 1 GHz.
          p.mb-4(data-aos="fade-right") Las funciones principales son:
          .row.align-items-center.mb-4
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 480px").m-auto
            .col-lg-7(data-aos="fade-left")
              .row.mb-3
                .col-12
                  .p-3.bg-c8
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Separa señales, garantizando que el oscilador no se vea afectado por variaciones de tensión o impedancias.
              .row.mb-3
                .col-12
                  .p-3.bg-c8
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Incrementa la potencia de la señal portadora generada por el oscilador.
              .row
                .col-12
                  .p-3.bg-c8
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Presenta bajo nivel de ruido, alta ganancia y sintonización al recibir la señal análoga original.
          p.mb-4(data-aos="fade-right") Las características de los amplificadores son:
          TabsB.color-acento-contenido(data-aos="fade-left")
            .py-4.py-md-5.bg-c10(titulo="Sensibilidad" :icono="require('@/assets/curso/tema2/img2.svg')")
              .row.justify-content-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Sensibilidad]
                  p.mb-0 Es el nivel mínimo de señal de radiofrecuencia (RF) que se puede detectar en la entrada del receptor para generar una señal clara de la información.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img2.png', alt='', style="width: 400px").m-auto
            .py-4.py-md-5.bg-c10(titulo="Amplificación" :icono="require('@/assets/curso/tema2/img3.svg')")
              .row.justify-content-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Amplificación]
                  p.mb-0 Es la capacidad de incrementar el nivel de la señal de RF detectada en la entrada del receptor, permitiendo obtener una señal nítida de la información. 
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 400px").m-auto
            .py-4.py-md-5.bg-c10(titulo="Selectividad" :icono="require('@/assets/curso/tema2/img4.svg')")
              .row.justify-content-center
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Selectividad]
                  p.mb-0 Define la capacidad del receptor para distinguir las señales deseadas de otras señales presentes y filtrar una banda específica de frecuencias.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img4.png', alt='', style="width: 400px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
