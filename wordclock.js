/**
 * Defines the javascript for Wordclock
 *
 * This file is part of Wordclock.
 *
 * Wordclock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wordclock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * @category   Wordclock
 * @package    Wordclock
 * @author     Mike Quinn <mikeqtoo@blueyonder.co.uk>
 * @copyright  2011 Mike Quinn
 * @license    http://www.gnu.org/licenses/ GNU General Public License
 */
$(document).ready(function() {
   $('#wordclock>div div:first-child').css('text-align', 'left');
   $('#wordclock>div div:last-child').css('text-align', 'right');
   updateTime();
   var timer = setInterval("updateTime()", 5000);
});

function updateTime(){
    $('#wordclock div div:not(#fanfare)').removeClass('active');
    
    var theTime = new Date();
    var hour = theTime.getHours();
    var minute = theTime.getMinutes();
    var modHour = hour % 12;
    var modMinute = Math.floor(minute / 5);
    var adjMinute =  modMinute > 6 ? Math.abs((modMinute * 5) - 60) : modMinute * 5;
    
    if (modMinute === 0){ 
        $('#oclock').addClass('active');
    } else if (modMinute > 6) {
        $('#to').addClass('active');
        modHour += 1;
    } else {
        $('#past').addClass('active');
    }
    
    $('#hour-' + modHour + ".hour").addClass('active');
    
    switch (adjMinute) {
    case 0:
    case 15:
    case 30:
        $('#minute').removeClass('active');
        break;
    default:
        $('#minute').addClass('active');
    }
    
    if (adjMinute === 25) {
        $('#min-20, #min-5').addClass('active');
    } else {
        $('#min-' + adjMinute).addClass('active');
    }
}