document
    .querySelectorAll("input[type='radio']")
    .forEach(function (input) {
        input.onclick = function () {
            document.cookie = 'sel_theme=' + input.id + ';';
            setTheme(input.id);
        }
    });

window.onload = function () {

    var cookie_pos = document.cookie.indexOf('sel_theme=');

    if (cookie_pos != -1) {

        var cookie_flavor = document.cookie.substring(cookie_pos + 10);
        setTheme(cookie_flavor);
    }
}

function setTheme(name) {
    if (name == 'light') {
        $("link[href*='bootstrap-darkly.css']").prop('disabled', true);
        document.getElementById("dark").checked = false;
        $("link[href*='bootstrap-flatly.css']").prop('disabled', false);
        document.getElementById("light").checked = true;
    }
    else if (name == 'dark') {
        $("link[href*='bootstrap-flatly.css']").prop('disabled', true);
        document.getElementById("light").checked = false;
        $("link[href*='bootstrap-darkly.css']").prop('disabled', false);
        document.getElementById("dark").checked = true;
    }
}