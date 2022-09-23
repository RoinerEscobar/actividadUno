const Sumar=()=>{

    const numeroUno= parseInt( document.getElementById("numeroUno").value)
    const numeroDos= parseInt( document.getElementById("numeroDos").value)

    let resultadoSum = numeroUno + numeroDos

    resultado(resultadoSum)
    
    
}

const Restar=()=>{

    const numeroUno= parseInt( document.getElementById("numeroUno").value)
    const numeroDos= parseInt( document.getElementById("numeroDos").value)

    let resultadoSum = numeroUno - numeroDos

    resultado(resultadoSum)
    
    
}

const Multiplicar=()=>{

    const numeroUno= parseInt( document.getElementById("numeroUno").value)
    const numeroDos= parseInt( document.getElementById("numeroDos").value)

    let resultadoSum = numeroUno * numeroDos

    resultado(resultadoSum)
    
    
}

const Dividir=()=>{

    const numeroUno= parseInt( document.getElementById("numeroUno").value)
    const numeroDos= parseInt( document.getElementById("numeroDos").value)

    let resultadoSum = numeroUno / numeroDos

    resultado(resultadoSum)
    
    
}

const Limpiar=()=>{
    document.getElementById("numeroUno").value = null
    document.getElementById("numeroDos").value = null
    let espacio = " "
    resultado(espacio)
}

const resultado=(resultados)=>{
    let resultado=document.getElementById("resultado")
    resultado.innerHTML = resultados
}