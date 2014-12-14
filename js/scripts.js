var wrpH = $(window).height() - 80
$('.wrap').height(wrpH);

var fullDate = new Date()
console.log(fullDate);
//Thu May 19 2011 17:25:38 GMT+1000 {}
  
//convert month to 2 digits
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
  

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var nMonth = month[fullDate.getMonth()];


var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var day = weekday[fullDate.getDay()];


var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
console.log(currentDate);

var time = fullDate.getHours() + ":" + fullDate.getMinutes();
var date = fullDate.getDate();
var month = fullDate.getMonth();
var year = fullDate.getFullYear();
$('.time').html(time);
$('.dd').html(date);
$('.mm').html(nMonth);
$('.yy').html(year);
$('.ee').html(day);
 
        $(document).ready(function(){
            
            
            $('.folder-nav').hover(function(){
                $(this).stop().animate({ 'width':"220px" },750)
            }, function(){
                     $(this).stop().animate({ 'width':"60px" },200);
                })
            
           // var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tortor nisi. Aenean sodales diam ac lacus elementum scelerisque. Suspendisse a dui vitae lacus faucibus venenatis vel id nisl. Proin orci ante, ultricies nec interdum at, iaculis venenatis nulla. ';

            $('.player').ttwMusicPlayer(myPlaylist, {
                autoPlay:false, 
                //description:description,
                jPlayer:{
                    swfPath:'jquery-jplayer' //You need to override the default swf path any time the directory structure changes
                }
            });
        });
    