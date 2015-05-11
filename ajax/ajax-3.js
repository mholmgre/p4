$.ajax({
    dataType: "json",
    url: "ajax-3.json",
    success: function(data) {
        var items = [];
        $.each(data, function(key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    }
});
