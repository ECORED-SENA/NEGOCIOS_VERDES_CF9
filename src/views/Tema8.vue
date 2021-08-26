<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Estrategias competitivas

    .row.justify-content-center
      .col-lg-10
        p.mb-5.text-center(data-aos="fade-right" data-aos-duration="1000") Si se hace referencia a una empresa existe una línea de negociación, la cual abarca una estrategia empresarial dividida en áreas, fases o procesos, los cuales son convenientes dependiendo del sentido de la negociación:

        figure.mb-5(data-aos="fade-left" data-aos-duration="1000")
          img(src="@/assets/curso/tema8-imagen1.svg")

        p.mb-5(data-aos="fade-right" data-aos-duration="1000") Así se podrían ver los negocios a nivel general con una amplia variedad de elementos que lo componen y guardan cierta relación con un factor fundamental dentro de las estrategias competitivas como lo es la atracción: 

        .bloque-texto-d.color-primario.p-4.mb-5(data-aos="fade-left" data-aos-duration="1000")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular <strong>Factores de atracción </strong>
              br
              | Características que la empresa desearía que estuviesen presentes o que deberían evitarse en una determinada área de negocios, pues a cada valor relacionado se le asigna un peso relativo que posteriormente será evaluado comparándolo con la competencia y multiplicando ese peso por el valor obtenido en la evaluación para luego sumarle los distintos resultados obteniendo una media global del grado de interés hacia una determinada área: un ejemplo seria los factores de atracción son el tamaño del mercado, crecimiento del mercado y rentabilidad del sector, flexibilidad de precios y ausencia de ciclos o estabilidad del área de negocios permitirá establecer un cálculo de grado de atracción
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 O'Shaughnessy, 1991, p. 45

        .row.justify-content-center.mb-5(data-aos="fade-right" data-aos-duration="1000")
          .col-auto
            .box.color-acento-contenido.px-5.py-3
              p.mb-0 Conoce en la siguiente tabla 1 algunos factores de atracción: 
    
        .titulo-sexto.color-acento-contenido(data-aos="fade-left" data-aos-duration="1000")
          span Tabla 1. Factores de atracción.
        .tabla-a.color-acento-botones.mb-5(data-aos="fade-right" data-aos-duration="1000")
          table
            caption Nota. O'Shaughnessy (1991).
            thead
              tr
                th (1) Factores atracción<br>(lo que se desea encontrar)
                th (2) Peso relativo<br>(Importancia relativa)
                th (3) Evaluación frente a la<br>competencia (evaluación más alta)
                th (2) x (3)
            tbody
              tr
                td.text-center Tamaño mercado
                td.text-center 0.2
                td.text-center 2
                td.text-center 0.4
              tr
                td.text-center Crecimiento mercado
                td.text-center 0.3
                td.text-center 3
                td.text-center 0.9
              tr
                td.text-center Rentabilidad sector
                td.text-center 0.2
                td.text-center 4
                td.text-center 0.8
              tr
                td.text-center Flexibilidad de precios
                td.text-center 0.2
                td.text-center 2
                td.text-center 0.4
              tr
                td.text-center Estabilidad del área
                td.text-center 0.1
                td.text-center 5
                td.text-center 0.5

        figure
          img(src="@/assets/curso/tema8-imagen2.svg")
        .box.color-primario.px-5.py-3.mb-5(data-aos="fade-in" data-aos-duration="1000")
          p.mb-0 Las empresas generalmente se mueven en ambientes diferentes, como el ambiente interno y externo. Su capacidad para armonizar estos dos ambientes le permitirá adaptarse al cambio, esto se logra a partir de ajustar todos los procesos, teniendo en cuenta que un eje fundamental es continuar con la fabricación de un excelente producto que cumpla con todos los criterios. Inicia la competitividad cuando se logran encajar todos los aspectos de innovación y en el cuidado del medio ambiente por medio de implementación de productos verdes que garantizan no solo un resultado de excelente calidad si no a su vez, un producto o servicio que cuida del medio ambiente. A continuación, se conocerá un ejemplo de alineación de procesos en la producción de una hoja de papel: 

        .row.justify-content-center.mb-0(data-aos="fade-in" data-aos-duration="1000")
          .col-auto
            .box.color-acento-contenido.px-5.py-3
              p.mb-0
                strong Producción de una hoja de papel

        LineaTiempoB.color-primario.mb-5(:datos="datos")(data-aos="fade-in" data-aos-duration="1000")

    Separador(data-aos="fade-in" data-aos-duration="1000")

    .titulo-segundo(data-aos="flip-up")
      h2 8.1  Estado competitivo

    .cajon.color-acento-contenido.p-5.mb-5(data-aos="fade-right" data-aos-duration="1000")
      p.mb-0 Existe una serie de elementos que determinan el estado de competitividad y que tan rentable es una empresa. Una buena compañía debe tener la capacidad de conocer cómo puede influir o defenderse cuando es atacado por preguntas de un rival o un cliente exigente; de este modo existen elementos que definen los problemas de competitividad que usualmente enfrentan las empresas para lograr un negocio exitoso:

    .row.justify-content-center(data-aos="fade-left" data-aos-duration="1000")
      .col-lg-10
        ol.lista-ol--cuadro.lista-ol--separador.py-3
          li.py-4 
            .lista-ol--cuadro__vineta.color-primario.px-4.py-4.mx-5.rounded-circle.fs-4.fw-bold
              span 1
            p.mb-0 Los problemas para ingresar en un sector específico dependerán del tipo de comunicación que se le facilite y la habilidad para romper las barreras que se interpongan como desventajas ante otras entidades en relación con el nivel económico, acceso a contactos o comunicación y materias primas, instalaciones más lujosas y calidad en los productos ofertados.
          li.py-4
            .lista-ol--cuadro__vineta.color-primario.px-4.py-4.mx-5.rounded-circle.fs-4.fw-bold
              span 2
            p.mb-0 El nivel competitivo se mide como la capacidad de concentración empresarial en el sector específico medido con el precio y la facilidad para llegar al éxito.
          li.py-4
            .lista-ol--cuadro__vineta.color-primario.px-4.py-4.mx-5.rounded-circle.fs-4.fw-bold
              span 3
            p.mb-0 En los compradores su nivel de formación y capacidades para negociar, deben estar debidamente educados para ser fuertes, agradables y muy convincentes técnicamente para lograr vender ya que si no conocen del tema no será coherente que logre una buena venta.
          li.py-4
            .lista-ol--cuadro__vineta.color-primario.px-4.py-4.mx-5.rounded-circle.fs-4.fw-bold
              span 3
            p.mb-0 Para los proveedores la negociación requiere de la habilidad de integrar los elementos que hacen falta al momento de integrar una idea que facilite la venta o negociación.


    Separador(data-aos="fade-in" data-aos-duration="1000")

    .titulo-segundo(data-aos="flip-up")
      h2 8.2  Evaluación de la competitividad

    p.mb-5(data-aos="fade-in" data-aos-duration="1000") En las estrategias de competencia se dice que es eficaz cuando se logran metas y objetivos establecidos de manera fiable, siempre debe existir un experto en el tema que maneje el área comercial, esto se logra cuando esta persona es principalmente ordenada con la información para poder hacer un seguimiento con un programa que le de alertas de las tareas programadas, de forma que esos: 

    .row.mb-5(data-aos="fade-in" data-aos-duration="1000")
      .col-lg-3
        figure
          img(src="@/assets/curso/tema8-imagen4.svg")
      .col-lg-9
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h3.mb-2 Criterios están relacionados a la adecuación donde se revisa si está dirigido al público objetivo, si el nivel de riesgo es viable, si los precios ofrecidos son coherentes, si existe un equilibrio y si requiere el tiempo o inversión; la factibilidad que es donde se busca la solución de problemas de manera práctica o favorable para la empresa y la viabilidad comercial que abre paso a los beneficios y generación de recursos, es coherente con los sistemas de negocios que maneja y reduce la posibilidad de que la competencia tenga entrada
          span - O'Shaughnessy, 1991, p. 83
  
</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
    datos: [
      {
        titulo: 'Materia prima',
        texto:
          'Es la madera se le hace un análisis del consumo de agua que utiliza para su crecimiento.',
        icono: require('@/assets/curso/tema8-imagen3-1.svg'),
      },
      {
        texto:
          'Requiere mano de obra para la tala y un proceso de adquisición que está ligado a trámites ambientales y documentos que consumirá energía y agua.',
        icono: require('@/assets/curso/tema8-imagen3-2.svg'),
      },
      {
        texto:
          'Luego se vende a diferentes proveedores que continuarán el proceso de transformación en paneles y  se procesa una pasta aguada, se blanquea con cloro donde requieren energía y generará residuos .',
        icono: require('@/assets/curso/tema8-imagen3-3.svg'),
      },
      {
        texto:
          'Después de que se tiene la pulpa se pulveriza en unas cribas que permiten el paso del agua, estas se unen y  forman  la lámina que pasa por cilindros para retirar el agua y así volverse más delgada.',
        icono: require('@/assets/curso/tema8-imagen3-4.svg'),
      },
    ],
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

<style lang="sass" scoped></style>
