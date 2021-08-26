<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Sistemas de información y comunicación

    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-5.mb-5(data-aos="fade-right" data-aos-duration="1500")
          p.mb-0 El modo en que se realiza la comunicación en una empresa es fundamental para lograr un proceso efectivo en el suministro de un bien o servicio; puesto que, si no existen unos canales de comunicación ya definidos, abrirá paso para errores que afecten la satisfacción del cliente. 

        p.mb-5(data-aos="fade-left" data-aos-duration="1500") Para lograr una buena planeación en la cadena de suministro es importante conocer las características del producto, esto se define con un proceso logístico que revisó todos los diferentes escenarios para la cadena productiva y allí se controla la calidad, almacenaje y manipulación del producto o servicio, por lo que se tiene en cuenta al fabricante con mejores cualidades o características, pues ofrecen descuentos, acompañamiento técnico, valor unitario y al por mayor, para así determinar qué compra será productiva y cuál no.

        figure.mb-5(data-aos="fade-right" data-aos-duration="1500")
          img(src="@/assets/curso/tema4-imagen1.svg")

        p.mb-5(data-aos="fade-left" data-aos-duration="1500") Dentro de la información es necesario conocer los tipos de compras productivas en las que recaen <strong>las materias primas, componentes, embalajes, etiquetas e inclusive la subcontratación de servicios.</strong>
          br
          br
          | Dentro de las no productivas están:

        .row(data-aos="fade-in" data-aos-duration="1500")
          .col-lg-7.mb-lg-0.mb-5
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Las compras de maquinaria.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Programas y equipos informativos.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Transporte.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Suministros de agua y luz.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Arriendos de locales y oficinas.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Servicios de mantenimiento.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Avisos publicitarios.
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Repuestos y accesorios.
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Interventorías y consultorías que a la final le dan alto valor a la empresa.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema4-imagen2.svg")
  
</template>

<script>
export default {
  name: 'Tema4',
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
