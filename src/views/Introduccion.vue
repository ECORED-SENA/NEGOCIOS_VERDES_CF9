<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 En el sector empresarial las diferentes compañías cuentan con características similares y propias que se encargan de un objetivo en general para cumplirle a los consumidores finales, por ello se encuentran cadenas de suministro o cadenas de abastecimiento, estas funcionan como un conjunto de actividades, instalaciones y medios de distribución que son necesarios para llevar a cabo el proceso de venta. Este inicia en la adquisición de materias primas, transformación, producción, fabricación, transporte y entrega al consumidor final.

    .row.mb-5.row-intro-with-box
      .col-lg-4.col-12.mb-lg-0.mb-5
        figure
          img(src="@/assets/curso/intro-imagen1.svg")
      .col-lg-8.col-12
        p.mb-0 Tiene como finalidad satisfacer las necesidades del cliente de la mejor manera posible, logrando calidad con la entrega en los tiempos establecidos, se evitan pérdidas o mermas innecesarias, se optimizan los tiempos de distribución, se manejan los inventarios, se establecen canales de comunicación y coordinación.
          br
          br
          | Las empresas deben estar evaluando constantemente a sus proveedores para asegurar que no se desvíen del objetivo que tienen con sus clientes y es allí cuando se utilizan parámetros acordes al sistema de gestión empresarial, por medio de formatos que validen tiempos de entrega, costos del servicio, calidad del producto, descuentos, innovación y canales de comunicación apropiados.

    .row.justify-content-center.mb-5
      .col-11
        p.mb-0.additional-text.px-5 Se pueden entonces presentar escenarios donde la empresa tiene varios proveedores, esto puede conllevar a tener materias primas de diferentes características lo que ocasionaría modificaciones en los procesos productivos; por eso se hace necesario que se valide con el proveedor la materia prima, garantizando que cumpla con una serie de requisitos y características específicas.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
