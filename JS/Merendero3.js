  document.addEventListener("DOMContentLoaded", () =>{

            //  Mensaje cuando cargas la página
            console.log("Bienvenida a la página del merendero Los Pequeños Gigantes");
            alert("¡Hola! Bienvenida/o al merendero Los Pequeños Gigantes");
    
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
            console.log("Horarios: Lunes, martes y jueves: comedor de 20:00 a 22:00 hs");
            alert("Horarios del merendero:\nLunes, martes y jueves: comedor de 20:00 a 22:00 hs");
            }
    function mostrarResponsables() {
    console.log("Responsables: Milagros y su mamá Karina");
    alert("Los responsables del merendero son:\nMilagros y su mamá Karina");
    }

    function mostrarNecesitan() {
    console.log("Necesitan: Alimentos y Viandas, Elementos de higiene personal, Medicamentos, Elementos de cocina, Tappers para llevar la comida");
    alert("El merendero necesita:\n- Alimentos y Viandas\n- Elementos de higiene personal\n- Medicamentos\n- Elementos de cocina\n-Tappers para llevar la comida ");
    }
    function mostrarContacto() {
    console.log("Contacto por WhatsApp");
    alert("¡Gracias por querer contactar al merendero!");
    }
    document.querySelector(".A").onclick = mostrarHorarios;
    document.querySelector(".B").onclick = mostrarResponsables;
    document.querySelector(".C").onclick = mostrarNecesitan;
    document.querySelector(".D button").onclick = mostrarContacto;
    