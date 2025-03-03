<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los estudiantes sobre los conceptos clave en sistemas de comunicaciones analógicas, incluyendo componentes esenciales, procesos de modulación, características de transmisión y recepción de señales.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el componente encargado de generar y transformar el mensaje en un sistema de comunicación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fuente de información.', esCorrecta: true },
            { id: 'b', texto: 'Transductor.', esCorrecta: false },
            { id: 'c', texto: 'Receptor.', esCorrecta: false },
            { id: 'd', texto: 'Canal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué proceso convierte la señal original en el receptor después de haber sido modulada?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Canal.', esCorrecta: false },
            { id: 'b', texto: 'Demodulación.', esCorrecta: true },
            { id: 'c', texto: 'Atenuación.', esCorrecta: false },
            { id: 'd', texto: 'Interferencia.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué dispositivo convierte una señal de un tipo de energía a otro?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Transductor.', esCorrecta: true },
            { id: 'b', texto: 'Fuente de información.', esCorrecta: false },
            { id: 'c', texto: 'Receptor.', esCorrecta: false },
            { id: 'd', texto: 'Canal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes términos se refiere al nivel mínimo de señal de RF que un receptor puede detectar?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Modulación.', esCorrecta: false },
            { id: 'b', texto: 'Sensibilidad.', esCorrecta: true },
            { id: 'c', texto: 'Multiplexación.', esCorrecta: false },
            { id: 'd', texto: 'Interferencia.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué técnica de modulación varía la amplitud de la señal portadora de acuerdo con la señal de información?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Frecuencia modulada (FM).', esCorrecta: false },
            { id: 'b', texto: 'Sensibilidad.', esCorrecta: false },
            { id: 'c', texto: 'Amplitud modulada (AM).', esCorrecta: true },
            { id: 'd', texto: 'Atenuación.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cómo se llama el medio por el cual se propaga la señal en un sistema de comunicaciones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Canal.', esCorrecta: true },
            { id: 'b', texto: 'Modulación.', esCorrecta: false },
            { id: 'c', texto: 'Receptor.', esCorrecta: false },
            { id: 'd', texto: 'Fuente de información.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué término describe la capacidad del receptor para filtrar una banda específica de frecuencias?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Selectividad.', esCorrecta: true },
            { id: 'b', texto: 'Atenuación.', esCorrecta: false },
            { id: 'c', texto: 'Demodulación.', esCorrecta: false },
            { id: 'd', texto: 'Transductor.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes técnicas permite la transmisión simultánea de múltiples señales en un solo canal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Multiplexación.', esCorrecta: true },
            { id: 'b', texto: 'Demodulación.', esCorrecta: false },
            { id: 'c', texto: 'Atenuación.', esCorrecta: false },
            { id: 'd', texto: 'Receptor.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La interferencia ocurre cuando señales no deseadas afectan la señal principal, introduciendo ruido y distorsión.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La modulación es el proceso de recuperación de la señal original en el receptor después de la transmisión.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
