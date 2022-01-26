 //map
 var map = L.map('map').setView([44.29241581989995, -32.59037473917721], 2.2);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);
 
 //map markers
 var france = L.marker([48, 2.3]).addTo(map) //France
 var mexico = L.marker([19, -99]).addTo(map) //mexico
 var algonquin = L.marker([45.8, -78.3]).addTo(map) // algonquin park
 var ireland = L.marker([53.2, -9]).addTo(map)


function mexicoClick() {  //clears pictures, adds mexico pictures
   francePics.style.display = 'none';
   algonPics.style.display = 'none'
   picFrame.style.display = 'block'
   mexicoPics.style.display = 'block';

 }
 
 function franceClick() {  //clears pictures, adds france pictures
   mexicoPics.style.display = 'none';
   algonPics.style.display = 'none'
   picFrame.style.display = 'block'
   francePics.style.display = 'block';
  }

 function algonquinClick() {  //clears pics, adds algonquin pics
   mexicoPics.style.display = 'none';
   francePics.style.display = 'none'
   picFrame.style.display = 'block'
   algonPics.style.display = 'block'
 }

 function irelandClick() {
   mexicoPics.style.display = 'none';
   francePics.style.display = 'none'
   picFrame.style.display = 'block'
   irelandPics.style.display = 'block'
 }

 

 mexico.on('click', mexicoClick)
 france.on('click', franceClick)
 algonquin.on('click', algonquinClick)