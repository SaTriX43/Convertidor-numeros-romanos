const d = document;

export default function convertirNumerosRomanos (input,btn,div) {
    // definimos variables 
    const $input = d.querySelector(input), 
            $btn = d.querySelector(btn),
            $div = d.querySelector(div);

    



    // funcion para detectar errores 
    function errRomano(n) {
        let numero = n;

        // si sale mal 
        // ---------------------------------------------------------- 

        // si el numero es igual a cadena vacia entonces 
        if(numero === "") {
            // en el $div en su propiedad innerHTML agrega 
            $div.innerHTML = `
            <p>Please enter a valid number.</p>
            `
            return true
        }


        // si el numero es un decimal y diferente a 0 entonces 
        if(numero % 1 !== 0) {
            // inserte en $div en su propiedad innerHtml 
            $div.innerHTML = `
            <p>Please enter a valid number.</p>
            `
            return true
        }
        
        // si el numero es igual o menor a 0 entonces 
        if(numero <= 0) {
            // inserte al $div en su propiedad innerHTML 
            $div.innerHTML = `
            <p>Please enter a number greater than or equal to 1.</p>
            `
            return true
        }

        // si el numero es igual o menor a 0 entonces 
        if(numero > 3999) {
            // inserte al $div en su propiedad innerHTML 
            $div.innerHTML = `
            <p>Please enter a number less than or equal to 3999.</p>
            `

            return true
        }
        // ------------------------------------------------------------ 
        // si no hay errores
        return false
    }


    // --------------------------------------------------- 

    // funcion para convertir a numero romanos
    function convertir(n) {
        // llamamos a la funcion error 

        // si errRomano da true entonces 
        if(errRomano(n)) {
            // anidele la clase "error" 
            $div.classList.add('error')
            return;
        }
        
        // declaramos variable result 
        let result;

        // creamos funcion switch 
         switch (n) {
            case 1:
                result = "I"
                break;

                case 4:
                result = "IV"
                break;

                case 5:
                result = "V"
                break;

                case 9:
                result = "IX"
                break;

                case 10:
                result = "X"
                break;

                case 40:
                result = "XL"
                break;

                case 50:
                result = "L"
                break;

                case 90:
                result = "XC"
                break;

                case 100:
                result = "C"
                break;

                case 400:
                result = "CD"
                break;

                case 500:
                result = "D"
                break;

                case 900:
                result = "CM"
                break;

                case 1000:
                result = "M"
                break;
        
                default:
                break;
                
            
        }
        // insertamos contenido al $div 
        $div.innerHTML = `<p>${result}</p>`

        // y aniadimos la clase correct y eliminamos la error 
        $div.classList.add('correct');
        $div.classList.remove('error')
    }

    // agregamos listener en d 
    d.addEventListener('click',e=> {
        if(e.target === $btn) {

            // llamamos a la funcion convertir 
            convertir(parseInt($input.value)) // lo convierte a un numero
        }
    })
} 