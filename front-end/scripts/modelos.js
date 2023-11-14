const documentTable = document.getElementById("modelos_tabela-js")

const requestCarros = async () => {
    const carros = await fetch("http://localhost:5000/api/v1/modelos");
    const carrosParsed = await carros.json();

    carrosParsed.forEach(element => {
        const row = document.createElement("tr");

        Object.entries(element).forEach(item => {
            let cell = document.createElement("td");
            cell.innerText = item[1];
            row.appendChild(cell);
        })

        documentTable.appendChild(row)
    });
}

requestCarros()



