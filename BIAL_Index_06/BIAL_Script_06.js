$(document).ready(function () {
    var video = document.getElementById("aaa");
    $(".ImageBtn").click(function () {
        $(".VideoPlay").show();
        video.play();
        $("#hide").show();
    });
});

