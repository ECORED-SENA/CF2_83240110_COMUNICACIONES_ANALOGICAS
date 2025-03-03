<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p La comunicación analógica representa un proceso fundamental en la transmisión de información a través de señales continuas. A diferencia de las señales digitales, las señales analógicas varían de forma continua, permitiendo la transferencia de datos en forma de ondas que replican con mayor fidelidad los sonidos y otros tipos de información. Esta tecnología es ampliamente utilizada en sistemas de radio, televisión y telefonía convencional.
        .row.mb-3
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/intro/img1.png", alt="", style="width: 285px").m-auto
          .col
            .row
              .col-12
                .p-3.bg-c1
                  figure.mb-3
                    img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 60px")
                  p.mb-0 Un sistema de comunicación analógica consta de diversos componentes esenciales, entre los que destacan el transmisor, el receptor y el canal o medio de transmisión. Cada uno cumple un papel específico para garantizar que la señal llegue de manera adecuada al destinatario. Sin embargo, la señal puede sufrir interferencias, distorsión y pérdida de calidad debido al ruido presente en el entorno de transmisión.
        p.mb-0 Además, este material profundiza en los procesos de modulación en frecuencia, amplitud y fase, que permiten adaptar la señal a diferentes condiciones de transmisión. Asimismo, se abordan los amplificadores de radiofrecuencia, dispositivos que incrementan la potencia de la señal para mejorar su calidad y alcance, lo cual es esencial en aplicaciones de larga distancia o en ambientes ruidosos.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img2.png", alt="", style="width: 400px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
