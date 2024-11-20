// BAR

function showSidebar() {
    let sidebar = document.querySelector(".listcom");
    sidebar.style.display = "flex";
  }

  function hideside() {
    let sidebar = document.querySelector(".listcom");
    sidebar.style.display = "none";
  } 

  // list of recipes

  const recipes = ["Mashed banana with milk : Mash one banana and mix it with half a cup of milk.",
    "Yogurt with fruit : Add strawberry slices to a cup of yogurt .",
    "Vegitable soup : Boil potatoes and carrots, then mash them thooroughly",
    "Ricee pudding : Cook rice with milk and sugar for a light dessert",
    "Mashed apple : Boil a small apple and mash it well"
  ];


  function generateRecipe(){
    const recipeContainer = document.getElementById("recipe");
    const randomIndex = Math.floor(Math.random()*5);
    recipeContainer.textContent=recipes[randomIndex];
  }