            document.addEventListener("DOMContentLoaded", () =>{

                //  Mensaje cuando cargas la página
                console.log("Bienvenida a la página del merendero Luz de Esperanza");
                alert("¡Hola! Bienvenida/o al merendero Luz de Esperanza");

                const elementos=document.querySelectorAll('.animar-secuencia');

                function mostrarSecuencia(){
                    const alturaVentana=window.innerHeight;

                    elementos.forEach((el, index)=>{
                        const distancia=el.getBoundingClientRect().top;
                        if(distancia<alturaVentana-150&&!el.classList.contains('visible')){
                            setTimeout(() =>{
                                el.classList.add('visible');
                            }, index*220);
                        }
                    });
                }
                window.addEventListener('scroll', mostrarSecuencia);
                mostrarSecuencia();
            });
        function mostrarHorarios() {
        console.log("Horarios: Lunes, Miércoles y Viernes de 9:30hs a 15:30hs aprox");
        alert("Horarios del merendero:\n Lunes, Miércoles y Viernes de 9:30hs a 15:30hs aprox");
        }
        function mostrarResponsables() {
        console.log("Responsables: Sra. Erika y Sra. Silvia Barrientos");
        alert("Los responsables del merendero son:\nSra. Erika y Sra. Silvia Barrientos");
        }
        function mostrarNecesitan() {
        console.log("Necesitan: ropa, calzado, muebles, útiles escolares, cocina, limpieza");
        alert("El merendero necesita:\n- Ropa\n- Calzado\n- Muebles\n- Útiles escolares\n- Elementos de cocina\n- Artículos de limpieza");
        }
        function mostrarContacto() {
        console.log("Contacto por WhatsApp");
        alert("¡Gracias por querer contactar al merendero!");
        }

        document.querySelector(".A").onclick = mostrarHorarios;
        document.querySelector(".B").onclick = mostrarResponsables;
        document.querySelector(".C").onclick = mostrarNecesitan;
        document.querySelector(".D button").onclick = mostrarContacto;
 