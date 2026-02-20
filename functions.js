var salidaFinal = "";

const apellidosMexico = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "Guzmán", "Franco", "Silva", "Luna",
    "Muñoz", "Cabrera", "Delgado", "Contreras", "León",
    "Ríos", "Estrada", "Bautista", "Meza", "Gallegos",
    "Miranda", "Carrillo", "Valencia", "Nava", "Lara",
    "Pacheco", "Soto", "Cervantes", "Robledo", "Esquivel",
    "Salinas", "Maldonado", "Marín", "Calderón", "Lugo",
    "Rosas", "Padilla", "Fuentes", "Espinoza", "Rangel",
    "Acosta", "Sandoval", "Villegas", "Valdés", "Alfaro",
    "Camacho", "Guerrero", "Lozano", "Guevara", "Galindo",
    "Beltrán", "Orozco", "Pineda", "Navarro", "Parra",
    "Villalobos", "Duarte", "Serrano", "Ávila", "Ibarra",
    "Téllez", "Rocha", "Trejo", "Esparza", "Zamora"
];

const apellidosBrasil = [
    "NULL",
    "Silva", "Santos", "Oliveira", "Souza", "Lima",
    "Pereira", "Costa", "Rodrigues", "Almeida", "Nascimento",
    "Carvalho", "Gomes", "Martins", "Rocha", "Dias",
    "Barbosa", "Ribeiro", "Teixeira", "Fernandes", "Cardoso",
    "Correia", "Melo", "Batista", "Monteiro", "Araújo",
    "Campos", "Freitas", "Moreira", "Machado", "Moura",
    "Vieira", "Azevedo", "Coelho", "Barros", "Cunha",
    "Rezende", "Farias", "Peixoto", "Braga", "Tavares",
    "Borges", "Nogueira", "Fonseca", "Andrade", "Xavier",
    "Neves", "Macedo", "Pinto", "Dantas", "Queiroz",
    "Lopes", "Santana", "Leite", "Ramos", "Sales",
    "Duarte", "Bezerra", "Ferreira", "Paiva", "Prado",
    "Gonçalves", "Cavalcante", "Brandão", "Mendes", "Figueiredo",
    "Porto", "Siqueira", "Magalhães", "Viana", "Bittencourt",
    "Aguiar", "Guimarães", "Assis", "Motta", "Damasceno",
    "Barreto", "Henrique", "Amaral", "Sampaio", "Ventura",
    "Torres", "Nunes", "Lacerda", "Bastos", "Guerra",
    "Marques", "Valente", "Esteves", "Pacheco", "Goulart",
    "Frota", "Alves", "Cordeiro", "Lins", "Serra"
];

const nombresMexicanos = [
    "Juan", "José", "Luis", "Carlos", "Miguel",
    "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel",
    "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar",
    "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador",
    "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio",
    "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel",
    "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar",
    "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl",
    "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Valentín",
    "Julián", "Cristóbal", "Bautista", "Alexis", "Brayan",
    "Brandon", "Dylan", "Ian", "Álvaro", "Darío",
    "Rafael", "Teodoro", "Emmanuel", "Esteban", "Simón"
];

const nombresExtras = [
    "Lucas", "Rafael", "Thiago", "Bruno", "Gabriel",
    "Enzo", "Mateo", "Felipe", "André", "Leonardo",
    "Camila", "Mariana", "Sofía", "Valentina", "Isabela",
    "Ana", "Luisa", "Helena", "Julia", "Beatriz",
    "Clara", "Elena", "Victoria", "Gabriela", "Laura",
    "Daniela", "Renata", "Carolina", "Amanda", "Patricia",
    "Fernanda", "Paula", "Bianca", "Larissa", "Tatiana",
    "Vanessa", "Adriana", "Raquel", "Viviana", "Natalia",
    "Marcela", "Yasmin", "Lorena", "Camilo", "Rodrigo",
    "Henrique", "Caio", "Otavio", "Pedro", "Gustavo",
    "Mateus", "Vitor", "Eduarda", "Milena", "Aline",
    "Cecilia", "Leticia", "Raissa", "Joana", "Bruna",
    "Melissa", "Esther", "Luana", "Carla", "Priscila",
    "Juliana", "Tainá", "Livia", "Flavia", "Noah",
    "Samuel", "Davi", "Arthur", "Heitor", "Theo",
    "Gael", "Benicio", "Isaac", "Luan", "Natan",
    "Eloá", "Heloisa", "Alice", "Manuela", "Yuri",
    "Ruan", "Kauã", "João", "Miguel", "Antônio",
    "Caetano", "Murilo", "Pietra", "Lara", "Helio"
];

function generar() {
    var opcion = document.getElementById("opcion").value;
 
    switch (opcion) {
        case "1": generarSQL(); break;
        case "2": generarSQL(); break;
        case "3": generarCSV(); break;
        case "4": generarJSON(); break;
    }
}
 
function generarSQL() {
     salidaFinal = "INSERT INTO alumnos VALUES ";
    var matriculaBase = 224250000;
    var nombreCompleto = "";
    var cantidad = 0;
    cantidad = document.getElementById('registros').value;
    var nombreExtra = "";

    for (let i = 0; i < cantidad; i++) {

        let apellido1 = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellido2 = apellidosBrasil[Math.floor(Math.random() * apellidosBrasil.length)];
        let tieneSegundoNombre = Math.random() < 0.5;

        let segundoApellido;

        if (apellido2 === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${apellido2}')`;
        }

        nombreCompleto = "";
        nombreExtra = "";

        if (tieneSegundoNombre == 0) {
            nombreCompleto = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombreCompleto = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreExtra = nombresExtras[Math.floor(Math.random() * nombresExtras.length)];
            nombreCompleto += ` ${nombreExtra}`;
        }

        salidaFinal += `(${matriculaBase + i},UPPER('${apellido1}'), ${segundoApellido}, '${nombreCompleto}','a${matriculaBase + i}@unison.mx'),\n`;
    }

    salidaFinal = salidaFinal.slice(0, -4) + ";";
    document.getElementById("salida").innerHTML = salidaFinal;
}

function generarCSV() {
    salidaFinal = "matricula, apellido1, apellido2, nombre, correo\n";
    var matriculaBase = 224250000;
    var nombreCompleto = "";
    var cantidad = 0;
    cantidad = document.getElementById('registros').value;
    var nombreExtra = "";

    for (let i = 0; i < cantidad; i++) {

        let apellido1 = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellido2 = apellidosBrasil[Math.floor(Math.random() * apellidosBrasil.length)];
        let tieneSegundoNombre = Math.random() < 0.5;

        let segundoApellido;

        if (apellido2 === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = apellido2;
        }

        nombreCompleto = "";
        nombreExtra = "";

        if (tieneSegundoNombre == 0) {
            nombreCompleto = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombreCompleto = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreExtra = nombresExtras[Math.floor(Math.random() * nombresExtras.length)];
            nombreCompleto += ` ${nombreExtra}`;
        }

        salidaFinal += `${matriculaBase + i},${apellido1},${segundoApellido},${nombreCompleto},a${matriculaBase + i}@unison.mx\n`;
    }

    document.getElementById("salida").innerHTML = salidaFinal;
}

function generarJSON() {

    salidaFinal = "[\n";
    var matriculaBase = 224250000;
    var nombreCompleto = "";
    var cantidad = 0;
    cantidad = document.getElementById('registros').value;
    var nombreExtra = "";

    for (let i = 0; i < cantidad; i++) {

        let apellido1 = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellido2 = apellidosBrasil[Math.floor(Math.random() * apellidosBrasil.length)];
        let tieneSegundoNombre = Math.random() < 0.5;

        let segundoApellido;

        if (apellido2 === "NULL") {
            segundoApellido = null;
        } else {
            segundoApellido = apellido2;
        }

        nombreCompleto = "";
        nombreExtra = "";

        if (tieneSegundoNombre == 0) {
            nombreCompleto = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombreCompleto = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreExtra = nombresExtras[Math.floor(Math.random() * nombresExtras.length)];
            nombreCompleto += ` ${nombreExtra}`;
        }

        salidaFinal += `{
  "matricula": ${matriculaBase + i},
  "apellido1": "${apellido1}",
  "apellido2": ${segundoApellido === null ? null : `"${segundoApellido}"`},
  "nombre": "${nombreCompleto}",
  "correojson": "a${matriculaBase + i}@unison.mx"
}`;

        if (i < cantidad - 1) {
            salidaFinal += ",\n";
        }
    }

    salidaFinal += "\n]";
    document.getElementById("salida").innerHTML = salidaFinal;
}

function guardarArchivo() {
    var enlace = document.createElement("a");

    enlace.setAttribute("href","data:text/plain;charset=UTF-8," + encodeURIComponent(salidaFinal));
       
    var opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "1": enlace.setAttribute("download", "sistema_escolar.sql"); break;
        case "2": enlace.setAttribute("download", "sistema_escolar.sql"); break;
        case "3": enlace.setAttribute("download", "sistema_escolar.csv"); break;
        case "4": enlace.setAttribute("download", "sistema_escolar.json"); break;
    }

    enlace.style.display = "none";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}