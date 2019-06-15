$(document).ready(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    // id要用#   //append增加內容

    var topicCount=topic.length;
    var secondUnit=1000;
    var minuteUnit=secondUnit*60;
    var hourUnit=minuteUnit*60;
    var dayUnit=hourUnit*24;//一天的毫秒
    
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");//x=0 第幾筆
        //$("#courseTable").append("<td>"+startDate+"</td>");
        $("#courseTable").append("<td>"+(new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
        //slice(5)第五個字開始，slice( , ),第一個數字是開始，第二個結束，如果第二個沒有打會把後面全部印出來
        //2018/2/21 把 2018 砍掉 slice(5) , 變成 2/21
        
        $("#courseTable").append("<td>"+topic[x]+"</td");                
        //$("#courseTable").append("<td>"+topic[x]+"</td");
        $("#courseTable").append("</tr>");
    }
});