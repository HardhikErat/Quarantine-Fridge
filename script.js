let food = [
  {
    name: "avocado",
    src: "http://brezomadrid.es/Codepen-resources/img/food/avocado.png"
  },
  {
    name: "banana",
    src: "http://brezomadrid.es/Codepen-resources/img/food/banana.png"
  },
  {
    name: "carrot",
    src: "http://brezomadrid.es/Codepen-resources/img/food/carrot.png"
  },
  {
    name: "cheese",
    src: "http://brezomadrid.es/Codepen-resources/img/food/cheese.png"
  },
  {
    name: "chicken",
    src: "http://brezomadrid.es/Codepen-resources/img/food/chicken.png"
  },
  {
    name: "garlic",
    src: "http://brezomadrid.es/Codepen-resources/img/food/garlic.png"
  },
  {
    name: "onion",
    src: "http://brezomadrid.es/Codepen-resources/img/food/onion.png"
  },
  {
    name: "eggs",
    src: "http://brezomadrid.es/Codepen-resources/img/food/eggs.png"
  },
  {
    name: "honey",
    src: "http://brezomadrid.es/Codepen-resources/img/food/honey.png"
  },
  {
    name: "lamb",
    src: "http://brezomadrid.es/Codepen-resources/img/food/lamb.png"
  },
  {
    name: "lentils",
    src: "http://brezomadrid.es/Codepen-resources/img/food/lentils.png"
  },
  {
    name: "lettuce",
    src: "http://brezomadrid.es/Codepen-resources/img/food/lettuce.png"
  },
  {
    name: "milk",
    src: "http://brezomadrid.es/Codepen-resources/img/food/milk.png"
  },
  {
    name: "mushrooms",
    src: "http://brezomadrid.es/Codepen-resources/img/food/mushrooms.png"
  },
  {
    name: "olive_oil",
    src: "http://brezomadrid.es/Codepen-resources/img/food/olive-oil.png"
  },
  {
    name: "pepper",
    src: "http://brezomadrid.es/Codepen-resources/img/food/peppers.png"
  },
  {
    name: "potatoes",
    src: "http://brezomadrid.es/Codepen-resources/img/food/potatoes.png"
  },
  {
    name: "prawns",
    src: "http://brezomadrid.es/Codepen-resources/img/food/prawns.png"
  },
  {
    name: "salmon",
    src: "http://brezomadrid.es/Codepen-resources/img/food/salmon.png"
  },
  {
    name: "spaghettis",
    src: "http://brezomadrid.es/Codepen-resources/img/food/spaghettis.png"
  },
  {
    name: "strawberries",
    src: "http://brezomadrid.es/Codepen-resources/img/food/strawberries.png"
  },
  {
    name: "sugar",
    src: "http://brezomadrid.es/Codepen-resources/img/food/sugar.png"
  },
  {
    name: "tomato",
    src: "http://brezomadrid.es/Codepen-resources/img/food/tomato.png"
  },
  {
    name: "tuna",
    src: "http://brezomadrid.es/Codepen-resources/img/food/tuna.png"
  }
];
let shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
let fillFridge = (div, arr) => {
  shuffle(arr);
  div.innerHTML = '';
  arr.forEach(function (item, index) {
    div.innerHTML += "<img alt=" + item.name + " src=" + item.src + " />";
    if(index == 4) {
      div.innerHTML += "<br><br>";
    }
  });
};
let openTheDoor = (el) => {
  el.classList.toggle("open-door");
};

fillFridge(document.getElementById("food"), food);

document.querySelectorAll(".door").forEach((item) => {
  item.addEventListener("click", (event) => {
    let openDoor = document.querySelector(".open-door");
    if (openDoor !== null) {
      openTheDoor(openDoor);
    } else {
      openTheDoor(item);
      fillFridge(document.getElementById("food"), food);
    }
  });
});