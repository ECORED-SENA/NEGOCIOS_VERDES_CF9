<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Importancia de los proveedores, fabricantes, distribuidores y clientes

    p.mb-5 En la cadena de suministro no se pueden dejar de lado los proveedores, quienes son los pilares de la prestación de un servicio o suministro de un producto, si la calidad o insumo adquirido no cumple con los requisitos o características este tendrá que ser desechado. Los fabricantes señalan que en la producción cuando se depende de otro no se puede fallar en ningún punto, si la materia prima llega en condiciones óptimas y falla su ensamble, esto afectará todo el proceso. 

    .row.justify-content-center.mb-5 
      .col-lg-10.col-12
        .box.color-primario.px-5.py-4.text-center
          p.mb-0.px-5 De este modo, es importante el ciclo de compras en una empresa o su procedimiento, ya que principalmente consta de una serie de gestiones que implican el producto, proveedor, proceso y contrato:
    .row.justify-content-center.mb-5
      .col-lg-8.col-12
        figure
          img(src="@/assets/curso/tema2-imagen1.svg")
    .row.justify-content-center.mb-5
      .col-lg-6.col-12
        hr.color-primario

    p.mb-5 En la <strong>gestión del producto</strong> se identifican los productos o servicios necesarios para incorporarlos en el proceso productivo o como materia prima. Luego aparece la <strong>gestión de proveedores</strong> donde inicia el fundamento del punto de vista en la gestión interna, buscando la satisfacción del cliente por medio de atracción, estímulos y captación.

    figure.mb-5
      img(src="@/assets/curso/tema2-imagen2.svg")

    p.mb-5 <strong>La gestión del proceso</strong> es donde se valida la calidad del producto, documentación legal, certificados, comprobantes financieros y donde se revisa el proceso logístico de adquisiciones para el funcionamiento óptimo. Se finaliza con la <strong>gestión del contrato</strong> que se valida con el proveedor todos los criterios de la relación comercial en la logística de entrada, salida, seguridad y transporte.
  
</template>

<script>
export default {
  name: 'Tema2',
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
