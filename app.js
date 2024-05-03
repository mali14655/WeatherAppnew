document.querySelector('.srh2').addEventListener('click', myfun);
document.querySelector('.srh').addEventListener('click', myfun);


function myfun() {


  funTime();
  callAPI();

  // Animation 
  let imageElement = document.querySelector('.image1');

  imageElement.classList.add('image');
  imageElement.classList.remove('image');
  void imageElement.offsetWidth; // force the browser to remove the class and show instant effect before execution of next
  imageElement.classList.add('image');



}


// 1st Function

function funTime() {

  // date,days and months conversion
  //0=sunday;
  //0=january;

  function convertdate() {
    let dat = new Date();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = days[dat.getDay()];
    let date = dat.getDate();
    let month = months[dat.getMonth()];

    // getting suffixes

    let suf;

    if (date == 1 || date == 21 || date == 31) {
      suf = "st";
    } else if (date == 2 || date == 22) {
      suf = "nd";
    } else if (date == 3 || date == 23) {
      suf = "rd";
    } else {
      suf = "th";
    }

    return `${day},${date}${suf} ${month}`;
  }




  // setting time

  function time() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let suf;


    if (hour >= 12) {
      suf = "PM";
    } else {
      suf = "AM";
    }


    // making 0 as 00 and 1 as 01 and so on....
    if (minutes >= 0 && minutes <= 9) {
      switch (minutes) {
        case 0:
          minutes = '00';
          break;
        case 1:
          minutes = '01';
          break;
        case 2:
          minutes = '02';
          break;
        case 3:
          minutes = '03';
          break;
        case 4:
          minutes = '04';
          break;
        case 5:
          minutes = '05';
          break;
        case 6:
          minutes = '06';
          break;
        case 7:
          minutes = '07';
          break;
        case 8:
          minutes = '08';
          break;
        case 9:
          minutes = '09';
          break;
      }
    }

    // Converting time to 12hours;

    switch (hour) {
      case 13:
        hour = 1;
        break;

      case 14:
        hour = 2;

        break;

      case 15:
        hour = 3;
        break;

      case 16:
        hour = 4;

        break;

      case 17:
        hour = 5;

        break;

      case 18:
        hour = 6;
        break;

      case 19:
        hour = 7;
        break;

      case 20:
        hour = 8;
        break;

      case 21:
        hour = 9;
        break;

      case 22:
        hour = 10;

        break;

      case 23:
        hour = 11;

        break;

      case 24:
        hour = 12;

        break;
      case 0:
        hour = 12;
        break;
      default:

        break;
    }

    return `${hour}:${minutes} ${suf}`
  }



  // Showing that date and time on DOM;

  document.querySelector('.Time').innerHTML = time();
  document.querySelector(".date").innerHTML = convertdate();

  setTimeout(funTime, 1000)

}



// 2nd Function

function callAPI() {

  // Rendering API  
  let city2 = document.querySelector('.city2').value;
  let city = document.querySelector('.city').value;
  if (city2 != "") {
    let apiKey = '67154e343515dfafe0b2595e7ce5cb19'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=metric`)
      .then(function (response) {
        // console.log(response)
        // console.log(response.data.timezone)

        document.querySelector('.location').innerHTML = response.data.name;
        document.querySelector('.condition').innerHTML = response.data.weather[0].main;
        document.querySelector('.temp').innerHTML = `${Math.trunc(response.data.main.temp)}°`;
        document.querySelector('.winds').innerHTML = `${response.data.wind.speed} m/s`;
        document.querySelector('.humd').innerHTML = `${response.data.main.humidity}%`;
        document.querySelector('.visb').innerHTML = `${((response.data.visibility) / 1000).toFixed(1)}Km`;
        // id in the weather entity is actually the number assigned to a weather condition

        let id = response.data.weather[0].id;

        // using that id to show icons accordingly; 

        if (id >= 200 && id <= 232) {
          document.querySelector('.img').src = "01d@2x.png";

        }

        else if (id >= 300 && id <= 321) {
          document.querySelector('.img').src = "09d@2x.png";

        }
        else if (id >= 500 && id <= 504 && dayNight() == 'day') {
          document.querySelector('.img').src = "10d@2x.png";

        }
        else if (id >= 500 && id <= 504 && dayNight() == 'night') {
          document.querySelector('.img').src = "10n@2x.png";

        }
        else if (id == 511) {
          document.querySelector('.img').src = "13d@2x.png";

        }
        else if (id >= 520 && id <= 531) {
          document.querySelector('.img').src = "09d@2x.png";

        }
        else if (id >= 600 && id <= 622) {
          document.querySelector('.img').src = "13d@2x.png";

        }
        else if (id >= 701 && id <= 781) {
          document.querySelector('.img').src = "50d@2x.png";

        }
        else if (id == 800 && dayNight() == 'day') {
          document.querySelector('.img').src = "01d@2x.png";

        }
        else if (id == 800 && dayNight() == 'night') {
          document.querySelector('.img').src = "01n@2x.png";

        }
        else if (id == 801 && dayNight() == 'day') {
          document.querySelector('.img').src = "02d@2x.png";

        }
        else if (id == 801 && dayNight() == 'night') {
          document.querySelector('.img').src = "02n@2x.png";

        }
        else if (id == 802 && dayNight() == 'day') {
          document.querySelector('.img').src = "03d@2x.png";

        }
        else if (id == 802 && dayNight() == 'night') {
          document.querySelector('.img').src = "03n@2x.png";

        }
        else if (id == 803 && dayNight() == 'day') {
          document.querySelector('.img').src = "04d@2x.png";

        }
        else if (id == 803 && dayNight() == 'night') {
          document.querySelector('.img').src = "04n@2x.png";

        }
        else if (id == 804 && dayNight() == 'day') {
          document.querySelector('.img').src = "04d@2x.png";

        }
        else {
          document.querySelector('.img').src = "04n@2x.png";

        }

        // console.log(dayNight())

        // function to find if it is day or night
        // dt is actually the time at which thses conditions were observed or recorded
        // current time accroding to the location is good approach
        function dayNight() {
          let recTime = response.data.dt;
          let sunr = response.data.sys.sunrise;
          let suns = response.data.sys.sunset;
          let DayOrNight;
          // console.log((new Date(recTime*1000)));


          if (recTime > sunr && recTime < suns) {
            DayOrNight = "day";

          }
          else {
            DayOrNight = "night"
          }
          return DayOrNight;
        }
      })

      .catch(function (error) {
        document.querySelector('.location').innerHTML = 'NotValid';
        // alert('Enter valid City name');
        console.log(error)
      })

    document.querySelector('.city2').value = '';

  }

  if (city != "") {
    let apiKey = '67154e343515dfafe0b2595e7ce5cb19'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(function (response) {
        // console.log(response)
        // console.log(response.data.timezone)

        document.querySelector('.location').innerHTML = response.data.name;
        document.querySelector('.condition').innerHTML = response.data.weather[0].main;
        document.querySelector('.temp').innerHTML = `${Math.trunc(response.data.main.temp)}°`;
        document.querySelector('.winds').innerHTML = `${response.data.wind.speed} m/s`;
        document.querySelector('.humd').innerHTML = `${response.data.main.humidity}%`;
        document.querySelector('.visb').innerHTML = `${((response.data.visibility) / 1000).toFixed(1)}Km`;
        // id in the weather entity is actually the number assigned to a weather condition

        let id = response.data.weather[0].id;

        // using that id to show icons accordingly; 

        if (id >= 200 && id <= 232) {
          document.querySelector('.img').src = "01d@2x.png";

        }

        else if (id >= 300 && id <= 321) {
          document.querySelector('.img').src = "09d@2x.png";

        }
        else if (id >= 500 && id <= 504 && dayNight() == 'day') {
          document.querySelector('.img').src = "10d@2x.png";

        }
        else if (id >= 500 && id <= 504 && dayNight() == 'night') {
          document.querySelector('.img').src = "10n@2x.png";

        }
        else if (id == 511) {
          document.querySelector('.img').src = "13d@2x.png";

        }
        else if (id >= 520 && id <= 531) {
          document.querySelector('.img').src = "09d@2x.png";

        }
        else if (id >= 600 && id <= 622) {
          document.querySelector('.img').src = "13d@2x.png";

        }
        else if (id >= 701 && id <= 781) {
          document.querySelector('.img').src = "50d@2x.png";

        }
        else if (id == 800 && dayNight() == 'day') {
          document.querySelector('.img').src = "01d@2x.png";

        }
        else if (id == 800 && dayNight() == 'night') {
          document.querySelector('.img').src = "01n@2x.png";

        }
        else if (id == 801 && dayNight() == 'day') {
          document.querySelector('.img').src = "02d@2x.png";

        }
        else if (id == 801 && dayNight() == 'night') {
          document.querySelector('.img').src = "02n@2x.png";

        }
        else if (id == 802 && dayNight() == 'day') {
          document.querySelector('.img').src = "03d@2x.png";

        }
        else if (id == 802 && dayNight() == 'night') {
          document.querySelector('.img').src = "03n@2x.png";

        }
        else if (id == 803 && dayNight() == 'day') {
          document.querySelector('.img').src = "04d@2x.png";

        }
        else if (id == 803 && dayNight() == 'night') {
          document.querySelector('.img').src = "04n@2x.png";

        }
        else if (id == 804 && dayNight() == 'day') {
          document.querySelector('.img').src = "04d@2x.png";

        }
        else {
          document.querySelector('.img').src = "04n@2x.png";

        }

        // console.log(dayNight())

        // function to find if it is day or night
        // dt is actually the time at which thses conditions were observed or recorded
        // current time accroding to the location is good approach
        function dayNight() {
          let recTime = response.data.dt;
          let sunr = response.data.sys.sunrise;
          let suns = response.data.sys.sunset;
          let DayOrNight;
          // console.log((new Date(recTime*1000)));


          if (recTime > sunr && recTime < suns) {
            DayOrNight = "day";

          }
          else {
            DayOrNight = "night"
          }
          return DayOrNight;
        }
      })

      .catch(function (error) {
        document.querySelector('.location').innerHTML = 'NotValid';
        // alert('Enter valid City name');
        console.log(error)
      })

    document.querySelector('.city').value = '';


  }
}












