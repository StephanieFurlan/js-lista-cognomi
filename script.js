var surnameList = ["Imlach", "Dinsey","Newhouse", "Beaten", "Dudny", "Butteris", "Richfield", "Gooly", "Trelevan", "Bauser", "Empson","Belsher", "Potteril", "Demke", "Shirley", "Crean", "Tranfield", "Fishpond", "Polycote", "Splevin", "Inworth", "McQuilkin", "Sheekey", "Sharland", "Braycotton", "Marsham", "Stambridge", "Simek", "Salterne", "Cornuau", "Lockton", "Yurkin", "Brenneke", "Costelloe", "O'Lenechan", "Ringham", "Casaccio"];


// alphabetic sort
function customSort(list){
   list.sort(function (a, b) {
       if ( a.toLowerCase() < b.toLowerCase() ) {
           return -1;
       } else if ( a.toLowerCase() > b.toLowerCase() ) {
           return 1;
       } else {
           return 0;
       }
   } )
}

function displayList(list) {
   document.getElementById("surname-list__body").innerHTML = "";
   var index = 0;
   for (var i = 0; i < list.length; i++) {
      var dataIndex = document.createElement('li');
      var indexItem = document.createTextNode(i + 1);
      dataIndex.appendChild(indexItem);
      document.getElementById("surname-list__body").appendChild(dataIndex);

      var dataSurname = document.createElement('li');
      var surnameItem = document.createTextNode(list[i]);
      dataSurname.appendChild(surnameItem);
      document.getElementById("surname-list__body").appendChild(dataSurname);
   }
}

// first sort array and display;
customSort(surnameList);
displayList(surnameList);

// on click add surname
var add = document.getElementById("add-surname");
add.addEventListener("click", function() {

   var surname = document.getElementById("surname").value;

   //check for empty strings
   if( surname.length == 0) {
      alert("ERROR: Surname not provided!");
   } else {
      // add surname
      surnameList.push(surname);
      // sort surname list
      customSort(surnameList);
      // display ordered surname list
      displayList(surnameList);
      // display position
      var i = surnameList.indexOf(surname);
      document.getElementById("add-container").innerHTML = "Your surname is at " + (i+1) + " position in the list.";
   }

   document.getElementById("surname").value = "";

})
