<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Diagrama de cadena de suministro

    p.mb-5 En la cadena de suministro existen actividades de proceso productivo que una entidad debe contemplar. A continuación, ver figura 1, se evidencia un diagrama de las actividades en orden desde las principales hasta las de apoyo:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido
          span Figura 1. Diagrama de cadena de suministro.
        figure.mb-5
          img(src="@/assets/curso/tema3-imagen1.svg")
          figcaption Nota. White (2014).

        p.mb-5 Así aparecen entidades especializadas en el flujo de la cadena de suministro, que dan respuesta a las necesidades de mejorar la producción, reducción de costos y midiendo los tiempos de suministro; aquí coordinan coherentemente las diferentes actividades dando un enfoque a las materias primas, fábrica, entrega y todas las actividades de apoyo.

        .row.align-items-end.row-intro-with-box
          .col-4
            figure
              img(src="@/assets/curso/tema3-imagen2.svg")
          .col-8
            p.mb-3 En la cadena de suministro intervienen factores clave para la coordinación, aprovisionamiento, producción y distribución, que garantizan un proceso productivo certificado. Posteriormente a través un sistema de control en la logística segura y de transporte, se distribuya eficientemente los productos y lograr así la satisfacción del cliente.
  
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

<style lang="sass" scoped></style>
