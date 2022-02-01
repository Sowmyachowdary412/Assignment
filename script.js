var selectedRow = null

function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
      
}

function myFunction() {
    document.getElementById("myForm").reset();
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Age"] = document.getElementById("Age").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("ListofUsers").getElementsByTagName('thead')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Age;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onDelete(this)">Clear</a>`;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Age;
}

function onDelete(td) {
        row = td.parentElement.parentElement;
        document.getElementById("ListofUsers").deleteRow(row.rowIndex);
}


function DeleteRows() {
    var rowCount = ListofUsers.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        ListofUsers.deleteRow(i);
    }
}



