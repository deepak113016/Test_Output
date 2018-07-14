//This js file is solution of task2 
var jquery = document.createElement("script");
jquery.addEventListener("load", onJqueryLoad);
jquery.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.querySelector("head").appendChild(jquery);

function onJqueryLoad() {
    $(document).ready(function () {
        $('a').click(function (e) {
            //Alert the name of the link
            alert($(this)[0].innerText);
            //Open page in pop up
            var NWin = window.open($(this).prop('href'), '', 'height=800,width=800');
            if (window.focus) {
                NWin.focus();
            }
            return false;
        });
        console.log("ready!");
    }); 
}