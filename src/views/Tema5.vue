<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Toma de decisiones

    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src="@/assets/curso/tema5-imagen1.jpg")

        p.mb-5 La toma de decisiones es uno de los roles más importantes dentro de una organización, de ahí se define y caracteriza el éxito de un empresario o entidad, si la persona que toma las decisiones importantes tiene la capacidad para solucionar problemas o conflictos de manera eficaz y se adapta fácilmente al cambio, podrá abarcar las decisiones con una mejor afinidad. Para llegar a este punto se preguntará acerca de las necesidades que tiene el cliente, los problemas que está afrontando, qué esfuerzo está dispuesto a realizar para llegar a la solución del conflicto o cuanto tengo para invertir en dicho tema.
          br
          br
          | De este modo para que un funcionario logre una apropiada toma de decisiones deberá tener en cuenta unos pasos importantes:

        LineaTiempoC.color-acento-contenido(text-small).tarjeta.tarjeta--gris.py-4.px-5.mb-5
          .row(titulo="Planificar").py-5.px-4
            .col-4
              figure
                img(src="@/assets/curso/tema5-imagen2.svg")
            .col-8
              p.mb-0 En este paso se deben responder los primeros interrogantes como <strong>¿qué objetivos se deben establecer?</strong>, se toma en cuenta que un objetivo debe contemplar el qué, cómo, cuándo, para qué y dónde, ya que si dejamos escapar alguno de esos complementos se tendrá un objetivo abierto a otro tipo de interpretaciones, <strong>¿cómo se llegará a los objetivos?, ¿cuál es la acción que se continuará ejecutando a corto, medio y largo plazo para cumplir con el objetivo?</strong>; y así se inicia con el paso de la planificación.

          .row(titulo="Presupuesto")
            .col-4
              figure
                img(src="@/assets/curso/tema5-imagen3.svg")
            .col-8
              p.mb-0 En este paso inicia el costeo,  por medio de fichas se analiza los gastos y egresos que tendrá la compañía, allí surge el interrogante <strong>¿Cómo se va a distribuir los recursos de la empresa?</strong>, para así poder distribuir las previsiones de los ingresos y gastos de manera eficaz.
            
          .row(titulo="Organización")
            .col-4
              figure
                img(src="@/assets/curso/tema5-imagen4.svg")
            .col-8
              p.mb-0 La organización es fundamental para lograr una coordinación y coherencia en la toma de decisiones puesto que allí surge el interrogante <strong>¿Cuál será la forma de estructurar esos recursos empresariales? y ¿Cómo se garantizará la eficiencia de las actividades operativas de la empresa?</strong> Con el fin de lograr invertir y disponer los recursos, es importante que por medio de un registro se valide la actividad, puesto que si se desea eficiencia en las actividades operativas se requerirá un sistema documental que lo soporte.

            
          .row(titulo="Gestión del personal")
            .col-4
              figure
                img(src="@/assets/curso/tema5-imagen5.svg")
            .col-8
              p.mb-0 Sin una organización no se logrará controlar el personal, para cumplir con la decisión tomada dentro de la cadena de suministro, se debe hacer seguimiento al personal en:  <strong>cómo ejecutan sus labores, cómo se contrata, qué requisitos se les pide por funciones a ejecutar y cómo se coordinan las actividades que ejecutan con el fin de lograr una armonía organizacional.</strong>
            
          .row(titulo="Solución de problemas")
            .col-4
              figure
                img(src="@/assets/curso/tema5-imagen6.svg")
            .col-8
              p.mb-0 Es uno de los ítems más importantes en la toma de decisiones puesto que la capacidad para la resolución de conflictos garantizara una decisión apropiada, por eso es importante la manera en cómo se asumen los problemas en el diario vivir del ámbito laboral.

          .row(titulo="Directrices")
            .col-4
              figure
                img(src="@/assets/curso/tema5-imagen7.svg")
            .col-8
              p.mb-0 Una vez se han logrado los pasos anteriores a cabalidad se puede reconocer los objetivos claros y los seguimientos a los mismos para así establecer indicadores claros que medirán el cumplimiento de los objetivos estos deben ser medibles, ya sea de manera cuantitativa o cualitativa, por medio de una unidad de medida logre hacer seguimiento a las actividades para el cumplimiento de los objetivos de manera periódica.

          .row(titulo="Comunicación")
            .col-4
              figure
                img(src="@/assets/curso/tema5-imagen8.svg")
            .col-8
              p.mb-0 Antes de finalizar los pasos la empresa debe ser garante de poseer unos canales de comunicación y que estos estén debidamente validados, ya que si no se tiene algo que confirme lo dialogado se podrá dar por entendido que no sucedió, estamos en una generación donde existen más medios de los necesarios para lograr una comunicación asertiva y allí es donde todos deben estar aptos para comunicarse por todos los medios disponibles.


          .row(titulo="Motivación")
            .col-4
              figure
                img(src="@/assets/curso/tema5-imagen9.svg")
            .col-8
              p.mb-0 Cuando el empleado está debidamente motivado logrará cumplir los objetivos y metas establecidos por la empresa, debe buscar que el personal este estimulado con buenos salarios, incentivos por un buen rendimiento y así tenga un motivo para esforzarse y buscar los mismos que la gerencia.
            
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras'
export default {
  name: 'Tema5',
  components: {
    Muestras,
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
