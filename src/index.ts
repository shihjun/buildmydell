//radio buttton selections
const displayRadios = document.getElementsByName('displayS');
const processorRadios = document.getElementsByName('processorS');
const hddRadios = document.getElementsByName('hddS');
const ramRadios = document.getElementsByName('ramS');


for (var i = 0, length = displayRadios.length; i < length; i++) {
  const radio = displayRadios[i]
  const defaultRadio = displayRadios[0]
  const selectedRadio = document.querySelector('#display')
  const selectedRadio1 = document.querySelector('#d1')
  selectedRadio.innerHTML = defaultRadio.value

  const clickFunc = () => {
    if (radio.checked) {
      selectedRadio.innerHTML = radio.value
    }
  }
  radio.addEventListener('click', clickFunc)


  // const hoverFunc = () => {
  //   if (radio.checked) {
  //     radio.style.backgroundColor = 'green'
  //   } else {
  //     radio.style.backgroundColor = 'red'
  //   }
  // }
  // radio.addEventListener('mouseover', hoverFunc)


  // const leaveFunc = () => {
  //   selectedRadio1.style.backgroundColor = '#007db8'
  // }
  // radio.addEventListener('mouseout', leaveFunc)
}

for (var i = 0; i < processorRadios.length; i++) {
  const radio = processorRadios[i]
  const defaultRadio = processorRadios[0]
  const selectedRadio = document.querySelector('#processor')
  selectedRadio.innerHTML = defaultRadio.value
  const clickFunc = () => {
    if (radio.checked) {
      selectedRadio.innerHTML = radio.value
    }
  }
  radio.addEventListener('click', clickFunc)
}

for (var i = 0, length = hddRadios.length; i < length; i++) {
  const radio = hddRadios[i]
  const defaultRadio = hddRadios[0]
  const selectedRadio = document.querySelector('#hdd')
  selectedRadio.innerHTML = defaultRadio.value
  const clickFunc = () => {
    if (radio.checked) {
      selectedRadio.innerHTML = radio.value
    }
  }
  radio.addEventListener('click', clickFunc)
}

for (var i = 0, length = ramRadios.length; i < length; i++) {
  const radio = ramRadios[i]
  const defaultRadio = ramRadios[0]
  const selectedRadio = document.querySelector('#ram')
  selectedRadio.innerHTML = defaultRadio.value
  const clickFunc = () => {
    if (radio.checked) {
      selectedRadio.innerHTML = radio.value
    }
  }
  radio.addEventListener('click', clickFunc)
}



//toggle between first and second page
const toggle = document.querySelector('#button');


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
  } else {
    firstPage.style.display = "none";
    customize.style.display = "none";
    secondPage.style.display = "block";
    checkout.style.display = "block";
  }
}
toggle.addEventListener('click', toggleFunction)



// scroll to make div in .selections hide / show

window.addEventListener("scroll", e => {
  // e.target represents the element being scrolled
  const container = e.target;

  // console.log(window.scrollY);
  // console.log(window.pageYOffset);
  // console.log("secondPoint " + window.pageYOffset * 0.375);
  // console.log("thirdPoint " + window.pageYOffset * 0.625);

  var scrolledValue = window.scrollY

  const displaySelect: HTMLBodyElement = document.querySelector('.displaySelect');
  const processorSelect: HTMLBodyElement = document.querySelector('.processorSelect');
  const hddSelect: HTMLBodyElement = document.querySelector('.hddSelect');
  const ramSelect: HTMLBodyElement = document.querySelector('.ramSelect');

  // displaySelect.offsetHeight

  var firstPoint = 125;
  var secondPoint = 375;
  var thirdPoint = 625;
  // debugger

  if (scrolledValue > thirdPoint) {
    displaySelect.style.visibility = "hidden";
    processorSelect.style.visibility = "hidden";
    hddSelect.style.visibility = "hidden";
    ramSelect.style.visibility = "visible";
  } else if (scrolledValue > secondPoint) {
    displaySelect.style.visibility = "hidden";
    processorSelect.style.visibility = "hidden";
    hddSelect.style.visibility = "visible";
    ramSelect.style.visibility = "hidden";
  } else if (scrolledValue > firstPoint) {
    displaySelect.style.visibility = "hidden";
    processorSelect.style.visibility = "visible";
    hddSelect.style.visibility = "hidden";
    ramSelect.style.visibility = "hidden";
  } else {
    displaySelect.style.visibility = "visible";
    processorSelect.style.visibility = "hidden";
    hddSelect.style.visibility = "hidden";
    ramSelect.style.visibility = "hidden";
  }
});

