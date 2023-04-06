function chunkValues() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");

    var selected = new Array();

    var tblSubjects = document.getElementById("tblSubjects");
    var chks = tblSubjects.getElementsByTagName("INPUT");

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }


    if (selected.length > 0) {
        alert("Selected values: " + selected.join(","));
    }
};