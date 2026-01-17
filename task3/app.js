function filterTable() {
    let input = document.getElementById("searchBox");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("studentTable");
    let tr = table.getElementsByTagName("tr");
    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function calculateRank() {
    let table = document.getElementById("studentTable");
    let tbody = table.querySelector("tbody");
    let rows = Array.from(tbody.querySelectorAll("tr"));
    rows.sort((rowA, rowB) => {
        let marksA = parseInt(rowA.cells[2].innerText);
        let marksB = parseInt(rowB.cells[2].innerText);
        return marksB - marksA;
    });
    rows.forEach((row, index) => {
        row.cells[3].innerText = index + 1;
        tbody.appendChild(row); 
    });
}