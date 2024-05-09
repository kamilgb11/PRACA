$(document).ready(function() {
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

            $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Poleć kandydata</button>');
            $("#submit").html('Poleć');

        }
    }

    checkURLForNumbers();

    $("#hsubmit").click(function() {
        $("#submit").trigger('click');

    });
});

 

$(document).ready(function() {         //angielski przycisk
    function checkForRecommend() {
        $("span").each(function() {
        var text = $(this).text();

            if (text.includes("Recommend")) {
                $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Recommend candidate</button>');
                $("#submit").html('Recommend');
                return false;
            }
        });
    }

    checkForRecommend();

    $("#hsubmit").click(function() {
        $("#submit").trigger('click');
    });
});

$(document).ready(function() {         //ukrainski przycisk
    function checkForRecommend() {
        $("span").each(function() {
        var text = $(this).text();

            if (text.includes("Recommend")) {
                $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Recommend candidate</button>');
                $("#submit").html('Recommend');
                return false;
            }
        });
    }

    checkForRecommend();

    $("#hsubmit").click(function() {
        $("#submit").trigger('click');
    });
});

$(document).ready(function() {         //rosyjski przycisk
    function checkForRecommend() {
        $("span").each(function() {
        var text = $(this).text();

            if (text.includes("Recommend")) {
                $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Recommend candidate</button>');
                $("#submit").html('Recommend');
                return false;
            }
        });
    }

    checkForRecommend();

    $("#hsubmit").click(function() {
        $("#submit").trigger('click');
    });
});

$(document).ready(function() {         //hiszpanski przycisk
    function checkForRecommend() {
        $("span").each(function() {
        var text = $(this).text();

            if (text.includes("Recommend")) {
                $("#logo").html('<button type="submit" class="btn btn-brand btn-lg m-0 m-t-15 m-b-30 offer-submit-button" id="hsubmit">Recommend candidate</button>');
                $("#submit").html('Recommend');
                return false;
            }
        });
    }

    checkForRecommend();

    $("#hsubmit").click(function() {
        $("#submit").trigger('click');
    });
});