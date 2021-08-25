export default {
  global: {
    componenteFormativo: 'Planeación y desarrollo de la cadena de suministro',
    descripcionCurso:
      'Conocer la cadena de suministro a nivel empresarial es indispensable, permite estar al tanto de cada punto clave dentro de la producción o fabricación de un producto, se debe conocer cada proceso que lo compone y la logística necesaria para su seguimiento desde: la materia prima, traslado, transporte, manejo, almacenamiento y entrega final; esto permite garantizar la satisfacción del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contexto Colombiano de la cadena de suministro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tratados de libre comercio en Colombia - TLC',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Convenios de comercialización en Colombia',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Importancia de los proveedores, fabricantes, distribuidores y clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diagrama de cadena de suministro',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistemas de información y comunicación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Proveedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Selección de proveedores',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Pedidos',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Plan de compras',
            hash: 't_7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Ciclo de las compras',
            hash: 't_7_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.5',
            titulo: 'Clasificación de las compras',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Estrategias competitivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Estado competitivo',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Evaluación de la competitividad',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Casas, K. M. (2013). <i>La logística en seguridad y transporte en la coyuntura</i>. Universidad Militar Nueva Granada.',
      link: 'https://repository.unimilitar.edu.co/handle/10654/9423',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). <i>Plan Nacional de Negocios Verdes</i>.',
      link:
        'https://www.minambiente.gov.co/images/NegociosVerdesysostenible/pdf/plan_de_negocios_verdes/Plan_Nacional_de_Negocios_Verdes.pdf',
    },
    {
      referencia:
        "O'Shaughnessy, J. (1991). <i>Marketing competitivo: un enfoque estratégico</i>. Ediciones Díaz de Santos S.A.",
      link:
        'https://books.google.com.co/books?id=Zua9_PZcmGcC&printsec=frontcover&dq=marketing+competitivo&hl=es&sa=X&redir_esc=y#v=onepage&q=marketing%20competitivo&f=false',
    },
    {
      referencia:
        'Serrano, M. J. (2014). <i>Gestión de compras</i>. Madrid. Ediciones Parainfo S.A.',
      link:
        'https://books.google.com.co/books?id=fNj7CAAAQBAJ&printsec=frontcover&dq=plan+de+compras&hl=es&sa=X&redir_esc=y#v=onepage&q&f=false',
    },
    {
      referencia:
        'White, C. H. (2014). <i>MF 1004 Gestión de proveedores</i>. Editorial Elearing S.L. Edición 5.0.',
      link:
        'https://books.google.com.co/books?id=KbpWDwAAQBAJ&printsec=frontcover&dq=proveedores&hl=es-419&sa=X&redir_esc=y#v=onepage&q&f=false',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'es una parte fundamental en la cadena de suministros, es a quienes se les debe garantizar se les cumplan sus necesidades.',
    },
    {
      termino: 'Comunicación',
      significado:
        'es una característica necesaria para que las operaciones entre cada elemento de la cadena de suministro fluyan y se desarrollen de manera correcta y coherente.',
    },
    {
      termino: 'Contratación',
      significado:
        'es una consideración especial para el análisis de las compras en la empresa, su función y procesos de selección deberán ser estratégicos para lograr su objetivo con el cliente.',
    },
    {
      termino: 'Distribución',
      significado:
        'se encarga de hacer llegar materias primas, producto o servicio a los consumidores finales a través de un traslado a locales o bodegas.',
    },
    {
      termino: 'Fabricación',
      significado:
        'proceso donde se transforman las materias primas para conseguir un producto o servicio distinto.',
    },
    {
      termino: 'Materia prima',
      significado:
        'material básico para la fabricación del producto a entregar, esta deriva de su calidad, precio y forma de entrega como algo fundamental en la cadena de suministro, su atraso afectaría gravemente a toda la cadena y por lo tanto al cliente.',
    },
    {
      termino: 'Proveedor',
      significado:
        'es un aliado estratégico en la cadena de suministro por el abastecimiento. El éxito de la empresa está condicionada la buena elección de estos.',
    },
    {
      termino: 'Suministro',
      significado:
        'actividades necesarias para obtener y entregar las materias primas para la producción.',
    },
    {
      termino: 'Tecnología',
      significado:
        'es la ciencia que permite a los elementos de la cadena de abastecimiento optimizar sus tareas y realizarlas en menor tiempo.',
    },
  ],
  complementario: [
    {
      texto: 'López, A. (2017). <i>Global Standars</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AVjVquodhBI',
    },
    {
      texto:
        'Maya, T., Orjuela J. y Herrera, M. (2020). Retos en el modelado de la trazabilidad en las cadenas de suministro de alimentos. <i>Ingeniería</i>, 25.',
      tipo: 'Articulo',
      descarga:
        '/downloads/Anexo2_Retos en el modelado de la trazabilidad en las cadenas de suministro de alimentos.pdf',
    },
    {
      texto:
        'ISO. (2015). ISO 9001. <i>Sistemas de gestión de la calidad.</i> Quality Management Systems. ',
      tipo: 'Norma',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      texto:
        'Icontec. (2018). <i>ISO 45001</i>. SG Seguridad y Salud en el Trabajo.',
      tipo: 'Norma',
      link:
        'https://ergosourcing.com.co/wp-content/uploads/2018/05/iso-45001-norma-Internacional.pdf',
    },
    {
      texto:
        'ISO. (2015). <i>ISO 14001</i>. <i>Sistemas de gestión de la calidad</i>. Quality Management Systems.',
      tipo: 'Norma',
      link:
        'http://www.itvalledelguadiana.edu.mx/ftp/Normas%20ISO/ISO%2014001-2015%20Sistemas%20de%20Gestion%20Mabiental.pdf',
    },
    {
      texto:
        'Peña, L. y Rodríguez, Y. (2018). Procedimiento de Evaluación y selección de proveedores basado en el proceso de análisis jerárquico y en un modelo de programación lineal entera mixta. <i>Revista Ingeniería</i>, 21.',
      tipo: 'Articulo',
      link:
        'http://www.scielo.org.co/pdf/inge/v23n3/0121-750X-inge-23-03-00230.pdf',
    },
    {
      texto:
        'Aprendiz de mercadotecnia. (2020). <i>Estrategias Competitivas</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zZA0hQ8nDgI',
    },
    {
      texto:
        'Departamento Nacional de Planeación. (2020). <i>Declaración de importancia estratégica del proyecto incremento de valor por dinero que obtiene el estado en la compra pública nacional Ministerio de hacienda y crédito público</i>. Agencia Nacional de Contratación Pública Colombia Compra eficiente. ',
      tipo: 'Otro',
      descarga: '/downloads/Anexo1_ Documento CONPES 4009.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
