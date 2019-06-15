$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListItem=$("#choices li").length;//計算有幾筆資料 得到3筆
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);//0~2...
        
        $("h1").text($("#choices>li").eq(randomChildNumber).text());//
        });
    });