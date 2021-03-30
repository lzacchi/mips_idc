function showElement_(id) {
  var element = document.getElementById(id);
  element.style.display = 'block';
}

function hideElement(id) {
  var element = document.getElementById(id);
  element.style.display = 'none';
}

function filterInstruction() {
  var td, i, tdArr, j, alltables;
  var input = document.getElementById("instruction-search");
  var filter = input.value.toUpperCase();
  // var table = document.getElementById("instruction-table");

  alltables = document.querySelectorAll("table[data-name=instruction-table]");

  alltables.forEach(function (table) {
    // Loop through all table rows
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      tdArr = tr[i].getElementsByTagName("td");
      // Loop through all table columns in the current row, and hide those who don't match the search query
      firstCol = tdArr[0];
      secondCol = tdArr[1]
      if (firstCol || secondCol) {
        if ((firstCol.innerHTML.toUpperCase().indexOf(filter) > -1) ||
          (secondCol.innerHTML.toUpperCase().indexOf(filter) > -1)) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });
}
