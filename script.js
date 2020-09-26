
$("#currentDay").text(moment().format('dddd, MMMM Do'));



console.log(moment().format());

var currentHour = parseInt(moment().format('HH'));

function createPlanner(){
     
    i = 0;

    iT = 9;

    while(i <= 8){
        var newRow = $("<div>");
        newRow.attr("class", "row");

        var newHourCol = $("<div>");
        newHourCol.attr("class", "col-1 p-4 text-center hour");
    
        var newTextCol = $("<textarea>");
        newTextCol.attr("class", "col-10 textarea");
        newTextCol.attr("data-text", iT);

        var newSaveCol = $("<div>");
        newSaveCol.attr("class", "col-1 saveBtn text-center");
        newSaveCol.attr("data-time", iT);

        newLockImg = $("<img>");
        newLockImg.attr("src", "assets/images/locked.svg");
        newLockImg.attr("class", "w-50 mt-4" )

        switch (iT) {
            case 9:
                newHourCol.text(iT + "am");
                iT++;
            break;
            case 10:
                newHourCol.text(iT + "am");
                iT++;
            break;
            case 11:
                newHourCol.text(iT + "am");
                iT++;
            break;
            case 12:
                newHourCol.text(iT + "pm");
                iT = iT - 11;
            break;
            case 1:
                newHourCol.text(iT + "pm");
                iT++;
            break;
            case 2:
                newHourCol.text(iT + "pm");
                iT++;
            break;
            case 3:
                newHourCol.text(iT + "pm");
                iT++;
            break;
            case 4:
                newHourCol.text(iT + "pm");
                iT++;
            break;
            case 5:
                newHourCol.text(iT + "pm");
                iT++;
            break;
        }

        if(iT === currentHour){
            newTextCol.addClass("present");
        } else if(iT < currentHour) {
            newTextCol.addClass("past");
        } else {
            newTextCol.addClass("future");
        }

        

        $(".container").append(newRow);
        newRow.append(newHourCol, newTextCol, newSaveCol);
        newSaveCol.append(newLockImg);

        i++;
    }
}

function loadSavedItems(){
    console.log(localStorage.getItem("9am"));

    
}

createPlanner();

$(".saveBtn").on("click", function(){
    $(this).attr("style", "background-color:green;");

    var timeStamp = $(this).siblings(".hour").text();
    var textValue = $(this).siblings(".textarea").val();

    localStorage.setItem(timeStamp, textValue);

});



// https://stackoverflow.com/questions/8623108/on-button-click-select-a-sibling-element-with-jquery - helped me get info from the same row