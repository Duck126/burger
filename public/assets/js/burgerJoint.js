$(function () {

    $(".lunch-button").on("click", function (event) {
        var id = $(this).data("id");
        var ateIt = $(this).data("ate-it");
        var burgerEaten = {
            devoured: (ateIt ? 0 : 1)
        };
        console.log("FrontEnd Pre Ajax", burgerEaten);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(function () {
                console.log("change burger to", ateIt);
                location.reload();
            }

        );

    });

    $(".delete-button").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function () {
            //console.log("Threw away burger ID: ", id);
            location.reload();
        });

    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var name = $("input#burg").val().trim();
        var eaten = 0;
        console.log(name, "name front end");
        var add = {
            name,
             eaten
        };
        
       
        $.ajax("/api/burgers", {
            type: "POST",
            data: add
        }).then(function () {
            console.log("made burger");
            location.reload();
        });
    });

});