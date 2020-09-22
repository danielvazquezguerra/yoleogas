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

                <div className="Recomendable d-flex w-100 justify-content-around align-items-start p-5">

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

                <div className="InfoDown d-flex flex-column justify-content-center align-items-center p-5">

                    <h2>Pasos a seguir para compartir tu lectura por app</h2>

                    <div className="PasosWrapper w-100 d-flex flex-wrap justify-content-center">

                        <div className="PasosItem card d-flex justify-content-start align-items-center">

                            <h4>1</h4>

                            <img src="/img/yo-leo-gas.webp" alt="yo-leo-gas-icono" />

                            <p>
                                Descarga de forma gratuita la App <span>YoLeoGas</span> (disponible en Android e iOS)
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
                                Di cuál es tu número <span>CUPS</span>  (lo encontrarás en tu última factura o en el contador)
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
                            <span>Haz una foto a tu contador.</span> Verás que aparece un rectángulo naranja entre el que deberás colocar los dígitos. 

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

                    <div className="YaEsta">

                        <h3>¡Y ya estaría! No olvides revisar el histórico que encontrarás en la app. De este modo, tendrás una visión real de la evolución de tu consumo.</h3>

                    </div>

                    <div className="FormularioBox d-flex flex-wrap justify-content-around align-items-center p-5">


                        <div className="InfoForm">

                            <h4>¿Todavía no tienes contratado el gas con Gana Energía? </h4>
                            <p>
                                Te invitamos a entrar en <a href="https://ganaenergia.com/tarifas-gas">ganaenergía/gas</a> para conocer nuestras competitivas tarifas. <br/><br/>
                                
                                O si lo prefieres nos puedes dejar tus datos a continuación y seremos nosotros los que nos pongamos en contacto contigo.
                            </p>

                        </div>

                        <form className="Formulario d-flex flex-column w-50 align-items-start" id='homeserve' method='post' action='envio3.php'>
                            <div className="form-group">
                              <label for="formGroupExampleInput">Nombre</label>
                              <input type="text" className="form-control" name="nombre2" id="formGroupExampleInput" placeholder="Escribe tu nombre" />
                            </div>
                            <div className="form-group">
                              <label for="formGroupExampleInput">Apellido</label>
                              <input type="text" className="form-control" name="nombre2" id="formGroupExampleInput" placeholder="Escribe tu nombre" />
                            </div>
                            <div className="form-group">
                              <label for="formGroupExampleInput">Email</label>
                              <input type="text" className="form-control" name="nombre2" id="formGroupExampleInput" placeholder="Escribe tu nombre" />
                            </div>
                            <div className="form-group">
                              <label for="formGroupExampleInput2">Teléfono</label>
                              <input type="text" className="form-control" id="formGroupExampleInput2" name="telefono2" placeholder="Déjanos tu teléfono" />
                            </div>
                            <div className="proteccion-datos">
    
                                <div className="sepcheck">  
                                    <label>
                                       <input type="checkbox" value="1" name="inputAviso1" required="" />
                                            <p className="info-pd">He leído y acepto las condiciones previstas en el <a href="/aviso-legal" target="_blank" id="aviso">Aviso Legal</a></p> 
                                    </label>
    
                                    <label>
                                        <input type="checkbox" value="1" name="inputPolitica1" required="" />
                                        <p className="info-pd">Consiento el uso de mis datos según los términos establecidos en esta <a href="https://www.homeserve.es/politica" target="_blank" id="aviso">Política de Privacidad</a></p> 
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
