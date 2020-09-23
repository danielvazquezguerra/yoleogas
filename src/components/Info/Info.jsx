import React from 'react'
import './Info.scss'



const Info = () => {

    return (

        <section className="InfoWrapper container justify-content-center align-items-center">

            <div className="InfoUp d-flex flex-column justify-content-center align-items-center p-0 m-0">

                <div className="LecturaMovil">

                    <div className="ImgBox">

                        <img src="/img/medidor-gas-icono-azul.png" alt="medidor-gas-icono"/>

                    </div>

                    <p>
                        Desde el móvil puedes compartir tu lectura del contador de forma rápida y, sobre todo, muy sencilla.
                    
                        Como sabes, lo más recomendable es hacerlo cada dos meses.
                        
                    </p>

                </div>

                <div className="Recomendable d-flex flex-wrap w-100 justify-content-around align-items-start">

                    <div>

                        <h3>¿Por qué es recomendable compartir tu lectura del contador?</h3>

                        <p>
                            Porque enviando tu lectura del contador conocerás de primera mano una información clave para evitar estimaciones y, de este modo, pagar exclusivamente por lo que consumes.<br/>
                        </p>

                    </div>


                    <div>
                        <h3>¿Puede realizar uno mismo la lectura?</h3>
                        <p>Esta revisión en muchas casas se realiza por medio de un profesional que acude a la vivienda de forma bimensual, pero la opción que consideramos más operativa es que la lleves a cabo tú mismo a través de una cómoda aplicación de móvil que te vamos a explicar a continuación.</p>

                    </div>


                </div>

                <div className="InfoDown d-flex flex-column justify-content-center align-items-center">

                    <h2>Pasos a seguir para compartir tu lectura por app</h2>

                    <div className="PasosWrapper w-100 d-flex flex-wrap justify-content-center">

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <p className="ItemNumber">1</p>

                            <img src="/img/yo-leo-gas-icono.png" alt="yo-leo-gas-icono" />

                            <p>
                                Descarga de forma gratuita la App <span>YoLeoGas</span> (disponible en Android e iOS)
                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <p className="ItemNumber">2</p>

                            <img src="/img/nombra-contador.png" alt="yo-leo-gas-icono" />

                            <p>
                                Pon nombre a tu contador o a tus contadores. Ejemplo: Piso de la playa.
                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <p className="ItemNumber">3</p>

                            <img src="/img/numero-cups.png" alt="yo-leo-gas-icono" />

                            <p>
                                Di cuál es tu número <span>CUPS</span>  (lo encontrarás en tu última factura o en el contador)
                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <p className="ItemNumber">4</p>

                            <img src="/img/recordatorio.png" alt="yo-leo-gas-icono" />

                            <p>
                                Elige a qué hora quieres que te hagan los recordatorios.
                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <p className="ItemNumber">5</p>

                            <img src="/img/tomar-foto-contador.png" alt="yo-leo-gas-icono" />

                            <p>
                            <span>Haz una foto a tu contador.</span> Verás que aparece un rectángulo naranja entre el que deberás colocar los dígitos. 

                            </p>

                        </div>

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <p className="ItemNumber">6</p>

                            <img src="/img/enviar-foto-ok.png" alt="yo-leo-gas-icono" />

                            <p>
                                Envía la foto si la app te notifica que esta es correcta.
                            </p>

                        </div>

                    </div>

                    <div className="YaEsta d-flex justify-content-center">

                        <h3>¡Y ya estaría! No olvides revisar el histórico que encontrarás en la app. De este modo, tendrás una visión real de la evolución de tu consumo.</h3>

                    </div>

                    <div className="FormularioBox d-flex flex-wrap justify-content-around align-items-center">


                        <div className="InfoForm">

                            <h3>¿Todavía no tienes contratado el gas con Gana Energía? </h3>
                            <p>
                                Te invitamos a entrar en <a href="https://ganaenergia.com/tarifas-gas">nuestra página de gas</a> para conocer nuestras competitivas tarifas. <br/><br/>
                                
                                O si lo prefieres nos puedes dejar tus datos a continuación y seremos nosotros los que nos pongamos en contacto contigo.
                            </p>

                        </div>

                        <form className="Formulario d-flex flex-column align-items-start" id='homeserve' method='post' action='envio3.php'>
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">Nombre</label>
                              <input type="text" className="form-control" name="nombre" id="formGroupExampleInput" placeholder="Escribe tu nombre" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">Apellido</label>
                              <input type="text" className="form-control" name="apellido" id="formGroupExampleInput" placeholder="Escribe tu nombre" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">Email</label>
                              <input type="text" className="form-control" name="email" id="formGroupExampleInput" placeholder="Escribe tu nombre" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput2">Teléfono</label>
                              <input type="text" className="form-control" id="formGroupExampleInput2" name="telefono" placeholder="Déjanos tu teléfono" />
                            </div>
                            <div className="proteccion-datos">
    
                                <div className="sepcheck">  
                                    <label>
                                       <input type="checkbox" value="1" name="inputAviso1" required="" />
                                            <p className="info-pd">He leído y acepto las condiciones previstas en el <a href="/aviso-legal" target="blank" id="aviso">Aviso Legal</a></p> 
                                    </label>
    
                                    <label>
                                        <input type="checkbox" value="1" name="inputPolitica1" required="" />
                                        <p className="info-pd">Consiento el uso de mis datos según los términos establecidos en esta <a href="https://www.homeserve.es/politica" target="blank" id="aviso">Política de Privacidad</a></p> 
                                    </label>
                                </div>
    
                                
                            </div>
                            <button>ENVIAR</button>
                        </form>  

                    </div>

                </div>



            </div>
            

            
        </section>
    )
}

export default Info;
