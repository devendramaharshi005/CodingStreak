{
  /*
Problem 19: Counting Sundays

You are given the following information, but you may prefer to do some research for yourself.

    1 Jan 1900 was a Monday.
    Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
    A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
Tests

Waiting: countingSundays(1943, 1946) should return a number.
Waiting: countingSundays(1943, 1946) should return 6.
Waiting: countingSundays(1995, 2000) should return 10.
Waiting: countingSundays(1901, 2000) should return 171.

*/
}

// ----------------------------- SOLUTION -----------------------------

// function countingSundays(startYear, endYear) {
//     let sundaysCount = 0;
//     let startDate = new Date(startYear, 0, 1); // January 1st
//     let endDate = new Date(endYear, 11, 31); // December 31st

//     while (startDate <= endDate) {
//         if (startDate.getDay() === 0 && startDate.getDate() === 1) {
//             sundaysCount++;
//         }
//         startDate.setDate(startDate.getDate() + 1);
//     }

//     return sundaysCount;
// }

// ----------------------------- MY SOLUTION ----------------------------- // 1 jan 1900 was monday
// what is the day on 1 jan 1901? = tuesday?? -right
// what is the pattern of first day of month in a normal year?
// lets denote the days of month with numbers ranging [0-6] in which 0 was sunday.

function yearsFirstDay(year) {
  if (year < 1901 && year > 2000) return -1;

  let initialDay = 2;

  for (let currentYear = 1901; currentYear < year; currentYear++) {
    if (currentYear % 4 === 0) {
      initialDay = (initialDay + 2) % 7;
    } else {
      initialDay = (initialDay + 1) % 7;
    }
  }

  return initialDay;
}



// x= day on 1 Jan normal year
// total 12 months are there.
// 4 months are having 30 days [September, April, June and November.]
// 7 months are having 31 days [Jan, March, May, July, Aug, Oct, Dec  ]
// 1 month Feb having the [28 or 29 days] --> leap = 29 else normal = 28

// what is the pattern of first day of month in a normal year?

// representing the days as per the 1 day of month
// [x, (x+31)%7, (x+31+28)%7, (x+31+28+31)%7, (x+31+28+31+30)%7,  (x+31+28+31+30+31)%7, (x+31+28+31+30+31+30)%7 , (x+31+28+31+30+31+30+31)%7, (x+31+28+31+30+31+30+31+31)%7, (x+31+28+31+30+31+30+31+31+30)%7 , (x+31+28+31+30+31+30+31+31+30+31)%7,(x+31+28+31+30+31+30+31+31+30+31+30)%7]

// make it more simplified.
// [x, (x+3)%7, (x+3)%7,(x+6)%7, (x+1)%7, (x+4)%7, (x+6)%7, (x+2)%7, (x+5)%7 , x%7, (x+3)%7, (x+5)%7]

//arrange in the sorted order
// [x%7, x%7, (x+1)%7, (x+2)%7, (x+3)%7 , (x+3)%7, (x+3)%7, (x+4)%7, (x+5)%7, (x+5)%7, (x+6)%7, (x+6)%7 ]

// now for leap the year pattern
// [x, (x+3)%7, (x+4)%7,(x)%7, (x+2)%7, (x+5)%7, (x)%7, (x+3)%7, (x+6)%7 , (x+1)%7, (x+4)%7, (x+6)%7  ]

//arrange in the sorted order
// [x%7, x%7, x%7, (x+1)%7, (x+2)%7, (x+3)%7 , (x+3)%7, (x+4)%7, (x+4)%7, (x+5)%7, (x+6)%7, (x+6)%7 ]

// x is the first day of the year 1-jan-yyyy and can only be in range of [0-6] where 0:sunday,1:monday.....

function firstDaySundaysForEachMonth(x, currentYear) {
  let months = [];
  if (currentYear % 4 === 0) {
    months = [
      x % 7,
      x % 7,
      x % 7,
      (x + 1) % 7,
      (x + 2) % 7,
      (x + 3) % 7,
      (x + 3) % 7,
      (x + 4) % 7,
      (x + 4) % 7,
      (x + 5) % 7,
      (x + 6) % 7,
      (x + 6) % 7,
    ];
  } else {
    months = [
      x % 7,
      x % 7,
      (x + 1) % 7,
      (x + 2) % 7,
      (x + 3) % 7,
      (x + 3) % 7,
      (x + 3) % 7,
      (x + 4) % 7,
      (x + 5) % 7,
      (x + 5) % 7,
      (x + 6) % 7,
      (x + 6) % 7,
    ];
  }

  //console.log(months)
  return months.reduce((acc, ele) => {
    if (ele % 7 === 0) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

function countingSundays(firstYear, lastYear) {
  let sundaysCount = 0;

  for (let currentYear = firstYear; currentYear <= lastYear; currentYear++) {
    const x = yearsFirstDay(currentYear);
    sundaysCount += firstDaySundaysForEachMonth(x, currentYear);
  }

  return sundaysCount;
}

// ------------------------------------- ADDITIONAL INFO ---------------------------------------

//1900 was not a leap year
//2000 is leap year.
//and each 4 years leap year comes
//for example :  [1904, 1908, 1912,.......]

// ------------------------------------- TEST CASES ---------------------------------------

//console.log(yearsFirstDay(1940))
//console.log("sundays in test range",countingSundays(1943, 1946));
//console.log("sundays in test range",countingSundays(1995, 2000));
//console.log("sundays in test range",countingSundays(1901, 2000));
