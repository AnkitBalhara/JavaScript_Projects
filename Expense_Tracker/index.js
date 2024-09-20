let updatedBal = 0;
let updatedInc = 0;
let updatedExp = 0;

let addExpense = document.getElementById("addExpense");
let itemType = document.getElementById("itemType");
let itemName = document.getElementById("itemName");
let amount = document.getElementById("amount");
let tbody = document.getElementById("tbody");

addExpense.addEventListener("click", () => {
  if (itemName.value != "" && amount.value != "") {
    if (itemType.value == "Income") {
      updatedInc = parseInt(updatedInc) + parseInt(amount.value);
      updatedBal = updatedBal + parseInt(amount.value);
    } else {
      updatedExp = updatedExp + parseInt(amount.value);
      updatedBal = updatedBal - parseInt(amount.value);
    }

    // Create table row (tr) and table data cells (td)
    let tr = document.createElement("tr");
    // let td1 = document.createElement('td');
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    // Assign values and attributes to table data cells
    // td1.textContent = '1'; // Example for serial number (adjust as needed)
    td2.textContent = itemName.value;
    td3.textContent = amount.value;
    td4.textContent = itemType.value;
    td5 = btn; // Example for delete option or other actions

    // Append table data cells to the table row
    // tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    // Append the table row to the tbody
    tbody.appendChild(tr);

    // Clear input fields after adding expense
    itemName.value = "";
    amount.value = "";

    btn.addEventListener("click", () => {
      let head = btn.parentNode;
      head.style.display = "none";
      if (head.childNodes[2].innerText == "Expense") {
        updatedBal = updatedBal + parseInt(head.childNodes[1].innerText);
        updatedExp = updatedExp - parseInt(head.childNodes[1].innerText);
        document.getElementById("updatedExp").innerHTML = updatedExp;
        document.getElementById("updatedBal").innerHTML = updatedBal;
      } else {
        updatedBal = updatedBal - parseInt(head.childNodes[1].innerText);
        updatedInc = updatedInc - parseInt(head.childNodes[1].innerText);
        document.getElementById("updatedInc").innerHTML = updatedInc;
        document.getElementById("updatedBal").innerHTML = updatedBal;
      }
    });

    document.getElementById("updatedExp").innerHTML = updatedExp;
    document.getElementById("updatedBal").innerHTML = updatedBal;
    document.getElementById("updatedInc").innerHTML = updatedInc;
  } else {
    alert("Enter Details...");
  }
});