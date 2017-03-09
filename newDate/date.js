// 获取国际时区时间
Date.prototype.toString = function(str){
  var year = this.getFullYear();
  var mouth = this.getMonth() + 1;
  var day = this.getDate();
  var hour = this.getHours();
  var minutes = this.getMinutes();
  var second = this.getSeconds();
  str = str.replace("yyyy",year);
  str = str.replace(/MM/g,mouth);
  str = str.replace(/dd/g,day);
  str = str.replace(/hh/g,hour);
  str = str.replace(/mm/g,minutes);
  str = str.replace(/ss/g,second);
  return str;
}
// 获取国际化时间
Date.prototype.getUTCDate = function (){
  var hour = this.getUTCHours();
  this.setHours(hour);
  return this;
}
// 改变年
Date.prototype.addYear = function (year){
  var thisYear = this.getFullYear();
  thisYear = thisYear + year;
  this.setFullYear(thisYear);
  return this;
}
// 改变月份
Date.prototype.addMouth = function (mouth){
  var thisMonth = this.getMonth();
  thisMonth = thisMonth + mouth;
  if(thisMonth >= 11){
    var addYear = parseInt(thisMonth / 11);
    this.addYear(addYear);
    thisMonth = (thisMonth % 11) - 1;
    this.setMonth(thisMonth);
  }else if(thisMonth <= 0){
    var addYear = parseInt((-thisMonth) / 11) + 1;
    this.addYear(-addYear);
    thisMonth = 12 - (-thisMonth) % 11;
    this.setMonth(thisMonth);
  }else{
    this.setMonth(thisMonth);
  }
  return this;
}
// 天数加增加
Date.prototype.addDay = function (day){
  var thisDay = this.getDate();
  thisDay = thisDay + day;
  this.setDate(thisDay);
  return this;
}

// 改变小时
Date.prototype.addHour = function (hour){
  var thisHour = this.getHours();
  thisHour = thisHour + hour;
  this.setDate(thisHour);
  return this;
}
// 改变分
Date.prototype.addMinutes = function (minute){
  var thisMinutes = this.getMinutes()
  thisMinutes = thisMinutes + minute;
  this.setDate(thisMinutes);
  return this;
}
// 改变秒
Date.prototype.addSeconds = function (second){
  var thisSeconds = this.getSeconds();
  thisSeconds = thisSeconds + second;
  this.setDate(thisSeconds);
  return this;
}
