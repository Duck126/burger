$(function () {

    $(".lunch-button").on("click", function (event) {
        var id = $(this).data("id");
        var ateIt = $(this).data("ate-it");
        var burgerEaten = {
            devoured: (ateIt ? 0 : 1)
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(function () {
                location.reload();
            }
        );
    });

    $(".delete-button").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function () {
            location.reload();
        });

    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var name = $("input#burg").val().trim();
        var eaten = 0;
        var add = {
            name,
             eaten
        };
        
        $.ajax("/api/burgers", {
            type: "POST",
            data: add
        }).then(function () {
            location.reload();
        });
    });

});