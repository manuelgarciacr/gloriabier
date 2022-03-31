/*Search*/

function searchFilter() {
    // Declaro variables
    var input, filter, name, type, a, i, data;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    name = document.getElementsByClassName("name")[0];
    type = ul.getElementsByTagName('type');
    

    // Cerca i rebuig dels que no coincideixin
    for (i = 0; i < li.length; i++) {            
        if (name[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            name[i].style.display = "";
        } else {
            [i].style.display = "none";
        }
    }
}

