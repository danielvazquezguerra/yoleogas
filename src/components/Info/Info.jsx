import React from 'react'
import './Info.scss'



const Info = () => {

    return (

        <section className="InfoWrapper container d-flex justify-content-center align-items-center p-5">

            <div className="InfoUp d-flex flex-column w-100 justify-content-center align-items-center p-0 m-0">


                <div className="LecturaMovil d-flex justify-content-center align-items-center pb-5">

                    <img src="/img/medidor-gas-icono-azul.png" alt="medidor-gas-icono"/>

                    <h2>
                        Desde el móvil puedes compartir tu lectura del contador de forma rápida y, sobre todo, muy sencilla. <br/>
                    
                        Como sabes, lo más recomendable es hacerlo cada dos meses.
                        
                    </h2>

                </div>

                <div className="Recomendable d-flex w-100 justify-content-center align-items-center p-5">

                    <h3>¿Por qué es recomendable compartir tu lectura del contador?</h3>

                    <p>
                        Porque enviando tu lectura del contador conocerás de primera mano una información clave para evitar estimaciones y, de este modo, pagar exclusivamente por lo que consumes. 

                        Esta revisión en muchas casas se realiza por medio de un profesional que acude a la vivienda de forma bimensual, pero la opción que consideramos más operativa es que la lleves a cabo tú mismo a través de una cómoda aplicación de móvil que te vamos a explicar a continuación.
                    </p>

                </div>

                <div className="InfoDown d-flex flex-column justify-content-center align-items-center p-5">

                    <h2>Pasos a seguir para compartir tu lectura por app</h2>

                    <div className="PasosWrapper w-100 d-flex flex-wrap justify-content-center">

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <h4>1</h4>

                            <img src="/img/yo-leo-gas.webp" alt="yo-leo-gas-icono" />

                            <p>
                                Descarga de forma gratuita la App YoLeoGas (disponible en Android e iOS)
                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <h4>2</h4>

                            <img src="/img/nombra-contador.png" alt="yo-leo-gas-icono" />

                            <p>
                                Pon nombre a tu contador o a tus contadores. Ejemplo: Piso de la playa.
                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <h4>3</h4>

                            <img src="/img/numero-cups.png" alt="yo-leo-gas-icono" />

                            <p>
                                Di cuál es tu número CUPS (lo encontrarás en tu última factura o en el contador)
                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <h4>4</h4>

                            <img src="/img/recordatorio.png" alt="yo-leo-gas-icono" />

                            <p>
                                Elige a qué hora quieres que te hagan los recordatorios.
                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <h4>5</h4>

                            <img src="/img/tomar-foto-contador.png" alt="yo-leo-gas-icono" />

                            <p>
                            Haz una foto a tu contador. Verás que aparece un rectángulo naranja entre el que deberás colocar los dígitos. 

                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <h4>6</h4>

                            <img src="/img/enviar-foto-ok.png" alt="yo-leo-gas-icono" />

                            <p>
                                Envía la foto si la app te notifica que esta es correcta.
                            </p>

                        </div>

                    </div>

                </div>



            </div>
            

            
        </section>
    )
}

export default Info;
