export default {
  global: {
    componenteFormativo: 'Sistemas de comunicaciones analógicas',
    descripcionCurso:
      'Este material componente formativo aborda los sistemas de comunicaciones analógicas, destacando sus componentes esenciales: transmisor, receptor, canal y transductores. Explica los modos de transmisión (<i>simplex</i> y <i>full duplex</i>) y los amplificadores de radiofrecuencia, que mejoran la señal. También describe los procesos de modulación en frecuencia, amplitud y fase, esenciales para la transmisión clara de información análoga.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas de comunicaciones analógicas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Amplificadores de radiofrecuencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Moduladores',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistemas de comunicaciones analógicas',
      referencia:
        'iLattec. (2021). Entienda las diferencias enter comunicaciones analógicas y digitales. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7RqdVOeZy1M',
    },
    {
      tema: 'Amplificadores de radiofrecuencia',
      referencia:
        'INSTITUTO IDETEU. (2022).COMO FUNCIONA UN AMPLIFICADOR DE RADIOFRECUENCIA. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bLddb23kXbw',
    },
    {
      tema: 'Moduladores',
      referencia: 'Tecnológico Nacional de México. (s. f.). Modulación.',
      tipo: 'Documento',
      link:
        'http://dsc.itpn.mx/recursosisc/5semestre/fundamentosdetelecomunicaciones/Unidad%20III.pdf',
    },
    {
      tema: 'Moduladores',
      referencia:
        'RF elements s.r.o. (2022). Inside Wireless en Español: Modulación QAM II - El modulador. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-WAWX046p0o',
    },
  ],
  glosario: [
    {
      termino: 'Atenuación',
      significado:
        'disminución de la intensidad de la señal a lo largo del canal de transmisión, que puede afectar la calidad del mensaje recibido.',
    },
    {
      termino: 'Canal',
      significado:
        'medio de transmisión por el cual se propaga la señal, que puede ser físico (cable coaxial) o inalámbrico (ondas de radio).',
    },
    {
      termino: 'Frecuencia modulada (FM)',
      significado:
        'técnica de modulación en la que la frecuencia de la señal portadora varía en función de la señal de información.',
    },
    {
      termino: 'Fuente de información',
      significado:
        'componente que genera y transforma el mensaje inicial en un sistema de comunicación.',
    },
    {
      termino: 'Interferencia',
      significado:
        'efecto de señales no deseadas que afectan la transmisión, introduciendo ruido y distorsión en la señal principal.',
    },
    {
      termino: 'Modulación',
      significado:
        'proceso que adapta la señal de información a la frecuencia de la señal portadora, permitiendo su transmisión eficiente.',
    },
    {
      termino: 'Receptor',
      significado:
        'dispositivo que capta y procesa la señal recibida, filtrándola y demodulándola para extraer el mensaje.',
    },
    {
      termino: 'Sensibilidad',
      significado:
        'nivel mínimo de señal de radiofrecuencia (rf) que un receptor puede detectar y procesar con claridad.',
    },
    {
      termino: 'Transductor',
      significado:
        'dispositivo que convierte una señal de un tipo de energía a otro, como de una señal acústica a una señal eléctrica.',
    },
    {
      termino: 'Transmisor',
      significado:
        'equipo que adapta y envía la señal eléctrica al canal de transmisión mediante modulación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Couch, L. W. (2008). <i>Sistemas de comunicación digitales y analógicos</i> (7.ª ed.). Prentice Hall México. ',
      link: '',
    },
    {
      referencia:
        'Tecnológico Nacional de México. (s. f.). <i>Modulación</i>. ',
      link:
        'http://dsc.itpn.mx/recursosisc/5semestre/fundamentosdetelecomunicaciones/Unidad%20III.pdf',
    },
    {
      referencia:
        'Universidad Autónoma de Madrid. (2015). <i>Comunicaciones analógicas</i>. ',
      link: '',
    },
    {
      referencia:
        'Universidad Tecnológica Nacional. (2008). <i>Apunte de Electrónica Aplicada III</i>. ',
      link:
        'http://www.profesores.frc.utn.edu.ar/electronica/ElectronicaAplicadaIII/Aplicada/Cap0IntroduccionalasTelec.pdf',
    },
    {
      referencia:
        'Universidad Tecnológica Nacional. (s. f.). <i>Receptores de RF</i>. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Fabio Enrique Combariza',
          cargo: 'Experto temático',
          centro:
            'Equipo de Adecuación Gráfica y Didáctica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
