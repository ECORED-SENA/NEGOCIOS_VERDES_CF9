<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Contexto Colombiano de la cadena de suministro

    p.mb-5 Se conocerá sobre la cadena de suministro a continuación:

    figure.mb-5(data-aos="fade-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center(data-aos="fade-right" data-aos-duration="1200")
      .col-lg-8.col-12
        .box.color-primario.px-5.py-4
          p.mb-0 Hoy en día Colombia cuenta con Tratados de Libre Comercio - TLC con diferentes países del mundo.

    Separador(data-aos="fade-in" data-aos-duration="1500")

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 1.1  Tratados de libre comercio en Colombia - TLC

    .row.justify-content-center.mb-5(data-aos="fade-in" data-aos-duration="1500")
      .col-auto
        p.mb-0 Colombia tiene diferentes tratados y acuerdos con otros países, se aprenderá sobre ellos: 

    ImagenInfografica.color-secundario.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1-imagen1.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      .tarjeta.color-acento-botones.p-3(x="24.5%" y="48%")
        .h5.mb-2 Colombia - México.
        p Conocido como uno de los primeros acuerdos que firmó Colombia el 01 de agosto de 2022 con un área comercial llamada G-2 que abordaron los siguientes temas: Programa de desgravación, sector automotor, acceso a mercados, sector agropecuario y medidas fitosanitarias y zoosanitarias, reglas de origen, salvaguardias, prácticas desleales de comercio, comercio de servicios, servicios financieros y normas técnicas entre otros. (Casas, 2013).

      .tarjeta.color-acento-botones.p-3(x="28%" y="54%")
        .h5.mb-2 Colombia - El Salvador, Guatemala y Honduras.
        p Pertenecientes al triangulo del norte de centro América iniciaron sus negociaciones entre noviembre de 2009 a marzo de 2010, para mejorar las condiciones de acceso a sus respectivos mercados, aprovechando la manera en la que podían complementarse sus economías y así lograr mayores niveles de desarrollo para la población.

      .tarjeta.color-acento-botones.p-3(x="31%" y="51.5%")
        .h5.mb-2 Acuerdo Colombia-Caricom.
        p Hacen parte de este acuerdo 12 países como signatarios del acuerdo de alcance parcial, implementando actividades de cooperación económica, facilitadores de inversión al interior del país para competir de manera adecuada en el comercio internacional.

      .tarjeta.color-acento-botones.p-3(x="30%" y="64%")
        .h5.mb-2 Acuerdo Colombia- Comunidad Andina.
        p Un acuerdo de Cartagena que comenzó en 1969 y consolido a la comunidad Andina como una organización subregional con personería jurídica internacional, que aprovecha para aprender de otros países en cuanto a logística, transporte y comercio para irse posicionando competitivamente.

      .tarjeta.color-acento-botones.p-3(x="38%" y="66%")
        .h5.mb-2 Acuerdo Mercosur - CAN.
        p Es un acuerdo que ofrece un mercado potencial que permite demanda de productos importados, y exportaciones que forjan un desarrollo en la producción nacional que forma un área de libre comercio de bienes agrícolas e industriales.

      .tarjeta.color-acento-botones.p-3(x="31%" y="79%")
        .h5.mb-2 Acuerdo de libre comercio Colombia-Chile.
        p Este acuerdo fue suscrito en noviembre de 2006 con Chile, un país con las economías más fuertes de sur América por sus grandes inversiones en TLC con Estados Unidos y que ahora permite exportar sus productos y aprovechar sus recursos.

      .tarjeta.color-acento-botones.p-3(x="20%" y="26%")
        .h5.mb-2 Tratado de libre comercio Colombia – Canadá.
        p Con Canadá se busca una integración más amplia en el comercio tras 5 negociaciones que buscan diversificar los mercados, abastecimiento de materias primas, bienes e insumos para mejorar las ofertas a exportar.
      
      .tarjeta.color-acento-botones.p-3(x="29.5%" y="49%")
        .h5.mb-2 Acuerdo Colombia-Cuba.
        p Está descrito en el acuerdo de complementación económica N 49 del año 2000 para otorgar preferencias respecto a los gravámenes y demás restricciones aplicadas en la importación de productos, creciendo en el contexto político, social y económico.

      .tarjeta.color-acento-botones.p-3(x="48%" y="33%")
        .h5.mb-2 Acuerdo de libre comercio Colombia-Estados AELC.
        p Este tratado se suscribió en el 2008 para ratificar el intercambio comercial, la expansión, diversificación de inversiones y fortalecimiento de lazos para la integración de los países de Europa.

      .tarjeta.color-acento-botones.p-3(x="25%" y="38%")
        .h5.mb-2 Tratado de libre comercio Colombia- Estados Unidos.
        p Un acuerdo de promoción comercial suscrito en Washington en el 2006 como el acuerdo de promoción comercial entre la República de Colombia y los Estados Unidos de América donde negociaron el acceso a los mercados industriales y agrícolas, propiedad intelectual, el régimen de inversión, las compras del estado, controversias, competencias, comercio electrónico, servicios ambientales y laborales.
      
      .tarjeta.color-acento-botones.p-3(x="32.5%" y="57%")
        .h5.mb-2 Acuerdo de alcance parcial con Venezuela.
        p Fue suscrito en el 2011 para aplicarse provisionalmente en el 2012 y tratar el acceso preferencial, reglas de origen, requisitos específicos de origen, el petróleo, tejidos y confecciones, sector siderúrgico y automotor, reglas técnicas, medidas sanitarias y fitosanitarias, defensa comercial y mecanismos de solución de controversias. Es un acuerdo importante puesto que Venezuela depende de los productos agrícolas de Colombia incrementando las exportaciones, beneficiando no solo al país volviéndolo más competitivo y potencial internacionalmente si no a su vez mejorara las condiciones al interior generando más competencia y empleo. Para mejorar y tomar provecho de la situación las empresas deben mejorar su logística de seguridad y transporte.

    Separador(data-aos="fade-in" data-aos-duration="1500")

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 1.2  Convenios de comercialización en Colombia

    p.mb-5 En búsqueda de garantizar las estrategias de implementación de instrumentos de gestión, promoción y organización del:

    .row.justify-content-center.mb-5.align-items-center
      .col-10
        .box.color-primario.border-radius-normal.py-4(style="display: flex;")
          .image-exito(style="width: 100%; margin-left: -100px")
            figure
              img(src="@/assets/curso/tema1-imagen2.svg")
          p.mb-0.px-5 Plan Nacional de Negocios Verdes en Colombia se crearon 4 convenios de comercialización con grandes cadenas como <strong>Jumbo, Éxito, Carulla y Cafam</strong> quienes promueven e impulsan empresas verdes que tomaban en cuenta principios de negocios acompañadas por el Sistema Nacional Ambiental SINA obteniendo resultados positivos por incremento de ventas del 28% a 33% y productores codificados con 131% en el 2007 (Ministerio de Ambiente, 2014).
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
