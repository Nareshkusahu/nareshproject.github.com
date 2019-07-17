$(document).ready(function () {
    var video = document.getElementById("vvv");

    $(".ImageBtn").click(function () {
        $(".VideoPlay").show();
        video.play();
        $("#hide").show();

    });
});
