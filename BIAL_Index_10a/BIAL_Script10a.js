$(document).ready(function () {
    var video = document.getElementById("vvv");
    $(".ImageBtn").click(function () {
        $(".VideoPlay").show();
        video.play();
        $("#hide").show();
    });
});


$(document).ready(function () {
    var image = document.getElementById("kkk");
    $(".ImageBtn01").click(function () {
        $(".ImageShow").show();
        $("#hiddne").show();

    });
});

$(document).ready(function () {
    var image = document.getElementById("lll");
    $(".ImageBtn02").click(function () {
        $(".ImageShow2").show();
        $("#hiddne2").show();

    });
});

$(document).ready(function () {
    var image = document.getElementById("mmm");
    $(".ImageBtn03").click(function () {
        $(".ImageShow3").show();

        $("#hiddne3").show();

    });
});