<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Contexto Colombiano de la cadena de suministro

    p.mb-5 Se conocerá sobre la cadena de suministro a continuación:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center
      .col-lg-8.col-12
        .box.color-primario.px-5.py-4
          p.mb-0 Hoy en día Colombia cuenta con Tratados de Libre Comercio - TLC con diferentes países del mundo.

    Separador

    .titulo-segundo
      h2 1.1  Tratados de libre comercio en Colombia - TLC

    .row.justify-content-center.mb-5
      .col-auto
        p.mb-0 Colombia tiene diferentes tratados y acuerdos con otros países, se aprenderá sobre ellos: 

    figure
      img(src="@/assets/curso/tema1-imagen1.svg")

    Separador

    .titulo-segundo
      h2 1.2  Convenios de comercialización en Colombia

    p.mb-5 En búsqueda de garantizar las estrategias de implementación de instrumentos de gestión, promoción y organización del:

    .row.justify-content-center.mb-5.align-items-center
      .col-10
        .box.color-primario.border-radius-normal.py-4(style="display: flex;")
          .image-exito(style="width: 100%; margin-left: -100px")
            figure
              img(src="@/assets/curso/tema1-imagen2.svg")
          p.mb-0.px-5 Plan Nacional de Negocios Verdes en Colombia se crearon 4 convenios de comercialización con grandes cadenas como Jumbo, Éxito, Carulla y Cafam quienes promueven e impulsan empresas verdes que tomaban en cuenta principios de negocios acompañadas por el Sistema Nacional Ambiental SINA obteniendo resultados positivos por incremento de ventas del 28% a 33% y productores codificados con 131% en el 2007 (Ministerio de Ambiente, 2014).
          .image-exito(style="width: 100%; margin-right: -100px")
            figure
              img(src="@/assets/curso/tema1-imagen3.svg")
  
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

<style lang="sass" scoped></style>
