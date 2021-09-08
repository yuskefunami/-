$(function(    ) {
    //ランダムに顔画像を出力

    const imageNum = document.getElementById("randomImage");
    const images = ["S__8790042.jpg","S__8790044.jpg","S__8790045.jpg","S__8790046.jpg"]
    const imageNo = Math.floor(Math.random() * images.length);
    
    $(".btn").click(function(){

        imageNum.src = images[imageNo];
        
        $("#frontface").hide();
        $("#randomImage").show();
       

        }); 
    
    //押したボタンによって、正誤評価する。
    $("#left").click(function(){
        if(imageNo == 1){
            $("#randomImage").fadeOut(2000);
            $(".button-container").fadeOut(2000);
            $("#winnerface").show(10000);
            $("#win").fadeIn(8000);
        }else{
            $("#lose").fadeIn(500);
        }
    });
    $("#right").click(function(){
        if(imageNo == 3){
            $("#randomImage").fadeOut(2000);
            $(".button-container").fadeOut(2000);
            $("#winnerface").show(10000);
            $("#win").fadeIn(8000);
        }else{
            $("#lose").fadeIn(500);
        }
    });
    $("#up").click(function(){
        if(imageNo == 2){
            $("#randomImage").fadeOut(2000);
            $(".button-container").fadeOut(2000);
            $("#winnerface").show(10000);
            $("#win").fadeIn(8000);
        }else{
            $("#lose").fadeIn(500);
        }
    });
    $("#down").click(function(){
        if(imageNo == 0){
            $("#randomImage").fadeOut(2000);
            $(".button-container").fadeOut(2000);
            $("#winnerface").show(10000);
            $("#win").fadeIn(8000);
        }else{
            $("#lose").fadeIn(500);
        }
    });
});
