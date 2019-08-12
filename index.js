// <--- 12 Hour Clock Code --->

window.onload = function () {
    clock();

    function clock() {
        var now = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var mid = 'PM';
        if (min < 10) {
            min = "0" + min;
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (hour == 0) {
            hour = 12;
        }
        if (TwentyFourHour < 12) {
            mid = 'AM';
        }
        document.getElementById('currentTime').innerHTML = hour + ':' + min + ':' + sec + ' ' + mid;
        setTimeout(clock, 1000);
    }
}

// Full Date Code

(function () {

    var current = new Date();

    var DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function display_date(moment) {

        var dayOfWeek = moment.getDay(),
            month = moment.getMonth(),
            year = moment.getFullYear(),
            day = moment.getDate();

        dayOfWeek = DaysOfWeek[dayOfWeek];
        month = Months[month];

        switch (day) {
            case 1:
                day = day + "st";
                break;
            case 2:
                day = day + "nd";
                break;
            case 3:
                day = day + "rd";
                break;
            case 21:
                day = day + "st";
                break;
            case 22:
                day = day + "nd";
                break;
            case 23:
                day = day + "rd";
                break;
            case 31:
                day = day + "st";
                break;
            default:
                day = day + "th";
        }

        d.innerHTML = dayOfWeek;
        m.innerHTML = day + " " + "Of" + " " + month;
        y.innerHTML = year;

    }

    display_date(current);

    window.setInterval(function () {

        var now = new Date();
        display_date(now);

    }, 1000);

}());

var particles = Particles.init({
	selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  connectParticles: true
});