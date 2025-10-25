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
