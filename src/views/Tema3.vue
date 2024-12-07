<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Moduladores
    .row.bg-c13
      .col-12
        .px-5
          .row.align-items-center.mb-5(data-aos="fade-down")
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img1.svg', alt='', style="width: 70px").m-auto
            .col
              p.mb-0 Los moduladores son dispositivos que realizan un proceso en el cual se modifican la frecuencia, la amplitud y la fase de una señal portadora mediante la señal moduladora.
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Modulación en frecuencia
          .row.mb-4
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p También conocida como frecuencia modulada (FM), es una técnica de modulación que transmite información a través de la variación de la frecuencia en una onda portadora.
              .row.justify-content-center.mb-3
                .col-10.col-md-7.col-lg-auto.pe-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 370px").m-auto
                .col-10.col-md-7.col-lg.bg-c3
                  .row.align-items-center.h-100
                    .col-12
                      .p-3.h-100
                        p.mb-0 En sistemas analógicos, la frecuencia instantánea de la señal modulada es directamente proporcional al valor instantáneo de la señal moduladora.
              p.mb-0 La modulación en frecuencia se emplea en radiofrecuencias de muy alta frecuencia debido a la alta claridad y nitidez en la transmisión de música y voz. De manera similar, el sonido en la televisión analógica también se transmite mediante FM.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 400px").m-auto
          .row.justify-content-center.mb-4
            .col-lg-10(data-aos="fade-up")
              .p-4.p-lg-0.bg-c1
                .row.align-items-center
                  .col-lg-4.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema3/img2.svg', alt='', style="width: 400px").m-auto
                  .col-lg-8
                    .p-4
                      p.mb-0 Para la radiodifusión FM, se utiliza la modalidad de Amplia-FM o W-FM (#[i wide-FM] en inglés). En la radio de dos vías, se utiliza la banda estrecha o N-FM (#[i Narrow-FM] en inglés) para optimizar el uso del ancho de banda.
          p.mb-4(data-aos="fade-right") En la figura 4 se presenta que la onda modulada en FM mantiene constante su amplitud y solo varía su frecuencia.
          .row.justify-content-center.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 4.] Onda de modulación FM
              figure
                img(src='@/assets/curso/tema3/img3.svg', alt='Gráfico de modulación de frecuencia (FM) que ilustra la combinación de una onda portadora y una onda moduladora para crear una onda modulada en frecuencia.', style="width: 800px").m-auto
            .col-lg-5(data-aos="fade-left")
              .p-4.h-100.bg-c11
                .row.align-items-end.h-100
                  .col-12
                    figure.mb-3
                      img(src='@/assets/curso/tema3/img4.svg', alt='', style="width: 80px")
                    p.mb-0 La amplitud de la onda modulada en FM permanece constante, mientras que varía su frecuencia, permitiendo que la información esté contenida en la frecuencia de la onda FM.
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Modulación en amplitud
          .row.mb-4
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p También conocida como amplitud modulada (AM), es una técnica empleada en las comunicaciones electrónicas y en las emisoras de amplitud modulada. Se utiliza para transmitir información a través de una onda electromagnética transversal, como en la televisión.
              .row.justify-content-center.mb-3
                .col-10.col-md-7.col-lg-auto.pe-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 370px").m-auto
                .col-10.col-md-7.col-lg.bg-c12
                  .row.align-items-center.h-100
                    .col-12
                      .p-3.h-100
                        p.mb-0 La modulación en amplitud (AM) opera mediante la variación de la amplitud de la señal análoga transmitida originalmente.
              p.mb-0 En la figura 5 se presenta que la onda modulada en AM varía en amplitud, mientras que la frecuencia permanece constante.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img4.png', alt='', style="width: 400px").m-auto
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-6
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 5.] Onda de modulación AM
              figure
                img(src='@/assets/curso/tema3/img5.svg', alt='Diagrama comparativo que ilustra los conceptos de modulación de frecuencia (FM) y modulación de fase (PM). En la parte superior, una onda representa la modulación de frecuencia, donde un aumento en la amplitud de la señal corresponde a una mayor frecuencia. En la parte inferior, una onda muestra la modulación de fase, donde una mayor pendiente indica un aumento en la frecuencia. El eje vertical está etiquetado como voltaje (V) y el eje horizontal como tiempo (T).', style="width: 800px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
