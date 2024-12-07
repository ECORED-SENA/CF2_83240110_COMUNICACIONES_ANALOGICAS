<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Sistemas de comunicaciones analógicas
    p.mb-4(data-aos="fade-left") Un sistema de comunicación analógica es un conjunto de elementos que permite la transferencia de información analógica entre un transmisor y un receptor, a través de un medio de transmisión o canal, cuya función es transferir datos o información. Es importante considerar que, dentro de estos elementos, el mensaje puede experimentar atenuación debido al ruido, como se presenta a continuación.
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Sistema de comunicaciones
        figure
          img(src='@/assets/curso/tema1/img1.svg', alt='Diagrama de transmisión de señal que muestra la fuente, el transmisor, el canal, el receptor, y el destino, con un bloque adicional para el ruido que interfiere en el proceso.', style="width: 800px").m-auto
    .row.bg-c2.mb-5
      .col-12
        .px-5
          .row.mb-4
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .row.align-items-center.mb-3
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', alt='', style="width: 90px").m-auto
                .col
                  p.mb-0 Un ejemplo de este tipo de comunicaciones son los sistemas de radio comerciales y la telefonía analógica convencional, donde la voz transmitida se convierte en una señal eléctrica que es enviada por un cable conductor o de manera inalámbrica hasta un aparato receptor, el cual transforma dicha señal en sonido a través de un parlante o bocina.
              .row.justify-content-center.mb-3
                .col-10.col-md-7.col-lg-auto.pe-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 370px").m-auto
                .col-10.col-md-7.col-lg.bg-c3
                  .row.align-items-center.h-100
                    .col-12
                      .p-3.h-100
                        p.mb-0 El mensaje que se transmite puede originarse a partir de diversas fuentes, como micrófonos o cámaras. Toda señal analógica debe convertirse en una magnitud eléctrica para su adecuada representación y transmisión.
              p.mb-0 La energía de la onda electromagnética es transmitida y recibida como una señal analógica que varía constantemente en forma senoidal.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 400px").m-auto
          p.mb-5(data-aos="fade-right") Estas señales no han pasado por un proceso de digitalización; su función es reproducir en el destino la señal emitida desde la fuente con cierto grado de claridad y mínima pérdida. Sin embargo, pueden experimentar atenuaciones debido al ruido presente durante la transmisión.
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Componentes básicos de un sistema de comunicaciones analógicas
          p.mb-4(data-aos="fade-right") En los sistemas de comunicaciones analógicas, se utiliza una serie de componentes que permiten la transmisión de mensajes en forma de señales continuas. A través de un transmisor, una señal de entrada es enviada mediante un medio de transmisión hacia un receptor, donde puede estar sujeta a factores como atenuación, distorsión y ruido. Este proceso facilita la transferencia de información de un origen a un destino, manteniendo en lo posible la fidelidad del mensaje original sin pasar por un proceso de digitalización.
          .row.justify-content-center.mb-4
            .col-lg-8(data-aos="fade-down")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 2.] Representación de un sistema de comunicación
              figure
                img(src='@/assets/curso/tema1/img5.svg', alt='Esquema de un sistema de transmisión detallado, que incluye bloques como fuente de información, transductor de entrada y salida, transmisor, medio, receptor, y destinatario. Muestra también cómo el ruido afecta la señal transmitida.', style="width: 800px").m-auto
          p.mb-4(data-aos="fade-right") El transmisor, el canal de transmisión y el receptor son los componentes esenciales de un sistema de comunicaciones analógicas. Sin embargo, existen otros elementos que optimizan la transmisión de la señal, tales como:
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img4.png', alt='', style="width: 300px").m-auto
            .col-lg-8(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.bg-c5
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema1/img6.svg' alt='AvatarTop')
                    p.text-center #[b Fuente de información]
                    p.mb-0 Lugar donde se genera y transforma el mensaje.
                .tarjeta.bg-c5
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema1/img7.svg' alt='AvatarTop')
                    p.text-center #[b Transductor de entrada]
                    p.mb-0 Convierte el mensaje en una señal eléctrica.
                .tarjeta.bg-c5
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema1/img8.svg' alt='AvatarTop')
                    p.text-center #[b Transmisor]
                    p.mb-0 Acopla y ajusta la señal al canal de transmisión mediante un proceso de modulación.
                .tarjeta.bg-c5
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema1/img9.svg' alt='AvatarTop')
                    p.text-center #[b Canal o medio]
                    p.mb-0 Es el entorno en el cual se expande el mensaje (puede ser aire, fibra óptica o cable coaxial).
                .tarjeta.bg-c5
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
                    p.text-center #[b Receptor]
                    p.mb-0 Recibe y recupera la señal a través de un proceso de filtrado y demodulación para enviarla al destino.
                .tarjeta.bg-c5
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
                    p.text-center #[b Transductor de destino]
                    p.mb-0 Restaura la señal original.
                .tarjeta.bg-c5
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
                    p.text-center #[b Destinatario]
                    p.mb-0 Recibe la información final.
    .row.bg-c6
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Modos de transmisión en un sistema de comunicaciones analógicas
          p.mb-4(data-aos="fade-right") La información o los mensajes pueden clasificarse según su modo de transmisión y la forma en que el transmisor y el receptor se comunican entre sí dentro de un sistema de comunicaciones. Estos modos se dividen en:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .bg-c14.shadow
                figure.mx-0
                  img(src='@/assets/curso/tema1/img6.png', alt='', style='width: 550px').m-auto
                .row
                  .col-12
                    .p-4.bg-c7
                      p.text-center #[b Modo de transmisión #[i simplex]]
                      p.text-center.mb-0 El mensaje se transmite en una sola dirección.
                      p.text-center.mb-0 #[b Ejemplo:] emisoras de radio modulada.
            .col-10.col-md-8.col-lg-5(data-aos="fade-left")
              .bg-c14.shadow
                figure.mx-0
                  img(src='@/assets/curso/tema1/img7.png', alt='', style='width: 550px').m-auto
                .row
                  .col-12
                    .p-4.bg-c7
                      p.text-center #[b Modo de transmisión #[i full dúplex]]
                      p.text-center.mb-0 El mensaje se transmite en ambas direcciones de forma simultánea.
                      p.text-center.mb-0 #[b Ejemplo:] sistemas telefónicos.
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Representación y bloques constitutivos
          p.mb-4(data-aos="fade-right") En la figura se presenta un sistema de comunicaciones analógicas mediante sus bloques constitutivos, en el cual la señal analógica se convierte en una señal eléctrica.
          .row.justify-content-center.mb-4
            .col-lg-8(data-aos="fade-down")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 3.] Sistemas de comunicación analógica
              figure
                img(src='@/assets/curso/tema1/img13.svg', alt='Diagrama de un sistema de transmisión con múltiples elementos como transductores, procesamiento de señales, y perturbaciones, que muestra el flujo de señal eléctrica y los canales de comunicación hacia diferentes destinos.', style="width: 800px").m-auto
          .row
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Fuente de información y transductor de fuente")
                  .col-12
                    p.mb-0 Se genera la señal analógica y la información se convierte en una señal eléctrica.
                .row(titulo="Procesado de transmisión (tx) fase 1")
                  .col-12
                    p.mb-0 Acopla y adapta la señal eléctrica generada por el transductor a un ancho de banda requerido por el sistema de transmisión, lo que amplifica la señal, la filtra y limita su ancho de banda.
                .row(titulo="Procesado de recepción (rx) fase 1")
                  .col-12
                    p.mb-0 Recibe y adapta la señal eléctrica entregada por el sistema de transmisión al transductor de destino, para realizar el mismo proceso de amplificación y filtrado.
                .row(titulo="Canal")
                  .col-12
                    p.mb-0 Medio de transmisión utilizado por el sistema, que puede ser físico (coaxial) o inalámbrico (microondas).
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img8.png', alt='', style="width: 400px").m-auto
          .row
            .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img9.png', alt='', style="width: 400px").m-auto
            .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Procesado de transmisión (tx) fase 2")
                  .col-12
                    p.mb-0 Adapta el canal para realizar el proceso de modulación. Se aprovechan los recursos en los canales que llevan a cabo el proceso de multiplexación, lo que garantiza calidad y nitidez en la señal.
                .row(titulo="Procesado de recepción (rx) fase 2")
                  .col-12
                    p.mb-0 Incluye amplificación, demodulación, demultiplexación y filtrado de la señal.
                .row(titulo="Perturbaciones")
                  .col-12
                    p.mb-0 La señal puede experimentar atenuación y distorsión debido a efectos como la interferencia, diafonía y ruido.
                .row(titulo="Destino y transductor de destino")
                  .col-12
                    p.mb-0 La señal eléctrica recibida se convierte nuevamente en la señal original, haciéndola compatible para su recepción en el destino final.
      
</template>

<script>
export default {
  name: 'Tema1',
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
