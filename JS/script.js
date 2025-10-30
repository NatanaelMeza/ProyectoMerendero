            document.addEventListener("DOMContentLoaded", () =>{
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

                const rebote=document.querySelectorAll('.animar-rebote');
                    rebote.forEach((img, i)=>{
                            setTimeout(() =>{
                                img.classList.add('visible-rebote');
                            }, i*220);
                        });
                    });
                