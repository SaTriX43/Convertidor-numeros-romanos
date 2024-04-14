const d = document;

export default function convertirNumerosRomanos (input,btn,div) {
    // definimos variables 
    const $input = d.querySelector(input),
            $btn = d.querySelector(btn),
            $div = d.querySelector(div);

    



    // funcion para convertir de numeros a numeros romanos 
    function err(n) {
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
    }


    // --------------------------------------------------- 

    function convertir(n) {
        
        

         switch (n) {
            case n === 1:
                result = "I"
                break;

                case n === 4:
                result = "IV"
                break;

                case n === 5:
                result = "V"
                break;

                case n === 9:
                result = "IX"
                break;

                case n === 10:
                result = "X"
                break;

                case n === 40:
                result = "XL"
                break;

                case n === 50:
                result = "L"
                break;

                case n === 90:
                result = "XC"
                break;

                case n === 100:
                result = "C"
                break;

                case n === 400:
                result = "CD"
                break;

                case n === 500:
                result = "D"
                break;

                case n === 900:
                result = "CM"
                break;

                case n === 1000:
                result = "M"
                break;
        
            default:
                break;
                
        }

    }

    // agregamos listener en d 
    d.addEventListener('click',e=> {
        if(e.target === $btn) {
            err($input.value)
        }
    })
} 