# day-planner
In this [project](https://goodlvn.github.io/day-planner/) we are tasked with creating a day planner that helps us keep track of our daily activities! We use moment.js to help our application keep track of time outside of relying on our computers OS. The parameters for the assignment were to create a planner that take in to account the standard business hours of a day (9-5pm). We should have a text area that allows the use to input the activity for any given time and a saveBtn that allows the data to persist by storing it in the local storage of the browser.

## Screenshot of the project 

![gif of day planner](./assets/images/dp-1.gif)

## How to use: 

1. Choose text area with corrosponding hour block to detonate activity 
2. Save the activity with the save button to have it persist past a page refresh or browser closure 

* can clear entire agenda using the "Clear Agenda" button 
* time blocks are color coded to express activitiest that have past (in gray), activities that are to come (in green) and the current activity (in red)

## Technologies used

1. [Moment.js](https://momentjs.com/)
2. JQuery 
3. Bootstrap 
4. Javascript
5. HTML
6. CSS



## What makes this project stand out? 

Although this project was seemingly less daunting than the [last](https://goodlvn.github.io/hunterxhunter-timed-quiz/), it was great to use an API to create funcionality inside of our project. We got exposure to reading documentation specific to the API. It was really neat using the specific calls to make the application work. Something else that really stood out to me about the project was the fact that we had the options to either hard code the time blocks into our index.html or use our script.js page to dynamically create them. It reminded me that there is more than one way to go about tackling a problem! The more we learn the more we can adopt and integrate into our own style of coding to make it cleaner and more effecient!

## Areas to improve on: repetitve code 

### Switch case use 

Although I am pretty happy I was able to integrate a switch case into my code I don't think this was the best use of one. When I look at the code it feels a bit repetative and clunky. I had to write out a counter for the iterator multiple times and there are about three groups of cases that could have used the same code. I think the code would have benifited from using an "if, else if" instead of the swtich case in this instance. That being said I am happy I was able to use it!

```
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
```

### Clearing and loading the agenda items

Because of how I created the time blocks I found that the easiest way to clear the values was to code them each indivdually. Looking at it now I might have been able to add a class as they were being built and then called them into an array using "document.getElementByClassName". I could have then used a for loop to pass all of the desired values or clear its contents. I'll give that a shot next time! 

```
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
```
```
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
```

## Credits/Something new I learned this project 

I wanted to know how to pull/push data into sibling elements of the "this" element that triggered an event listener. I looked around and found this [article](https://stackoverflow.com/questions/8623108/on-button-click-select-a-sibling-element-with-jquery) on stack overflow.

Here is the implemetation in the code: 
```
$(".saveBtn").on("click", function(){

    var timeStamp = $(this).siblings(".hour").text();
    var textValue = $(this).siblings(".textarea").val();
    localStorage.setItem(timeStamp, textValue);
});
```

I also got inspiration for the saveBtn styling from this [video](https://www.w3schools.com/howto/howto_css_animate_buttons.asp)!