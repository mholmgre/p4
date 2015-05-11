$.getJSON("ajax-4.json", function(data) {
    var items = [];
    $.each(data, function(key, val) {
        items.push("<p id='" + key + "'>" + val + "</p>");
    });

    $("<div/>", {
        "class": "my-new-div",
        html: items.join("")
    }).appendTo("body");
});
