Bienvenido a la prueba técnica de Drinks and Co para React Natives developers.

Hemos dividido la prueba técnica en dos áreas. Una primera parte más teórica, y una segunda parte práctica donde te
pediremos que programes una pequeña webapp.

Por último, te agradecermos cualquier feedback sobre esta prueba.

¡Buena suerte!

# Parte 1

A continuación te planteamos

- **¿En CSS existen varias unidades de medida (px, em, rem, vh, vw…). ¿Podrías explicarnos en qué casos utilizarias cada una?**

vh y vw tienen en cuenta la altura/anchura del viewport actual, px es una unidad fija (pixel) y em rem toman como referencia el tamaño de la fuente del elemento,
en el caso del em es del elemento padre (encima) y en el caso de rem es el elemento root.

La unidad px se suele utilitzar para aquellos elementos que quieras con seguridad que tengan unas dimensiones fijas.
vh y vw se suelen utilizar en diseños responsive para escalar el tamaño de cosas que normalmente no se relacionan con el font size, y em y rem se utilitzan por esto mismo pero más orientado a escalar las fuentes
de manera responsive.

- **Teniendo en cuenta el siguiente código, ¿de qué color será el texto `I am awesome`? ¿Por qué?:**

En el css los tags tienen un valor que se va acumulando (especifidad) , el elemento tendrá el estilo que más valor tenga:
1 para tags de elemento html...
10 clases, atributos...
100 ids
1000 aprox inline styling (se aplica directamente al elemento)

ul 1 clase shopping-list 10 li 1 clase favorite 10 span 1 = 23
ul 1 id awesomeProduct 100 li 1 = 102

`I am awesome` será de color rojo.

```html
<style>
  ul.shopping-list li.favorite span {
    color: blue;
  }

  ul#awesomeProduct li {
    color: red;
  }
</style>
```

```html
<ul id="awesomeProduct" class="shopping-list">
  <li><span>Milk</span></li>
  <li id="buyThis" class="favorite">
    <span class="highlight">I am awesome</span>
  </li>
</ul>
```

- **En Javascript puedes testear la igualdad mediante doble igual o triple igual (`==` `===`). ¿Sabrías decirnos diferencias y ventajas de cada uno?**

Stricly equal (===) se utilitza para hacer una comparativa tanto del valor como del tipo del elemento mientras que la comparativa por == solo tiene en cuenta el valor del elemento, ventajas sobretodo
a la hora de evitar errores de tipado, se recomienda por no decir casi siempre utilizar ===.

- **Nos gustaría que el siguiente código mostrara `hey Maria`, pero nos devuelve `hey Raynold`. ¿Cómo lo solucionarias?**

El código ya devuelve hey Maria, no hay que tocar nada, la desestructuración del objeto que recibe como primer parámetro la función ya saca el nombre del objeto, en este caso 'Maria'.

```js
function getName({name}) {
  if (name === 'Maria') {
    return 'hey Maria';
  } else {
    return 'hey Raynold';
  }
}
getName({name: 'Maria'});
```

# Parte 2

En Drinks and Co estamos rediseñando nuestro ecommerce y para evaluar tus conocimientos, queremos que nos hagas una propuesta de nuestro checkout utilizando _React Native_. Te adjuntamos un wireframe que nos ha creado el equipo de UX/UI, así como el endpoint con los productos seleccionados del checkout.

```
https://demo9415114.mockable.io/drinksandco-checkout-technical-test
```

# Wireframe

![](https://live.staticflickr.com/7402/16376980461_fbbd43ec65_b.jpg)

## Valoraremos positivamente:

- El uso de buenas prácticas y que utilices el potencial de ES6.

Intento siempre hacer un código limpio y principalmente uso ES6 y ES7 (async/await).

- Que incluyas tests de tus componentes.

Los componentes en la carpeta components tienen su respectivo archivo de tests unitarios. Para ejecutar los tests hay que simplemente hacer npm test.

- Si utilizas librerias, recuerda utilizar algún gestor de paquetes.

He utilizado npm aunque yarn es una alternativa.

- Así mismo, si utilizas librerias, explicanos por qué las has escogido.

  "@react-native-community/masked-view": "^0.1.10",
  "@react-navigation/native": "^5.5.0",
  "@react-navigation/stack": "^5.4.1",
  "axios": "^0.19.2",
  "formik": "^2.1.4",
  "prop-types": "^15.7.2",
  "react": "16.11.0",
  "react-native": "0.62.2",
  "react-native-extended-stylesheet": "^0.12.0",
  "react-native-gesture-handler": "^1.6.1",
  "react-native-reanimated": "^1.9.0",
  "react-native-safe-area-context": "^3.0.2",
  "react-native-screens": "^2.8.0",
  "react-redux": "^7.2.0",
  "redux": "^4.0.5",
  "yup": "^0.29.1"

Para la navegación he utilitzado react-navigation, tiene una comunidad muy buena (el creador hace cursos y he hecho alguno suyo), y en la última actualización a react navigation 5+ han mejorado mucho el boilerplate para que se asemeje el máximo posible a react-router (navegación web).

Para hacer http requests he utilitzado axios, una alternativa sería fetch, pero estoy acostumbrado a axios porque también se puede utilizar para hacer llamadas en el backend.

Formik + Yup, por un lado formik no es otra cosa que un gestor de lógica de formularios, pero está muy ordenado, la documentación es clara y simplifica el trabajo a la hora de hacer formularios. Para validar los formularios he cogido Yup por lo fácil que es de combinar con Formik.

Prop-types, para tipar mínimamente los componentes.

React-native-extended-stylesheet, es una ampliación de la StyleSheet clásica de React Native, con la versión extended puedes realizar operaciones dentro del propio css (operaciones básicas que podrían asemejarse a saas) así como definir variables de estilo globales que va muy bien a la hora de establecer los colores base de la app, fuentes...

Redux: Para gestionar el estado de la aplicación, no era estrictamente necesario para solo lo que se pide en el wireframe, pero es en vista a escalar el código. Tiene boilerplate pero una vez tienes la store montada escala sin problemas.

- Recuerda, se trata de una prueba técnica de front-end, no de UX/UI Designer. Evaluaremos cómo utilizas CSS, no el look and feel final.
