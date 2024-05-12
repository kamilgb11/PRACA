$(document).ready(function() {
    $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Poleć kandydata</button>');
            $("#submit").html('Poleć');

    function checkURLForNumbers() {
        var url = window.location.href;

        if (url.includes("102668")) {
            $("span").each(function() {
                var text = $(this).text();

                if (text.includes("Aplikuj teraz")) {
                    text = text.replace("Aplikuj teraz", "Poleć");
                    $(this).text(text);

                } else if (text.includes("Apply now")) {
                    text = text.replace("Apply now", "Recommend");
                    $(this).text(text); //angielski

                } else if (text.includes("Apply now")) {
                    text = text.replace("Apply now", "Recommend");
                    $(this).text(text); //ukrainski

                } else if (text.includes("Apply now")) {
                    text = text.replace("Apply now", "Recommend");
                    $(this).text(text); //rosyjski

                } else if (text.includes("Aplica ya")) {
                    text = text.replace("Aplica ya", "Recomendar");
                    $(this).text(text); //hiszpanski

                } 
            });
            $("b").each(function() {

                var text = $(this).text();

                if (text.includes("Opis stanowiska")) {
                    text = text.replace("Opis stanowiska", " ");
                    $(this).text(text);

                } else if (text.includes("Job description")) {
                    text = text.replace("Job description", " ");
                    $(this).text(text); //angielski

                } else if (text.includes("Job description")) {
                    text = text.replace("Job description", " ");
                    $(this).text(text); //ukrainski

                } else if (text.includes("Job description")) {
                    text = text.replace("Job description", " ");
                    $(this).text(text); //rosyjski

                } else if (text.includes("Job description")) {
                    text = text.replace("Job description", " ");
                    $(this).text(text); //hiszpanski

                }
            });
        }
    }

    checkURLForNumbers();

    $("#hsubmit").click(function() {
        $("#submit").trigger('click');

    });
});

 

$(document).ready(function() {          // angielski przycisk
    function checkForRecommend() {
        var foundRecommend = false;
        $("span").each(function() {
            var text = $(this).text();

            if (text.includes("Recommend")) {
                foundRecommend = true;
                return false; 
            }
        });
        if (foundRecommend) {
            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Recommend candidate</button>');
            $("#submit").html('Recommend');
        } else {
            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Apply now</button>');
            $("#submit").html('Apply');
        }
    }
    checkForRecommend();
    $("#hsubmit").click(function() {
        $("#submit").trigger('click');
    });
});


$(document).ready(function() {          // ukrainski przycisk - przetlumaczyc
    function checkForRecommendU() {
        var foundRecommendU = false;
        $("span").each(function() {
            var text = $(this).text();

            if (text.includes("Recommend")) {
                foundRecommendU = true;
                return false; 
            }
        });
        if (foundRecommendU) {
            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Recommend candidate</button>');
            $("#submit").html('Recommend');
        } else {
            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Apply now</button>');
            $("#submit").html('Apply');
        }
    }
    checkForRecommendU();
    $("#hsubmit").click(function() {
        $("#submit").trigger('click');
    });
});

$(document).ready(function() {          // rosyjski przycisk - przetlumaczyc 
    function checkForRecommendR() {
        var foundRecommendR = false;
        $("span").each(function() {
            var text = $(this).text();

            if (text.includes("Recommend")) {
                foundRecommendR = true;
                return false; 
            }
        });
        if (foundRecommendR) {
            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Recommend candidate</button>');
            $("#submit").html('Recommend');
        } else {
            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Apply now</button>');
            $("#submit").html('Apply');
        }
    }
    checkForRecommendR();
    $("#hsubmit").click(function() {
        $("#submit").trigger('click');
    });
});

$(document).ready(function() {          // hiszpanski przycisk
    function checkForRecommendH() {
        var foundRecommendH = false;
        $("span").each(function() {
            var text = $(this).text();

            if (text.includes("Recomendar")) {
                foundRecommendH = true;
                return false; 
            }
        });
        if (foundRecommendH) {
            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Recomendar un candidato</button>');
            $("#submit").html('Recomendar');
        } else {
            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Aplica ya</button>');
            $("#submit").html('Aplica');
        }
    }
    checkForRecommendH();
    $("#hsubmit").click(function() {
        $("#submit").trigger('click');
    });
});