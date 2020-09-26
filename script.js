
$("#currentDay").text(moment().format('dddd, MMMM Do'));



console.log(moment().format());

var currentHour = parseInt(moment().format('HH'));

console.log(currentHour);

function createPlanner(){
     
    i = 0;

    iT = 9;

    while(i <= 8){
        var newRow = $("<div>");
        newRow.attr("class", "row");

        var newHourCol = $("<div>");
        newHourCol.attr("class", "col-1 p-4 text-center hour ");
    
        var newTextCol = $("<textarea>");
        newTextCol.attr("class", "col-10 textarea");

        var newSaveCol = $("<div>");
        newSaveCol.attr("class", "col-1 saveBtn");

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

        i++;
    }
}

createPlanner();

