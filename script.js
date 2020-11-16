var surnameList = ["Imlach", "Dinsey","Newhouse", "Beaten", "Dudny", "Butteris", "Richfield", "Gooly", "Trelevan", "Bauser", "Empson","Belsher", "Potteril", "Demke", "Shirley", "Crean", "Tranfield", "Fishpond", "Polycote", "Splevin", "Inworth", "McQuilkin", "Sheekey", "Sharland", "Braycotton", "Marsham", "Stambridge", "Simek", "Salterne", "Cornuau", "Lockton", "Yurkin", "Brenneke", "Costelloe", "O'Lenechan", "Ringham", "Casaccio"];



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
      surnameList.sort(function (a, b) {
          if ( a.toLowerCase() < b.toLowerCase() ) {
              return -1;
          } else if ( a.toLowerCase() > b.toLowerCase() ) {
              return 1;
          } else {
              return 0;
          }
      } )

      var index = 0;
      for (var i = 0; i < surnameList.length; i++) {
         var tr = document.createElement('tr');

         var tdIndex = document.createElement('td');
         var tdSurname = document.createElement('td');

         var indexItem = document.createTextNode(i + 1);
         var surnameItem = document.createTextNode(surnameList[i]);

         tdIndex.appendChild(indexItem);
         tdSurname.appendChild(surnameItem);
         tr.appendChild(tdIndex);
         tr.appendChild(tdSurname);


         if (surnameList[i] == surname) {
            tr.setAttribute("id", "added");
            document.getElementById("surnameList").appendChild(tr);
            document.getElementById("add-container").innerHTML = "Your surname is at " + (i+1) + " position in the list.";
         } else {
            document.getElementById("surnameList").appendChild(tr);
         }
      }




   }
})
