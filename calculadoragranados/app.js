const nombre = document.getElementById("nombre")
const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const nota3 = document.getElementById("nota3")
const notaFinal = document.getElementById("nota final")
const tareas = document.getElementById("tareas");
let listaNotas = []
if(localStorage.getItem('notas') !== null){
    listaNotas = JSON.parse(localStorage.getItem('notas'));
}

function Notas(){
    let txtNombre = nombre.value
    let txtNota1= nota1.value
    let txtNota2 = nota2.value;
    let txtNota3 = nota3.value;
    let txtNotaFinal = ((+txtNota1 + +txtNota2 + +txtNota3) / 3).toFixed(2); 

    const nuevaNota = document.createElement('tr');
    nuevaNota.innerHTML = `
        <td>${txtNombre}</td>
        <td>${txtNota1}</td>
        <td>${txtNota2}</td>
        <td>${txtNota3}</td>
        <td>${txtNotaFinal}</td>
    `;
    tareas.appendChild(nuevaNota);

    const notaGuardar = { nombre: txtNombre, nota1: txtNota1, nota2: txtNota2, nota3: txtNota3, notaFinal: txtNotaFinal };
    listaNotas.push(notaGuardar);
    localStorage.setItem('notas', JSON.stringify(listaNotas));
    
}

function cargarNotas(){
    
    for(let i=0; i<listaTareas.length;i++){
        const nuevanombre = document.createElement('tr');
        nuevanombre.innerHTML = "<td>" + listaNotas[i].tarea + "</td><td>" + listaNotas[i].nota1 + "</td>"
        tareas.appendChild(nuevanombre)
    }
}

