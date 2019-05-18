document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

let button = document.getElementById("getData");
button.addEventListener("click", collectData);

function collectData() {
    // name, position, country, age, joined, salary
    let url = "https://gist.githubusercontent.com/heiswayi/7fde241975ed8a80535a/raw/ff1caaeaf62bd6740ab7cafcd61f1215de173379/datatables-data.json";
    
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", url, true);
    
    xhr.onload = function(e) {
        let jsonResponse = xhr.response;
        
        let users = JSON.parse(jsonResponse);
        displayData(users);
    }
    
    xhr.onerror = function(error) {
        console.log("An error occurred: " + error);
    }
    
    xhr.send();
}

function displayData(data) {
    let container = document.getElementById("users");
    // Remove all children of the container
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    let table = document.createElement("table");
    
    // Table Head
    let tableHead = document.createElement("thead");
    let tableHeadRow = document.createElement("tr");
    
    let tableHeadName = document.createElement("th");
    let tableHeadNameText = document.createTextNode("Name");
    tableHeadName.appendChild(tableHeadNameText);
    
    let tableHeadPosition = document.createElement("th");
    let tableHeadPositionText = document.createTextNode("Position");
    tableHeadPosition.appendChild(tableHeadPositionText);
    
    let tableHeadCountry = document.createElement("th");
    let tableHeadCountryText = document.createTextNode("Country");
    tableHeadCountry.appendChild(tableHeadCountryText);
    
    let tableHeadAge = document.createElement("th");
    let tableHeadAgeText = document.createTextNode("Age");
    tableHeadAge.appendChild(tableHeadAgeText);
    
    let tableHeadJoined = document.createElement("th");
    let tableHeadJoinedText = document.createTextNode("Joined");
    tableHeadJoined.appendChild(tableHeadJoinedText);
    
    let tableHeadSalary = document.createElement("th");
    let tableHeadSalaryText = document.createTextNode("Salary");
    tableHeadSalary.appendChild(tableHeadSalaryText);
    
    tableHead.appendChild(tableHeadName);
    tableHead.appendChild(tableHeadPosition);
    tableHead.appendChild(tableHeadCountry);
    tableHead.appendChild(tableHeadAge);
    tableHead.appendChild(tableHeadJoined);
    tableHead.appendChild(tableHeadSalary);
    
    table.appendChild(tableHead);

    // Table Body
    let tableBody = document.createElement("tbody");
    
    data["data"].forEach(function(user, index) {
        let tableBodyRow = tableBody.insertRow();
        
        let tableBodyRowName = tableBodyRow.insertCell();
        let tableBodyRowNameText = document.createTextNode(user[0]);
        tableBodyRowName.appendChild(tableBodyRowNameText);
        // tableBodyRowName.innerHTML = user[0];
        
        let tableBodyRowPosition = tableBodyRow.insertCell();
        let tableBodyRowPositionText = document.createTextNode(user[1]);
        tableBodyRowPosition.appendChild(tableBodyRowPositionText);
        // tableBodyRowName.innerHTML = user[1];
        
        let tableBodyRowCountry = tableBodyRow.insertCell();
        let tableBodyRowCountryText = document.createTextNode(user[2]);
        tableBodyRowCountry.appendChild(tableBodyRowCountryText);
        // tableBodyRowName.innerHTML = user[2];
        
        let tableBodyRowAge = tableBodyRow.insertCell();
        let tableBodyRowAgeText = document.createTextNode(user[3]);
        tableBodyRowAge.appendChild(tableBodyRowAgeText);
        // tableBodyRowName.innerHTML = user[3];
        
        let tableBodyRowJoined = tableBodyRow.insertCell();
        let tableBodyRowJoinedText = document.createTextNode(user[4]);
        tableBodyRowJoined.appendChild(tableBodyRowJoinedText);
        // tableBodyRowName.innerHTML = user[4];
        
        let tableBodyRowSalary = tableBodyRow.insertCell();
        let tableBodyRowSalaryText = document.createTextNode(user[5]);
        tableBodyRowSalary.appendChild(tableBodyRowSalaryText);
        // tableBodyRowName.innerHTML = user[5];
    });
    
    table.appendChild(tableBody);
    
    // Table Foot
    let tableFoot = document.createElement("tfoot");
    
    let tableFootRow = document.createElement("tr");
    // tableFootRow.colSpan = "6";
    
    let tableFootRowCell = document.createElement("td");
    
    let tableFootRowCellText = document.createTextNode("This is the footer of the table");
    
    tableFootRowCell.colSpan = "6";
    tableFootRowCell.appendChild(tableFootRowCellText);
    
    tableFootRow.appendChild(tableFootRowCell);
    
    tableFoot.appendChild(tableFootRow);
    
    table.appendChild(tableFoot);
    
    
    users.appendChild(table);
    
    removeButtonAndText();
}

function removeButtonAndText() {
    document.getElementById("main").removeChild(document.getElementById("info"));
    document.getElementById("main").removeChild(document.getElementById("getData"));
}

