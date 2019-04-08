//radio buttton selections
var displayRadios = document.getElementsByName('displayS');
var processorRadios = document.getElementsByName('processorS');
var hddRadios = document.getElementsByName('hddS');
var ramRadios = document.getElementsByName('ramS');
var _loop_1 = function () {
    var radio = displayRadios[i];
    var defaultRadio = displayRadios[0];
    var selectedRadio = document.querySelector('#display');
    var selectedRadio1 = document.querySelector('#d1');
    selectedRadio.innerHTML = defaultRadio.value;
    var clickFunc = function () {
        if (radio.checked) {
            selectedRadio.innerHTML = radio.value;
        }
    };
    radio.addEventListener('click', clickFunc);
};
for (var i = 0, length = displayRadios.length; i < length; i++) {
    _loop_1();
}
var _loop_2 = function () {
    var radio = processorRadios[i];
    var defaultRadio = processorRadios[0];
    var selectedRadio = document.querySelector('#processor');
    selectedRadio.innerHTML = defaultRadio.value;
    var clickFunc = function () {
        if (radio.checked) {
            selectedRadio.innerHTML = radio.value;
        }
    };
    radio.addEventListener('click', clickFunc);
};
for (var i = 0; i < processorRadios.length; i++) {
    _loop_2();
}
var _loop_3 = function () {
    var radio = hddRadios[i];
    var defaultRadio = hddRadios[0];
    var selectedRadio = document.querySelector('#hdd');
    selectedRadio.innerHTML = defaultRadio.value;
    var clickFunc = function () {
        if (radio.checked) {
            selectedRadio.innerHTML = radio.value;
        }
    };
    radio.addEventListener('click', clickFunc);
};
for (var i = 0, length = hddRadios.length; i < length; i++) {
    _loop_3();
}
var _loop_4 = function () {
    var radio = ramRadios[i];
    var defaultRadio = ramRadios[0];
    var selectedRadio = document.querySelector('#ram');
    selectedRadio.innerHTML = defaultRadio.value;
    var clickFunc = function () {
        if (radio.checked) {
            selectedRadio.innerHTML = radio.value;
        }
    };
    radio.addEventListener('click', clickFunc);
};
for (var i = 0, length = ramRadios.length; i < length; i++) {
    _loop_4();
}
//toggle between first and second page
var toggle = document.querySelector('#button');
function toggleFunction() {
    var firstPage = document.querySelector('.firstPage');
    var secondPage = document.querySelector('.secondPage');
    var customize = document.querySelector('#customize');
    var checkout = document.querySelector('#checkout');
    if (firstPage.style.display === "none") {
        firstPage.style.display = "block";
        customize.style.display = "block";
        secondPage.style.display = "none";
        checkout.style.display = "none";
    }
    else {
        firstPage.style.display = "none";
        customize.style.display = "none";
        secondPage.style.display = "block";
        checkout.style.display = "block";
    }
}
toggle.addEventListener('click', toggleFunction);
// scroll to make div in .selections hide / show
window.addEventListener("scroll", function (e) {
    // e.target represents the element being scrolled
    var container = e.target;
    // console.log(window.scrollY);
    // console.log(window.pageYOffset);
    // console.log("secondPoint " + window.pageYOffset * 0.375);
    // console.log("thirdPoint " + window.pageYOffset * 0.625);
    var scrolledValue = window.scrollY;
    var displaySelect = document.querySelector('.displaySelect');
    var processorSelect = document.querySelector('.processorSelect');
    var hddSelect = document.querySelector('.hddSelect');
    var ramSelect = document.querySelector('.ramSelect');
    // displaySelect.offsetHeight
    var firstPoint = 150;
    var secondPoint = 300;
    var thirdPoint = 450;
    // debugger
    if (scrolledValue > thirdPoint) {
        displaySelect.style.visibility = "hidden";
        processorSelect.style.visibility = "hidden";
        hddSelect.style.visibility = "hidden";
        ramSelect.style.visibility = "visible";
    }
    else if (scrolledValue > secondPoint) {
        displaySelect.style.visibility = "hidden";
        processorSelect.style.visibility = "hidden";
        hddSelect.style.visibility = "visible";
        ramSelect.style.visibility = "hidden";
    }
    else if (scrolledValue > firstPoint) {
        displaySelect.style.visibility = "hidden";
        processorSelect.style.visibility = "visible";
        hddSelect.style.visibility = "hidden";
        ramSelect.style.visibility = "hidden";
    }
    else {
        displaySelect.style.visibility = "visible";
        processorSelect.style.visibility = "hidden";
        hddSelect.style.visibility = "hidden";
        ramSelect.style.visibility = "hidden";
    }
});
