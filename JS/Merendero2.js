       document.addEventListener("DOMContentLoaded", () =>{

        //  Mensaje cuando cargas la página
        console.log("Bienvenida a la página del merendero Solcitos de Ruca Antu");
        alert("¡Hola! Bienvenida/o al merendero Solcitos de Ruca Antu");


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
    //  Mensaje cuando cargas la página
    console.log("Bienvenida a la página del merendero Solcitos de Ruca Antu");
    alert("¡Hola! Bienvenida/o al merendero Solcitos de Ruca Antu");
    function mostrarHorarios() {
    console.log("Horarios: Lunes a viernes 8:00 a 22:00, fines de semana ocasional");
    alert("Horarios del merendero:\nLunes a viernes de 8:00 a 22:00\nFines de semana de vez en cuando");
    }
    function mostrarResponsables() {
    console.log("Responsables: Sra. Yanet y Sra. Paula");
    alert("Los responsables del merendero son:\nSra. Yanet y Sra. Paula");
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
