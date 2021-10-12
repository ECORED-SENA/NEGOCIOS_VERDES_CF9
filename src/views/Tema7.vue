<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Proveedores

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-in" data-aos-duration="1000")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7-imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la detección de necesidades y requerimientos de materias primas o insumos para la producción, antes de adquirirlos se debe evaluar su necesidad; es decir, si realmente es rentable, en caso de ser de esta manera se debe evaluar que tan rentable es para poder revisar las características requeridas o las que ofrece determinado proveedor.  
          br
          br
          | Se inicia un análisis del proveedor, se busca detectar las posibilidades de adquisición y se valora el precio, calidad, tamaño empresarial y clientes destacados; todo en pro de evaluar los productos.
          br
          br
          | Tras la evaluación se solicita la información faltante para analizar la compra, garantías, mantenimientos, supervisión, condiciones contractuales, efectos en el precio y tiempos de entrega. 
    
    Separador(data-aos="fade-in" data-aos-duration="1000")

    #t_7_1.titulo-segundo(data-aos="flip-up")
      h2 7.1  Selección de proveedores
    
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-5(data-aos="fade-left" data-aos-duration="1000")
          p.mb-0 Dentro de una empresa la gestión de proveedores son un conjunto procedimientos y acciones destinadas a lograr una buena coordinación entre el comprador y el proveedor; por consiguiente, toda empresa debe tener un esquema de proveedores que describa el punto de partida y los diferentes proveedores por la clase de producto. Se hace operativo un sistema de evaluación de proveedores cuando permite ingresar información cada vez que se contacta con un nuevo proveedor con altas posibilidades de adquisición, ver figura 2, allí se evalúa una serie de variables como: 

        .titulo-sexto.color-acento-contenido(data-aos="fade-right" data-aos-duration="1000")
          span Figura 2. Variables para la elección del proveedor.
        figure
          img(src="@/assets/curso/tema7-imagen3.svg")

        hr.color-primario(data-aos="fade-in" data-aos-duration="1000")

        .row.justify-content-center(data-aos="fade-in" data-aos-duration="1000")
          .col-lg-10
            .row
              .col-3
                figure
                  img(src="@/assets/curso/tema7-imagen4.svg")
              .col-9
                p.mb-0 El objetivo del sistema de evaluación de proveedores es lograr un acuerdo apropiado para ambas partes, este creará un impacto positivo alto o bajo a las dos partes y un impacto de riesgo de suministro bajo o alto, en muchos casos se requerirá soportar con pólizas o seguros que serán avaladas por los estados financieros de las dos partes de acuerdo a las condiciones especificadas en el contrato, pero que son indispensables para darle seriedad a la negociación

        hr.color-primario(data-aos="fade-in" data-aos-duration="1000")
    
    Separador(data-aos="fade-in" data-aos-duration="1000")

    #t_7_2.titulo-segundo(data-aos="flip-up")
      h2 7.2  Pedidos

    .row.justify-content-center.mb-5(data-aos="fade-in" data-aos-duration="1000")
      .col-lg-6
        .box.color-acento-contenido.px-5.py-3
          p.mb-0 Se profundizará con el siguiente video sobre los pedidos:

    figure.mb-5(data-aos="fade-in" data-aos-duration="1000")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VBKPoAhAeS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador(data-aos="fade-in" data-aos-duration="1000")

    #t_7_3.titulo-segundo(data-aos="flip-up")
      h2 7.3  Plan de compras

    .row.justify-content-center
      .col-lg-10
        .row.mb-5(data-aos="fade-right" data-aos-duration="1000")
          .col-9
            p.mb-0 En el momento que los productos son adquiridos por el cliente en los locales, tiendas o centros de distribución, se inicia un registro que causa un impacto económico a la empresa de manera positiva, entre más salidas se presenten por venta se incrementa el impacto positivo; por eso la empresa debe ser sincera y garantizar que las especificaciones que presentan al cliente sobre el producto son verdaderas, esto brinda calidad y garantía el éxito empresarial. 
              br
              br
              | En otras ocasiones no solo se habla de una venta que crea un registro de factura y termina allí; también existen otras modalidades como la contratación con un proveedor en la cual se definen: <strong>niveles de calidad específicos con fechas, tiempos de entrega, garantías y pólizas que garanticen la satisfacción de ambas partes.</strong>

          .col-3
            figure
              img(src="@/assets/curso/tema7-imagen5.svg")
        .box.color-primario.px-5.py-3.mb-5(data-aos="fade-left" data-aos-duration="1000")
          p.mb-0 Cada empresa es libre de realizar su propia metodología para planificar las compras, pueden especificar inicialmente:
        figure.mb-5(data-aos="fade-right" data-aos-duration="1000")
          img(src="@/assets/curso/tema7-imagen6.svg")
        p.mb-5(data-aos="fade-left" data-aos-duration="1000") Sin embargo, un plan de compras busca facilitar los acuerdos a los que se llega con los proveedores, pues tiene en cuenta el tipo de producto al que se le pueda gestionar su tiempo. Generalmente la gestión de compras está compuesta por 6 fases, ver figura 3:
        .titulo-sexto.color-acento-contenido
          span Figura 3. Fases de gestión de compras.
        figure.mb-5(data-aos="fade-in" data-aos-duration="1000")
          img(src="@/assets/curso/tema7-imagen7.svg").pb-4
          figcaption Nota. Gestión de compras. Serrano (2014) 
        .row.mb-5(data-aos="fade-in" data-aos-duration="1000")
          .col-4
            img(src="@/assets/curso/tema7-imagen8.jpg")
          .col-8
            p.mb-0 Estas fases pueden variar en las empresas de acuerdo a la actividad económica que se dedique, por ejemplo, las empresas industriales adquieren materias primas, envases, apoyos técnicos, asesorías, acompañamientos en mantenimientos, equipos tecnológicos y se hace necesario un análisis del precio y calidad; por otro lado las empresas que se dedican a vender al por mayor compran productos a precios competitivos para lograr una ganancia y las empresas que se dedican a la venta de servicios adquieren vehículos para su transporte, contratan servicios generales, personal con modalidad de contratación diferentes o seguros buscando principalmente la satisfacción del cliente.
    
    Separador(data-aos="fade-in" data-aos-duration="1000")

    #t_7_4.titulo-segundo(data-aos="flip-up")
      h2 7.4  Plan de compras

    .box.color-primario.px-5.py-5.mb-5(data-aos="fade-right" data-aos-duration="1000")
      .row
        .col-8
          p.mb-0.px-5 La gestión de las compras se puede clasificar en un ciclo secuencial; es decir que, requiere el uno del otro para garantizar la venta; inicialmente se habla de un producto, los proveedores, los procesos y finaliza con el contrato.
            br
            br
            | Para hablar del producto se identifica los bienes y servicios de la empresa como suministro base dentro de la fabricación o producción ya sea materia prima o el producto a elaborar, para así pasar a los proveedores, que desde el punto de vista de la gestión empresarial garantiza la satisfacción del cliente, pues los que se consideren excelentes proveedores deben cuidarse, captarse, fidelizarlos y estimularlos para obtener los mejores resultados.
        .col-4
          figure
            img(src="@/assets/curso/tema7-imagen9.svg")

    p.mb-5(data-aos="fade-left" data-aos-duration="1000") Los procesos son clave dentro de la cadena de suministro ya que supervisan y validan documentalmente la producción y actividades de apoyo con logística, logrando un óptimo funcionamiento para que posteriormente en la gestión del contrato se tengan todos los detalles comerciales y técnicos de la entrada, salida, distribución y entrega de los productos o servicios.

    Separador(data-aos="fade-in" data-aos-duration="1000")

    #t_7_5.titulo-segundo(data-aos="flip-up" data-aos-duration="1000")
      h2 7.5  Clasificación de las compras

    p.mb-5(data-aos="fade-left" data-aos-duration="1000") Si se quisiera catalogar las compras, se podría hacer dependiendo de varios factores, pero a continuación se clasifica en base al origen de las necesidades:

    .row.mb-5(data-aos="fade-right" data-aos-duration="1000")
      .col-lg-3
        figure
          img(src="@/assets/curso/tema7-imagen10.svg")
      .col-lg-9
        SliderCajas(columns="col-lg-4")
          .box.color-primario.px-5.py-5(titulo="Compras especiales")
            p.mb-0 Son aquellas compras sobre un bien de uso como las máquinas, vehículos o viviendas,  con la característica que no se revende y es una inversión considerable; en una empresa este tipo de adquisición se realiza por consulta y análisis por los directivos y personal técnico.
          .box.color-primario.px-5.py-5(titulo="Compras anticipadas")
            p.mb-0 Este tipo de adquisición son premeditadas a una necesidad que aparecerá a un medio o largo plazo, es viable en productos básicos que en muchas ocasiones se conoce subirá su precio y tiene cualidades de preservación en caso de alimentos.
          .box.color-primario.px-5.py-5(titulo="Compras estacionales")
            p.mb-0 Se utilizan con productos necesarios para ciertas temporadas, a nivel empresarial se compran teniendo en cuenta los resultados de venta  de años anteriores, como un histórico que facilita la asignación de los recursos.
          .box.color-primario.px-5.py-5(titulo="Compras de oportunidad")
            p.mb-0 Este estilo de compra es a las que todos hemos llegado a dar cabida, cuando se presentan ofertas, descuentos, días sin IVA, o los famosos outlet, ya que el proveedor puede querer sacar una nueva línea o tener productos en Stock, los cuales ya no se están moviendo mucho en el mercado, impulsandolo a disminuir su precio para ser llamativo para el cliente y lograr posteriormente su venta.
          .box.color-primario.px-5.py-5(titulo="Compras rutinarias")
            p.mb-0 Son las compras del diario vivir que se entregan en todo momento en las diferentes partes del mundo y en pequeñas cantidades, como las tiendas de barrio, panaderías, mercados o carnicerías entre otros. Aquí intervienen condiciones de venta para establecer precios en las diferentes zonas, transporte, entrega y sus pagos.
          .box.color-primario.px-5.py-5(titulo="Compras de urgencia")
            p.mb-0 Este tipo de compra surge para solventar una necesidad de carácter prioritario o urgente, como la falta de insumos para la producción de algún producto, y usualmente este tipo de compra al ser de carácter urgente se hace rápido y a veces puede saltarse ciertos protocolos dentro de los procesos de la gestión de compras y cadena de suministro.
  
</template>

<script>
import SliderCajas from '../components/SliderCajas.vue'
export default {
  name: 'Tema7',
  components: {
    SliderCajas,
  },
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
