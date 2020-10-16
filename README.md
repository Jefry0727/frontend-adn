# Proyecto Back-End pago-arrendamiento

Este proyecto esta bajo las tecnologías de Java 11 con Spring boot y con una Arquitectura Hexagonal

## Iniciar el proyecto

Este proyecto en el momento se deberá impotar a un IDE, preferiblemente en Eclipse, que será nuestro ambiente de pruebas y en este encontraremos la capa de infraestructura, en el src del main en el package co.com.ceiba, tendremos el archivo Application.java, el cuál podemos corren en la opción de Java Application que nos brinda este IDE

## Para ejecutar las pruebas unitarias y de integración

Como se mensiona anteriormente, se deberá tener el proyecto en el IDE y nos dirigimos a la capa dominio y allí ejecutamos JUnit Test, el cual se encargará de ejecutar los test, no es necesario eliminar los datos de la tabla pagos de la base de datos MySQL, dado que se cargaran en una base de datos en memoria, especificamente en H2


```

```
# Proyecto Front-End PagoArrendamientoFront

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7 y con la arquitectura propuesta por [Angular](https://angular.io/guide/styleguide#overall-structural-guidelines )

## Iniciar el proyecto

En una consola y sobre la raíz de este proyecto ejecutar el comando `ng serve`. Para abrir la aplicación web usar el siguiente link: `http://localhost:4200/`. 

## Para ejecutar las pruebas end-to-end en Protractor

Al igual que en el punto anterior, se debe abrir una consola en la raíz de este proyecto y ejecutamos el comando  `ng e2e` [Protractor](http://www.protractortest.org/).

```
NOTA: Para realizar las pruebas automatizadas, es necesario tener la tabla pagos de la base de datos MySQL vacía
```

