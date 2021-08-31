<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Trazabilidad
    
    .row.justify-content-center
      .col-lg-10
        figure.mb-5(data-aos="fade-right"  data-aos-duration="1000")
          img(src="@/assets/curso/tema6-imagen1.jpg")

        p.mb-5(data-aos="fade-left") En la cadena de suministro la trazabilidad permite corroborar la información por medio de registros o soportes en la gestión documental, corresponde al recorrido que lleva el producto o información. Cabe resaltar que la trazabilidad es un medio de defensa para validar las actividades establecidas desde el inicio de la cadena de suministro hasta el final.
          br
          br
          | Es importante asociar en el sistema de gestión de la empresa <strong>un flujo o recorrido de la información o producto</strong> de manera que se pueda encontrar momentos claves para definir <strong>lotes, acciones erróneas o puntos definitivos dentro de la fabricación o acabados determinados.</strong>

        .row.align-items-end.row-intro-with-box.mb-5(data-aos="fade-right" data-aos-duration="1000")
          .col-4
            figure.px-5
              img(src="@/assets/curso/tema6-imagen2.svg")
          .col-8
            p.mb-3 Recuerda que: 
              br
              br
              | La trazabilidad responde a cumplir con diversos objetivos como: certificar productos verdes, seguridad alimentaria, adquirir bases de datos, controlar toda la cadena de suministro eficazmente, creación o innovación dentro de los productos ya establecidos.

        p.mb-5(data-aos="fade-in" data-aos-duration="1000") En el proceso existen aspectos clave como:

        ol.lista-ol--cuadro.mb-5(data-aos="fade-right" data-aos-duration="1000")
          li 
            .lista-ol--cuadro__vineta
              span 1
            | La base de datos de la empresa porque debe tener los datos requeridos por los clientes.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Promociones.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Comparación con la competencia.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Dar un valor agregado.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Capacidad de almacenar la información.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Buen procesador que permite al usuario manejar a la velocidad que sea necesaria sin que sea un impedimento.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | La recolección de la información.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Identificación del producto de forma que exista una correlación de todos los puntos y lograr un sistema eficiente.

        .cajon.color-acento-contenido.p-5.mb-5(data-aos="fade-left" data-aos-duration="1000")
          p.mb-0 En la actualidad, existen normativas aplicables a la empresa, las cuales buscan que se garantice la trazabilidad de la información, productos y servicios como lo son la ISO 9001:2015 del sistema de gestión de calidad, la NTC 45001:2018 del Sistema de gestión de seguridad y salud en el trabajo y la ISO 14001:2015 del Sistema de Gestión Ambiental en las empresas. Estas tres (3) normas forman el sistema de gestión integrado a nivel empresarial y revisando cuidadosamente cada una de ellas habrán numerales que solicitan el cumplimiento de la trazabilidad para lograr una armonía y seguimiento a los diferentes procesos de una compañía. 
  
</template>

<script>
export default {
  name: 'Tema6',
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
