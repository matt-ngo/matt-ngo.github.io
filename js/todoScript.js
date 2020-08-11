/*
    jQuery Concepts:
        .on()
        .keypress()
        Fades and Slides
        Selecting

        .parent()
        .append()
        Creating Elements
        Event Delegation
*/

$("ul").on("click", "li", function (event) {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
    //"event" var name is arbitratry
    event.stopPropagation();//stops bubbling from reaching parents (no li interaction)
    $(this).parent().fadeOut(500, function () {
        $(this).remove();// 'this' here == this.parent
    });
});


// add a new li to the ul from the input box
$("input[type='text']").keypress(function (event) {
    //detect enter
    if (event.which === 13) {
        // get text from input
        let todoText = $(this).val();
        // clear form
        $(this).val("")
        // create new li, append adds arg to the callee
        $("ul").append("<li> <span class=\"delete\"><i class=\"fas fa-times\"></i></span> " + todoText + " </li>");
    }
});

$("#toggle").click(function () {
    $("input[type='text']").fadeToggle();
});
