// TODO: 
//   Table for ingredients
//   Fix method
//   Include number of servings
//   Include equipment below or next to ingredients (use a table)
//   Store a recipe using localStorage for a day
//   Add a button to share recipe using permalink (query string with id parameter)
//     ⨽> Add functionality to get the recipe based on the id using the https://api.spoonacular.com/recipes/{id}/information endpoint
//   Add refresh button for recipe
//   Add a print button
//   Add a save button to save the image card using the https://api.spoonacular.com/recipes/{id}/card endpoint

let recipe; // allow the recipe to be accessed outside of the createPage function, for debugging

createPage();

async function createPage() { // allow use of await
    // temp recipes to use during development so as not to exceed quota
    let recipes = [{"recipes":[{"vegetarian":true,"vegan":false,"glutenFree":false,"dairyFree":false,"veryHealthy":false,"cheap":false,"veryPopular":false,"sustainable":false,"weightWatcherSmartPoints":8,"gaps":"no","lowFodmap":false,"aggregateLikes":130,"spoonacularScore":16.0,"healthScore":0.0,"creditsText":"Foodista.com – The Cooking Encyclopedia Everyone Can Edit","license":"CC BY 3.0","sourceName":"Foodista","pricePerServing":21.14,"extendedIngredients":[{"id":9003,"aisle":"Produce","image":"apple.jpg","consistency":"solid","name":"apple","nameClean":"apple","original":"2 cups chopped apple","originalName":"chopped apple","amount":2.0,"unit":"cups","meta":["chopped"],"measures":{"us":{"amount":2.0,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":473.176,"unitShort":"ml","unitLong":"milliliters"}}},{"id":18372,"aisle":"Baking","image":"white-powder.jpg","consistency":"solid","name":"baking soda","nameClean":"baking soda","original":"1 teaspoon baking soda","originalName":"baking soda","amount":1.0,"unit":"teaspoon","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":19334,"aisle":"Baking","image":"dark-brown-sugar.png","consistency":"solid","name":"brown sugar","nameClean":"golden brown sugar","original":"1 cup brown sugar","originalName":"brown sugar","amount":1.0,"unit":"cup","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"cup","unitLong":"cup"},"metric":{"amount":236.588,"unitShort":"ml","unitLong":"milliliters"}}},{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"solid","name":"butter","nameClean":"butter","original":"1/2 cup butter","originalName":"butter","amount":0.5,"unit":"cup","meta":[],"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,"unitShort":"ml","unitLong":"milliliters"}}},{"id":2010,"aisle":"Spices and Seasonings","image":"cinnamon.jpg","consistency":"solid","name":"cinnamon","nameClean":"cinnamon","original":"1 teaspoon cinnamon","originalName":"cinnamon","amount":1.0,"unit":"teaspoon","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":1123,"aisle":"Milk, Eggs, Other Dairy","image":"egg.png","consistency":"solid","name":"egg","nameClean":"egg","original":"1 egg","originalName":"egg","amount":1.0,"unit":"","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"","unitLong":""},"metric":{"amount":1.0,"unitShort":"","unitLong":""}}},{"id":20081,"aisle":"Baking","image":"flour.png","consistency":"solid","name":"flour","nameClean":"wheat flour","original":"2 cups flour","originalName":"flour","amount":2.0,"unit":"cups","meta":[],"measures":{"us":{"amount":2.0,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":473.176,"unitShort":"ml","unitLong":"milliliters"}}},{"id":2011,"aisle":"Spices and Seasonings","image":"cloves.jpg","consistency":"solid","name":"ground cloves","nameClean":"ground clove","original":"1/4 teaspoon ground cloves","originalName":"ground cloves","amount":0.25,"unit":"teaspoon","meta":[],"measures":{"us":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"}}},{"id":11111111,"aisle":"Baking","image":"vanilla-extract.jpg","consistency":"solid","name":"maple flavoring","nameClean":"maple flavoring","original":"1/4 teaspoon maple flavoring","originalName":"maple flavoring","amount":0.25,"unit":"teaspoon","meta":[],"measures":{"us":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"}}},{"id":1077,"aisle":"Milk, Eggs, Other Dairy","image":"milk.png","consistency":"liquid","name":"milk","nameClean":"milk","original":"1/4 cup milk","originalName":"milk","amount":0.25,"unit":"cup","meta":[],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":59.147,"unitShort":"ml","unitLong":"milliliters"}}},{"id":2025,"aisle":"Spices and Seasonings","image":"ground-nutmeg.jpg","consistency":"solid","name":"nutmeg","nameClean":"nutmeg","original":"1/4 teaspoon nutmeg","originalName":"nutmeg","amount":0.25,"unit":"teaspoon","meta":[],"measures":{"us":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"}}},{"id":19336,"aisle":"Baking","image":"powdered-sugar.jpg","consistency":"solid","name":"powdered sugar","nameClean":"powdered sugar","original":"1 cup powdered sugar","originalName":"powdered sugar","amount":1.0,"unit":"cup","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"cup","unitLong":"cup"},"metric":{"amount":236.588,"unitShort":"ml","unitLong":"milliliters"}}},{"id":2047,"aisle":"Spices and Seasonings","image":"salt.jpg","consistency":"solid","name":"salt","nameClean":"table salt","original":"1 teaspoon salt","originalName":"salt","amount":1.0,"unit":"teaspoon","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}}],"id":650939,"title":"Maple-Glazed Apple Cookies","readyInMinutes":45,"servings":18,"sourceUrl":"http://www.foodista.com/recipe/ZCJS73TL/maple-glazed-apple-cookies","image":"https://spoonacular.com/recipeImages/650939-556x370.jpg","imageType":"jpg","summary":"Maple-Glazed Apple Cookies might be just the dessert you are searching for. For <b>21 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. One serving contains <b>181 calories</b>, <b>2g of protein</b>, and <b>6g of fat</b>. This recipe from Foodista has 130 fans. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>vegetarian</b> diet. A mixture of apple, nutmeg, brown sugar, and a handful of other ingredients are all it takes to make this recipe so scrumptious. All things considered, we decided this recipe <b>deserves a spoonacular score of 16%</b>. This score is not so tremendous. Try <a href=\"https://spoonacular.com/recipes/maple-glazed-apple-crisp-cookies-621623\">Maple-Glazed Apple Crisp Cookies</a>, <a href=\"https://spoonacular.com/recipes/maple-glazed-apple-pie-435364\">Maple-Glazed Apple Pie</a>, and <a href=\"https://spoonacular.com/recipes/glazed-maple-cookies-141990\">Glazed Maple Cookies</a> for similar recipes.","cuisines":[],"dishTypes":["antipasti","starter","snack","appetizer","antipasto","hor d'oeuvre"],"diets":["lacto ovo vegetarian"],"occasions":[],"instructions":"<ol><li>Preheat oven to 400 degrees F.</li><li>Cream 1/2 cup butter and sugar together in a large mixing bowl until light in color, about 1-2 minutes. Add egg and 1/4 cup milk; stir to combine. Add remaining dry ingredients (except apple) and stir just until combined. Gently fold in the apples.  Drop by heaping tablespoons onto a greased baking sheet.</li><li>Bake at 400 for about 10-12 min or until tops don't look wet anymore.</li><li>To make the glaze, whisk together 1 tablespoon melted butter, 1 cup powdered sugar, 1/4 tsp maple flavoring, and 3 tablespoons milk in a small bowl. When the cookies have cooled for a few minutes, drizzle each cookie with glaze.</li></ol>","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Preheat oven to 400 degrees F.Cream 1/2 cup butter and sugar together in a large mixing bowl until light in color, about 1-2 minutes.","ingredients":[{"id":1001,"name":"butter","localizedName":"butter","image":"butter-sliced.jpg"},{"id":1053,"name":"cream","localizedName":"cream","image":"fluid-cream.jpg"},{"id":19335,"name":"sugar","localizedName":"sugar","image":"sugar-in-bowl.png"}],"equipment":[{"id":405907,"name":"mixing bowl","localizedName":"mixing bowl","image":"mixing-bowl.jpg"},{"id":404784,"name":"oven","localizedName":"oven","image":"oven.jpg","temperature":{"number":400.0,"unit":"Fahrenheit"}}],"length":{"number":2,"unit":"minutes"}},{"number":2,"step":"Add egg and 1/4 cup milk; stir to combine.","ingredients":[{"id":1077,"name":"milk","localizedName":"milk","image":"milk.png"},{"id":1123,"name":"egg","localizedName":"egg","image":"egg.png"}],"equipment":[]},{"number":3,"step":"Add remaining dry ingredients (except apple) and stir just until combined. Gently fold in the apples.  Drop by heaping tablespoons onto a greased baking sheet.","ingredients":[{"id":9003,"name":"apple","localizedName":"apple","image":"apple.jpg"}],"equipment":[{"id":404727,"name":"baking sheet","localizedName":"baking sheet","image":"baking-sheet.jpg"}]},{"number":4,"step":"Bake at 400 for about 10-12 min or until tops don't look wet anymore.To make the glaze, whisk together 1 tablespoon melted butter, 1 cup powdered sugar, 1/4 tsp maple flavoring, and 3 tablespoons milk in a small bowl. When the cookies have cooled for a few minutes, drizzle each cookie with glaze.","ingredients":[{"id":11111111,"name":"maple flavoring","localizedName":"maple flavoring","image":"vanilla-extract.jpg"},{"id":19336,"name":"powdered sugar","localizedName":"powdered sugar","image":"powdered-sugar.jpg"},{"id":10118192,"name":"cookies","localizedName":"cookies","image":"shortbread-cookies.jpg"},{"id":1001,"name":"butter","localizedName":"butter","image":"butter-sliced.jpg"},{"id":0,"name":"glaze","localizedName":"glaze","image":""},{"id":1077,"name":"milk","localizedName":"milk","image":"milk.png"}],"equipment":[{"id":404784,"name":"oven","localizedName":"oven","image":"oven.jpg"},{"id":404661,"name":"whisk","localizedName":"whisk","image":"whisk.png"},{"id":404783,"name":"bowl","localizedName":"bowl","image":"bowl.jpg"}],"length":{"number":12,"unit":"minutes"}}]}],"originalId":null,"spoonacularSourceUrl":"https://spoonacular.com/maple-glazed-apple-cookies-650939"}]},{"recipes":[{"vegetarian":false,"vegan":false,"glutenFree":true,"dairyFree":true,"veryHealthy":false,"cheap":false,"veryPopular":false,"sustainable":false,"weightWatcherSmartPoints":31,"gaps":"no","lowFodmap":false,"aggregateLikes":7,"spoonacularScore":71.0,"healthScore":24.0,"creditsText":"Foodista.com – The Cooking Encyclopedia Everyone Can Edit","license":"CC BY 3.0","sourceName":"Foodista","pricePerServing":253.63,"extendedIngredients":[{"id":1002030,"aisle":"Spices and Seasonings","image":"pepper.jpg","consistency":"solid","name":"black pepper","nameClean":"black pepper","original":"1 tsp. black pepper","originalName":"black pepper","amount":1.0,"unit":"tsp","meta":["black"],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":43382,"aisle":"Beverages","image":"cranberry-juice.jpg","consistency":"liquid","name":"cranberry juice","nameClean":"cranberry juice","original":"½ cup cranberry juice","originalName":"cranberry juice","amount":0.5,"unit":"cup","meta":[],"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,"unitShort":"ml","unitLong":"milliliters"}}},{"id":2015,"aisle":"Spices and Seasonings","image":"curry-powder.jpg","consistency":"solid","name":"curry powder","nameClean":"curry powder","original":"1 tsp. curry powder","originalName":"curry powder","amount":1.0,"unit":"tsp","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":1022020,"aisle":"Spices and Seasonings","image":"garlic-powder.png","consistency":"solid","name":"garlic powder","nameClean":"garlic powder","original":"1 tsp. garlic powder","originalName":"garlic powder","amount":1.0,"unit":"tsp","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":1002014,"aisle":"Spices and Seasonings","image":"ground-cumin.jpg","consistency":"solid","name":"ground cumin","nameClean":"cumin","original":"1 tsp. ground cumin","originalName":"ground cumin","amount":1.0,"unit":"tsp","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":11935,"aisle":"Condiments","image":"ketchup.png","consistency":"liquid","name":"ketchup","nameClean":"ketchup","original":"¼ cup ketchup","originalName":"ketchup","amount":0.25,"unit":"cup","meta":[],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":59.147,"unitShort":"ml","unitLong":"milliliters"}}},{"id":9206,"aisle":"Beverages","image":"orange-juice.jpg","consistency":"liquid","name":"orange juice","nameClean":"orange juice","original":"½ cup orange juice","originalName":"orange juice","amount":0.5,"unit":"cup","meta":[],"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,"unitShort":"ml","unitLong":"milliliters"}}},{"id":2047,"aisle":"Spices and Seasonings","image":"salt.jpg","consistency":"solid","name":"salt","nameClean":"table salt","original":"1 tsp. salt","originalName":"salt","amount":1.0,"unit":"tsp","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}},{"id":16124,"aisle":"Ethnic Foods;Condiments","image":"soy-sauce.jpg","consistency":"liquid","name":"soy sauce","nameClean":"soy sauce","original":"¼ cup soy sauce","originalName":"soy sauce","amount":0.25,"unit":"cup","meta":[],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":59.147,"unitShort":"ml","unitLong":"milliliters"}}},{"id":10088,"aisle":"Meat","image":"raw-pork-ribs.jpg","consistency":"solid","name":"spare ribs","nameClean":"spare ribs","original":"4 lbs. spare ribs","originalName":"spare ribs","amount":4.0,"unit":"lbs","meta":[],"measures":{"us":{"amount":4.0,"unitShort":"lb","unitLong":"pounds"},"metric":{"amount":1.814,"unitShort":"kilogram","unitLong":"kilograms"}}},{"id":2053,"aisle":"Oil, Vinegar, Salad Dressing","image":"vinegar-(white).jpg","consistency":"liquid","name":"vinegar","nameClean":"distilled white vinegar","original":"¼ cup vinegar (any kind)","originalName":"vinegar (any kind)","amount":0.25,"unit":"cup","meta":["(any kind)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":59.147,"unitShort":"ml","unitLong":"milliliters"}}},{"id":14412,"aisle":"Beverages","image":"water.png","consistency":"liquid","name":"water","nameClean":"water","original":"¼ cup water","originalName":"water","amount":0.25,"unit":"cup","meta":[],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":59.147,"unitShort":"ml","unitLong":"milliliters"}}}],"id":640349,"title":"Cranberry and Orange Juice Spareribs","readyInMinutes":210,"servings":4,"sourceUrl":"http://www.foodista.com/recipe/KND4S2Q4/cranberry-and-orange-juice-spareribs","image":"https://spoonacular.com/recipeImages/640349-556x370.jpg","imageType":"jpg","summary":"Cranberry and Orange Juice Spareribs might be a good recipe to expand your main course repertoire. Watching your figure? This gluten free, dairy free, and ketogenic recipe has <b>944 calories</b>, <b>52g of protein</b>, and <b>75g of fat</b> per serving. This recipe serves 4. For <b>$2.54 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. A mixture of ketchup, black pepper, garlic powder, and a handful of other ingredients are all it takes to make this recipe so scrumptious. 8 people were glad they tried this recipe. From preparation to the plate, this recipe takes approximately <b>3 hours and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 87%</b>, this dish is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cranberry-orange-juice-bread-515851\">Cranberry Orange Juice Bread</a>, <a href=\"https://spoonacular.com/recipes/cranberry-orange-juice-slushee-128682\">Cranberry-Orange Juice Slushee</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-sauce-with-orange-tangerine-and-pineapple-juice-128528\">Cranberry Sauce With Orange, Tangerine and Pineapple Juice</a>.","cuisines":[],"dishTypes":["lunch","main course","main dish","dinner"],"diets":["gluten free","dairy free"],"occasions":[],"instructions":"<ol><li>Combine all of the ingredients for the marinade in a bowl and stir.</li><li>Place ribs in the marinade and refrigerate for at least one hour or more or up to overnight.</li><li>Preheat oven to 325 degrees F.</li><li>Place the ribs in a roasting pan with the marinade.</li><li>Bake uncovered for 2 – 2 ½ hours or until the ribs are fall off the bone tender. Allow the marinade to evaporate in the cooking process.</li><li>Let the ribs cool slightly; then separate the ribs with a cooking scissor and plate.</li></ol>","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Combine all of the ingredients for the marinade in a bowl and stir.","ingredients":[{"id":0,"name":"marinade","localizedName":"marinade","image":"seasoning.png"}],"equipment":[{"id":404783,"name":"bowl","localizedName":"bowl","image":"bowl.jpg"}]},{"number":2,"step":"Place ribs in the marinade and refrigerate for at least one hour or more or up to overnight.Preheat oven to 325 degrees F.","ingredients":[{"id":0,"name":"marinade","localizedName":"marinade","image":"seasoning.png"},{"id":23236,"name":"ribs","localizedName":"ribs","image":"ribs.png"}],"equipment":[{"id":404784,"name":"oven","localizedName":"oven","image":"oven.jpg","temperature":{"number":325.0,"unit":"Fahrenheit"}}],"length":{"number":60,"unit":"minutes"}},{"number":3,"step":"Place the ribs in a roasting pan with the marinade.","ingredients":[{"id":0,"name":"marinade","localizedName":"marinade","image":"seasoning.png"},{"id":23236,"name":"ribs","localizedName":"ribs","image":"ribs.png"}],"equipment":[{"id":404629,"name":"roasting pan","localizedName":"roasting pan","image":"roasting-pan.jpg"}]},{"number":4,"step":"Bake uncovered for 2 – 2 ½ hours or until the ribs are fall off the bone tender. Allow the marinade to evaporate in the cooking process.","ingredients":[{"id":0,"name":"marinade","localizedName":"marinade","image":"seasoning.png"},{"id":0,"name":"bone","localizedName":"bone","image":""},{"id":23236,"name":"ribs","localizedName":"ribs","image":"ribs.png"}],"equipment":[{"id":404784,"name":"oven","localizedName":"oven","image":"oven.jpg"}]},{"number":5,"step":"Let the ribs cool slightly; then separate the ribs with a cooking scissor and plate.","ingredients":[{"id":23236,"name":"ribs","localizedName":"ribs","image":"ribs.png"}],"equipment":[]}]}],"originalId":null,"spoonacularSourceUrl":"https://spoonacular.com/cranberry-and-orange-juice-spareribs-640349"}]}];

    let apiKey = +[]+([]+[][(![]+[])[+!![]]+(!![]+[])[+[]]])[!![]+!![]+!![]]+([]+[][(![]+[])[+!![]]+(!![]+[])[+[]]])[!![]+!![]+!![]]+(!![]+!![])+(!![]+!![]+!![]+!![]+!![]+!![]+!![])+(![]+[])[+!![]]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!![]+!![]+!![]+!![]+!![]+!![])+(![]+[])[+[]]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(+!![])+(!![]+!![]+!![]+!![])+(!![]+!![]+!![]+!![])+(![]+[])[+[]]+([][[]]+[])[!![]+!![]]+(!![]+!![]+!![]+!![]+!![]+!![]+!![])+([]+[][(!![]+[])[!![]+!![]+!![]]+([][[]]+[])[+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([![]]+[][[]])[+!![]+[+[]]]+(!![]+[])[!![]+!![]+!![]]+(![]+[])[!![]+!![]+!![]]]())[!![]+!![]]+(+!![])+([]+[][(![]+[])[+!![]]+(!![]+[])[+[]]])[!![]+!![]+!![]]+(!![]+!![])+(!![]+!![]+!![])+([][[]]+[])[!![]+!![]]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!![]+!![])+(!![]+!![]+!![]+!![])+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+([]+[][(!![]+[])[!![]+!![]+!![]]+([][[]]+[])[+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([![]]+[][[]])[+!![]+[+[]]]+(!![]+[])[!![]+!![]+!![]]+(![]+[])[!![]+!![]+!![]]]())[!![]+!![]]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+([][[]]+[])[!![]+!![]]+([]+[][(!![]+[])[!![]+!![]+!![]]+([][[]]+[])[+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([![]]+[][[]])[+!![]+[+[]]]+(!![]+[])[!![]+!![]+!![]]+(![]+[])[!![]+!![]+!![]]]())[!![]+!![]]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!![]+!![]+!![]);

    // use this for development
    //let recipe = recipes[Math.floor(Math.random()*recipes.length)].recipes[0];

    // use fetch to get random recipe when development is finished. currently only one recipe is being requested per page load. 
    /*let */recipe = (await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`).then(r => r.json())).recipes[0];

    // recipe title
    document.title = recipe.title;

    appendElement('h1', recipe.title);

    // display image of recipe
    let recipeImg = document.createElement('img');
    recipeImg.src = recipe.image;
    document.body.appendChild(recipeImg);

    // recipe description - already in html format
    let recipeDesc = document.createElement('p');
    // TODO: change links in summary (they are all for suggested items) to links pointing to equivalent page on this site or at least a link that isn't broken. 
    recipeDesc.innerHTML = recipe.summary;
    document.body.appendChild(recipeDesc);

    // ingredients
    // TODO: Change to a table
    appendElement('h2', 'Ingredients');
    let ingredientList = document.createElement('ul');
    ingredientList.style = "padding:1.5em"; // replace automatic indent
    for (let ingredient of recipe.extendedIngredients) appendElement('li', ingredient.original, ingredientList, `list-style-type:none;padding-left:3em;background-size:contain;background-repeat:no-repeat;background-image:url('https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}')`);
    document.body.appendChild(ingredientList);

    // method (already an ordered list) (not). 
    // TODO: 
    //    Use recipe.analyzedInstructions[0].steps[i].equipment[j].temperature to correctly convert temperature to Celsius if required
    //    Parse recipe.instructions (check for <ol> or \n configuration)
    //    Check if recipe.instructions has a greater of steps than recipe.analyzedInstructions[0].steps (if they are the same, use the analyzedInstructions)
    //    Use recipe.instructions if true, or recipe.analyzedInstructions[0].steps if false
    appendElement('h2', 'Method');
    // convert fahrenheit to celsius
    document.body.innerHTML += recipe.instructions.replace(/(\d+) degrees F/gi, (m, t) => `${~~((t-32)*5/9)} degrees C`);

    let sourcePara = appendElement('p', 'Source: ', null, 'margin-top:50px');
    // Display the name of the source. If no name is present, use the bare domain of the sourceUrl (i.e. www.example.com becomes example.com)
    appendElement('a', recipe.creditsText || recipe.sourceName || (new URL(recipe.sourceUrl)).hostname.replace('www.',(m,o)=>o==0?'':'www.'), sourcePara).href = recipe.sourceUrl;
    sourcePara.appendChild(document.createTextNode(' via '));
    appendElement('a', 'spoonacular.com', sourcePara).href = recipe.spoonacularSourceUrl;
};

function appendElement(type, content, parent, style) {
    parent ??= document.body;
    let element = document.createElement(type);
    if (style) element.style = style;
    element.appendChild(typeof content === 'string' ? document.createTextNode(content) : content);
    parent.appendChild(element);
    return element;
}
