window.debug = function () {
    var accum = [];
    for (var i = 0; i != arguments.length; i++) {
        var argument = arguments[i];
        var isArray = argument instanceof Array;
        var type = typeof argument;
        if (isArray) {
            type += " / Array[" + argument.length + "]"
        }
        var debugInfo = String(argument + ' [<div id="typeInfo">' + type + ']</div>');
        accum.push(debugInfo);
    }
    var joined = accum.join("<br/>");
    var html = $("#content").html();
    if (html && html.length > 0) {
        $("#content").html(html + "<br/>" + joined);
    } else {
        $("#content").html(html + joined);
    }
};

window.consoleDebug = function () {
    var html = $("#console").html();
    if (html && html.length > 0) {
        $("#console").html(html + "<br/>" + arguments[0]);
    } else {
        $("#console").html(html + arguments[0]);
    }
};
