var topic=[
    "課程介紹", //topic[0]
    "不上課",
    "不上課",
    "亂數選擇、自動排課",
    "不上課",
    "心理測驗"
]


var startDate=new Date();
//月份是由0~11
function setMonthAndDay(startMonth,startDay)//會輸入兩筆資料//輸入2/21
{
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);//2月-1,電腦才知道是1月
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

           
setMonthAndDay(2,21);


