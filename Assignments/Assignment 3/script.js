$(document).ready(function() {
    $(".dropDownTextArea").hide();
    $(".btn_del").hide();
    $(".btn_submit").css("backgroundColor", "gray").css("border", "2px solid gray");
    $(".btn_submit").prop("disabled", true);
    $("img").click(function() {
        $(this).parent().parent().next().toggle();
    });


    $(".chkbox").click(function() {

        if ($(".chkbox").is(":checked")) {
            $(".btn_submit").css("backgroundColor", "orange").css("border", "2px solid orange");
            $(this).closest("tr").css("backgroundColor", "orange");
            $(this).closest("tr").find(".btn_del").show();
            $(".btn_submit").prop("disabled", false);
        } else {
            $(".btn_submit").css("backgroundColor", "gray").css("border", "2px solid gray");
            $(this).closest("tr").css("backgroundColor", "white");
            $(".btn_submit").prop("disabled", true);
            $(this).closest("tr").find(".btn_del").hide();
        }
        //myFunction();
    });
    $(".btn_del").click(function() {
        $(this).closest("tr").remove();
        //myFunction();
    });

    $(".btn_add").click(function addRow(id) {

        var tableRef = document.getElementById("myTable");
        var countRow = tableRef.rows.length;
        var countCol = tableRef.rows[0].cells.length;

        var newRow = tableRef.insertRow(-1);
        var newRow1 = tableRef.insertRow(-1);

        var newCell0 = newRow.insertCell(0);
        newCell0.innerHTML = "<input class='chkbox' type='checkbox' /><br /><br /><img src='down.png' width='25px' />";

        var newCell1 = newRow.insertCell(1);
        newCell1.innerHTML = "<td>Student " + (countRow + 1) + "</td>";

        var newCell2 = newRow.insertCell(2);
        newCell2.innerHTML = "<td>Teacher " + (countRow + 1) + "</td>";

        var newCell3 = newRow.insertCell(3);
        newCell3.innerHTML = "<td>Approved</td>";

        var newCell4 = newRow.insertCell(4);
        newCell4.innerHTML = "<td>Fall</td>";

        var newCell5 = newRow.insertCell(5);
        newCell5.innerHTML = "<td>TA</td>";

        var newCell6 = newRow.insertCell(6);
        newCell6.innerHTML = 34567 + countRow;

        var newCell7 = newRow.insertCell(7);
        newCell7.innerHTML = "<td>100%</td>";

        var newCell8 = newRow.insertCell(8);
        newCell8.innerHTML = "<td><button class='btn_del'>Delete</button></td>";

        var newCellNextRow = newRow1.insertCell(0);
        newCellNextRow.colSpan = countCol;
        newCellNextRow.class = "dropDownTextArea";
        newCellNextRow.innerHTML = "<td>Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br /></td>";
        //myFunction();

        $(".dropDownTextArea").hide();

        $(".btn_del").hide();
        $(".btn_submit").css("backgroundColor", "gray").css("border", "2px solid gray");
        $(".btn_submit").prop("disabled", true);
        $("img").click(function() {
            $(this).parent().parent().next().toggle();
        });
    });

});