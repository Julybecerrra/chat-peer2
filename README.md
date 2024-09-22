# Coversor de Monedas

Este Proyeto es una aplicacio web que permite a los usuarioshaecr conversiones entre diferentes monedas utilizando la API externa llamada Currencylayer.

## caracteristicas
- Conversion de monedas en tiempo real
- Soporte para multiples monedas
- Interfaz de usuario simple y atractiva
- Inicio y creacion de cuenta para accder a tus conversiones.

## Tecnologias

- **Frontend**: React
- **Backen**: Node.js, Express
- **Bases de datos**: Mysql
- **Api Externa**: CurrencyLayer
- **Estilos**: CSS

## Casos de Uso
Como usuario, quiero convertir una cantidad de una moneda a otra, para poder saber cuánto vale una moneda en términos de otra.

**Criterios de Aceptación**:

- El usuario debe ingresar la cantidad y seleccionar la moneda de origen y la moneda de destino.

- El sistema debe calcular el valor convertido y mostrarlo al usuario.

Como usuario, quiero ver una lista de monedas disponibles de conversión, para elegir las monedas que deseo utilizar.

**Criterios de Aceptación:**

- El sistema debe proporcionar una lista de monedas disponibles.

- La lista debe contener las monedas mas utilizadas en conversion con sus respectivos símbolos.


Como usuario, quiero que el sistema actualice las tasas de cambio de manera regular, para asegurarme de que los valores de conversión sean precisos.

**Criterios de Aceptación**:

- El sistema debe obtener y actualizar las tasas de cambio desde una fuente confiable periódicamente.
- El usuario debe ser notificado si hay algún problema con la actualización de tasas.


Como usuario, quiero poder ver el historial de conversiones realizadas, para revisar conversiones pasadas.

**Criterios de Aceptación**:

- El sistema debe almacenar el historial de conversiones realizadas por el usuario.
- El usuario debe poder ver una lista de conversiones anteriores y detalles como cantidad, y monedas involucradas.

Como usuario, quiero poder ver.

**Criterios de Aceptación**:

- El sistema debe almacenar el historial de conversiones realizadas por el usuario.
- El usuario debe poder ver una lista de conversiones anteriores y detalles como cantidad, y monedas involucradas.

## Diagramas

![casos de uso, diagrama de clase](./frontend/src/img/diagrama.png)


## Visitar Sitio Web