
$("#currentDay").text(moment().format('dddd, MMMM Do'));

var currentHour = parseInt(moment().format('HH'));

console.log(currentHour);

function createPlanner(){
     
    var i = 0;

    var iT = 9;
    var styleCheck = 8;

    while(i <= 8){
        var newRow = $("<div>");
        newRow.attr("class", "row");

        var newHourCol = $("<div>");
        newHourCol.attr("class", "col-1 p-4 text-center hour");
    
        var newTextCol = $("<textarea>");
        newTextCol.attr("class", "col-10 textarea");

        var newSaveCol = $("<div>");
        newSaveCol.attr("class", "col-1 saveBtn text-center");
        newSaveCol.attr("data-time", iT);


        newLockImg = $("<img>");
        newLockImg.attr("src", "assets/images/locked.svg");
        newLockImg.attr("class", "w-50 mt-4")

        switch (iT) {
            case 9:
                newHourCol.text(iT + "am");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT++;
            break;
            case 10:
                newHourCol.text(iT + "am");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT++;
            break;
            case 11:
                newHourCol.text(iT + "am");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT++;
            break;
            case 12:
                newHourCol.text(iT + "pm");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT = iT - 11;
            break;
            case 1:
                newHourCol.text(iT + "pm");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT++;
            break;
            case 2:
                newHourCol.text(iT + "pm");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT++;
            break;
            case 3:
                newHourCol.text(iT + "pm");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT++;
            break;
            case 4:
                newHourCol.text(iT + "pm");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT++;
            break;
            case 5:
                newHourCol.text(iT + "pm");
                newTextCol.attr("id", iT);
                styleCheck++;
                iT++;
            break;
        }

        console.log(styleCheck);

        if(styleCheck === currentHour){
            newTextCol.addClass("present");
        } else if(styleCheck < currentHour) {
            newTextCol.addClass("past");
        } else {
            newTextCol.addClass("future");
        }

        $(".main").append(newRow);
        newRow.append(newHourCol, newTextCol, newSaveCol);
        newSaveCol.append(newLockImg);

        i++;
    }
}


function loadSavedItems(){
    $("#9").val(localStorage.getItem("9am"));
    $("#10").val(localStorage.getItem("10am"));
    $("#11").val(localStorage.getItem("11am"));
    $("#12").val(localStorage.getItem("12pm"));
    $("#1").val(localStorage.getItem("1pm"));
    $("#2").val(localStorage.getItem("2pm"));
    $("#3").val(localStorage.getItem("3pm"));
    $("#4").val(localStorage.getItem("4pm"));
    $("#5").val(localStorage.getItem("5pm"));  
};

createPlanner();
loadSavedItems();

$(".saveBtn").on("click", function(){

    var timeStamp = $(this).siblings(".hour").text();
    var textValue = $(this).siblings(".textarea").val();
    localStorage.setItem(timeStamp, textValue);
});

$("#clearBtn").on("click",  function(){
    localStorage.clear();

    $("#9").val("");
    $("#10").val("");
    $("#11").val("");
    $("#12").val("");
    $("#1").val("");
    $("#2").val("");
    $("#3").val("");
    $("#4").val("");
    $("#5").val(""); 
});



