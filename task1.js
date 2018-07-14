//This Js file is solution of Task1
var jquery = document.createElement("script");
jquery.addEventListener("load", onJqueryLoad);
jquery.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.querySelector("head").appendChild(jquery);

function onJqueryLoad() {
    $(document).ready(function () {
        //Number of EXIT Link
        //Note:-Requirement is not clear for Exit link.
       var exitLinkCount = 0;
        for (i = 0; i < $('a').length; i++) {
            if ($('a')[i].innerHTML === "Close" || $('a')[i].innerHTML === "X" || $('a')[i].innerHTML === "Exit" || $('a')[i].innerHTML === "close") {
                exitLinkCount++;
            }
        }
        console.log("Count of Exit Link on the page =" + exitLinkCount);
        //Number of article on the page
        console.log('Total Count of article on the page =' + $('aside').length);
        //Number of Image on the page
        console.log('Total Count of Image on the page = ' + $('img').length);
        console.log("ready!");
    });
}

