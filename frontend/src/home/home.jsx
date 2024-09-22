import '../css/home.css'

import imgCurrent from "../img/currency.jpg"

export const Home = () => {

  return(
    <>
    <h1 className='title'>¡Convierte Monedas de Manera Rápida y Segura!</h1>
    <div className="columna">
    <img src={imgCurrent} width="200" ></img>
    <div className="contenido">

<h3 className='title'>¿Necesitas convertir divisas de forma sencilla y efectiva?</h3> <span> Nuestro conversor de monedas te ofrece tasas actualizadas en tiempo real, para que puedas realizar transacciones con confianza. Ya sea que estés viajando, comprando en línea o realizando negocios internacionales, aquí encontrarás la solución perfecta.

   
<h3 className='title'>¿Por qué elegir nuestro servicio?</h3>
<ul>
<li>Actualizaciones en Tiempo Real: Obtén las tasas de cambio más recientes y precisas.</li>

<li>Interfaz Intuitiva: Disfruta de una experiencia de usuario fluida y sin complicaciones.</li>
<li>eguridad Garantizada: Tu información está protegida en todo momento.</li>
</ul>
<p className='parrafoo'>¡Empieza a Convertir Ahora!</p></span>
</div>
 

    </div>

    </>
  )
}