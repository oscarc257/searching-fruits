// // input: The search input field.
// suggestions: The unordered list (ul) inside the suggestions container.
// searchButton: The button element used to select a random fruit.

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const searchButton = document.querySelector('button.search-button');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Filters the fruit array to find fruits that include the given string str (case-insensitive), and returns the results.
function search(str) {
	let results = [];

    //Filters out the values of  fruits in array to match results as true, otherwise it will append an empty value.
    // fruit.filter(fruit => fruit.toLocaleLowerCase().includes(str) ? results.push(fruit) : null);
	results = fruit.filter(fruit => fruit.toLocaleLowerCase().includes(str));

    //Returns Results  
	return results;
}

// Handles the keyup event on the input field, retrieves the user input, searches for matching fruits, and displays the suggestions.
function searchHandler(e) {
	//store and extract lowercase keyup values as a string
	const inputVal = e.target.value.toLowerCase();
	//store and match user input to fruit
	const results = search(inputVal);
	//show matching fruit in dropdown menu else reset suggestions if no user input
	inputVal ? showSuggestions(results) : suggestions.innerText = "";
}

// Displays up to five suggestions from the search results as list items.
function showSuggestions(results, inputVal) {
	// Clear previous suggestions
	suggestions.innerHTML = '';
	//displays abbreviated results--up to first five elements
	const MAX_NUM_RESULTS = 5;
	//userinput to display suggestions upon user keyup events
	if (results.length > 0){
		
		for (let i = 0; i < results.length && i < MAX_NUM_RESULTS; i++){
			//created new list item element
			const newLi = document.createElement("li");
			//innerText of <li> set to index item in results array
			newLi.innerText = results[i];
			//list item element appended to suggestions
			suggestions.appendChild(newLi);
		}
	}
}

// Handles the click event on the suggestions list, sets the input value to the clicked suggestion, and clears the suggestions list.
function useSuggestion(e) {
	//click to access fruit suggestion value
	fruitVal = e.target.innerText;
	//value attribute of search bar is assigned fruit value
	input.value = fruitVal;
	//reset suggestions
	suggestions.innerText = "";
}

// Selects a random fruit from the array, sets the input value to the selected fruit, and clears any existing suggestions.
function btnSelect(){
	let ranIndex = Math.floor(Math.random() * fruit.length);
	let selFruit = fruit[ranIndex];
	if(suggestions.firstChild){
		while(suggestions.firstChild){
			suggestions.removeChild(suggestions.lastChild);
		}
	}
	input.value = selFruit;
}

// Adds event listeners to handle keyup events on the input field, click events on the suggestions list, and click events on the search button.
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
searchButton.addEventListener('click', btnSelect);



