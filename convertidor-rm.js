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

    function numerosRomanos(n) {
        // definimos referencias 
        let romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],  //Numero romanos
            arabicos = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], // los arabicos
            result = ''; // variable para guardar

            // para i = 0 cuando i sea mayor a la longitud de arabicos sumale 1 a i 
            for(let i=0 ; i < arabicos.length ; i++) {
                // mientras que (n) sea mayor o igual que arabicos entonces  
                while(n >= arabicos[i]) {
                    // result va ser + igual al indice de romanos 
                    result += romanos[i];
                    // n se quitamos el indice de arabicos 
                    n -= arabicos[i]; 
                }
            }

            // aniadimos y quitamos clases 
            $div.classList.add('correct');
            $div.classList.remove('error');
            // creamos variable mostrarResult que sea igaul a $div en su propiedad innerHTML le aniadimos result 
            let mostrarResult = $div.innerHTML = `<p>${result}</p>`

            // retornamos mostrarResult 
            return mostrarResult
     }


    // --------------------------------------------------- 

    // funcion para convertir a numero romanos
    function convertir(n) {
        // llamamos a la funcion error 
        // si errRomano da true entonces 
        if(errRomano(n)) {
            // anidele la clase "error" 
            $div.classList.add('error')
            return false;
        }

        // llamamos a funcion numerosRomanos 
        numerosRomanos(n)
    }

    // agregamos listener en d 
    d.addEventListener('click',e=> {
        if(e.target === $btn) {
            // llamamos a la funcion convertir 
            convertir(parseInt($input.value)) // lo convierte a un numero
        }
    })
} 