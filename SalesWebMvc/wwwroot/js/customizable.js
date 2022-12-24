document
    .querySelectorAll("input[type='radio']")
    .forEach(function (input) {
        input.onclick = function () {
            if (input.id == 'light') {
                $("link[href*='bootstrap-darkly.css']").prop('disabled', true);
                $("link[href*='bootstrap-flatly.css']").prop('disabled', false);
            }
            else if (input.id == 'dark') {
                $("link[href*='bootstrap-flatly.css']").prop('disabled', true);
                $("link[href*='bootstrap-darkly.css']").prop('disabled', false);
            }
        }
    });