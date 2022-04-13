$(function () {
  const body = document.body;
  let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 154) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});
});




// slick on service_slider:
$(function () {
  $('.slick_main_ss').slick({
    dots: false,
    prevArrow: '.prev',
    nextArrow: '.next',
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});



 // mixitUp on All Category Porduct:
  $(function () {
    var containerEl = document.querySelector('.mixitup_container');
    var mixer = mixitup(containerEl);
  });



  // countdodwn js, on Deal of the week:
  $(function () {
    (function () {
      const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
      
      let birthday = "April 2, 2023 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {
      
      let now = new Date().getTime(),
      distance = countDown - now;
      document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
      //do something later when date is reached
      if (distance < 0) {
      let headline = document.getElementById("headline"),
      countdown = document.getElementById("countdown"),
      content = document.getElementById("content");
  
      headline.innerText = "It's my birthday!";
      countdown.style.display = "none";
      content.style.display = "block";
  
      clearInterval(x);
      }
      //seconds
      }, 0)
      }());
  });

// price range js in category page:
$(function () {
  $("#slider-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [0, 10000],
    step: 100,
  
    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }
      
      $("#min_price").val(ui.values[0]);
      $("#max_price").val(ui.values[1]);
    }
  });
  
});
  

  

  