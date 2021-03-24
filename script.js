function zero_first_format(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
function date_time() {
  var current_datetime = new Date();
  var day = zero_first_format(current_datetime.getDate());
  var month = zero_first_format(current_datetime.getMonth() + 1);
  var year = current_datetime.getFullYear();
  var hours = zero_first_format(current_datetime.getHours());
  var minutes = zero_first_format(current_datetime.getMinutes());
  var seconds = zero_first_format(current_datetime.getSeconds());

  return (
    day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
  );
}
setInterval(function () {
  document.getElementById("date-time").innerHTML = date_time();
}, 1000);
function task(inputTask){
	var task = document.createElement("div");
	task.className = "notcomp__task";
	task.innerHTML = inputTask.value;

	var trash = document.createElement("i");
	trash.addEventListener("click", function () {
		fadeOut(task);
	});
	trash.classList.add("bi", "bi-trash");

	var check = document.createElement("i");
	check.classList.add("bi", "bi-check-circle");
	check.addEventListener("click", function () {
		task.className = "comp__task";
		task.style.opacity = 0;
		document.getElementById("comp").append(task);
		check.classList.remove("bi", "bi-check-circle");
		fadeIn(task);
	});

	task.append(trash, check);
	task.style.opacity = 0;
	document.getElementById("notcomp").append(task);
	fadeIn(task);
	inputTask.value = "";
}
function taskCreate() {
	var inputTask = document.getElementById("input-task");
	var buttonClick = document.getElementById("button-addon2");
  inputTask.onkeyup = function (e) {
    if (e.key == "Enter" && inputTask.value != "") {
			task(inputTask);
    }
  };
	buttonClick.onmousedown = function(e) {
		if (e.button === 0 && inputTask.value != ""){
			task(inputTask);
		}
	}
}

function fadeOut(el) {
  var opacity = 1;
  var timer = setInterval(function () {
    if (opacity <= 0.1) {
      clearInterval(timer);
      el.style.display = "none";
    }
    el.style.opacity = opacity;
    opacity -= opacity * 0.1;
  }, 10);
}

function fadeIn(el) {
  var opacity = 0.01;
  el.style.display = "block";
  var timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    el.style.opacity = opacity;
    opacity += opacity * 0.1;
  }, 10);
}
