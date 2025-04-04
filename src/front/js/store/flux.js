const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			baseUrlStarwars: "https://www.swapi.tech/api",
			characters: [],
			planets: [],
			starships: [],
			currentCharacter: {},
			currentPlanet: {},
			currentStarship: {},
			favorites: [],
			paginationCharacter: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setCurrentCharacter: (value) => { setStore({ currentCharacter: value})},
			setCurrentPlanet: (value) => { setStore({ currentPlanet: value})},
			setCurrentStarship: (value) => { setStore({ currentStarship: value})},
			
			getCharacters: async () => {
				
				const savedCharacters = localStorage.getItem('characters');
				const savedPages = localStorage.getItem('paginationCharacter');
				
				if (savedCharacters && savedPages) {
					
					setStore({
						characters: JSON.parse(savedCharacters),
						paginationCharacter: JSON.parse(savedPages)
					});
					return; 
				}
				
				try {
					const response = await fetch('https://www.swapi.tech/api/people');
					
					if (!response.ok) {
						throw new Error('La API no respondió bien');
					}
					
					const data = await response.json();
					
					const pagination = [{
						page: 1,
						link: 'https://www.swapi.tech/api/people?page=1&limit=10',
						previous: null,
						next: data.next || null
					}];
					
					setStore({
						characters: data.results,
						paginationCharacter: pagination
					});
					
					localStorage.setItem('characters', JSON.stringify(data.results));
					localStorage.setItem('paginationCharacter', JSON.stringify(pagination));
					
				} catch (error) {
					console.error('Ocurrió un error:', error);
					setStore({
						error: 'No se pudieron cargar los personajes'
					});
				}
			},

			getCharacter: async (id) => {
				const uri = `${getStore().baseUrlStarwars}/people/${id}`;
				const options = {
					method: "GET"
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log("error:", response.status, response.statusText);
				}
				const data = await response.json();
				setStore( {currentCharacter: data.result.properties})
			},

			getPlanets: async () => {
				if (localStorage.getItem('planets')) {
					setStore( { planets: JSON.parse(localStorage.getItem('planets'))} );
					return
				}
				const uri = `${getStore().baseUrlStarwars}/planets`;
				const options = {
					method: "GET"
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log("error:", response.status, response.statusText);
				}
				const data = await response.json();
				setStore({planets: data.results});
				localStorage.setItem('planets', JSON.stringify(data.results))
			},

			getPlanet: async (id) => {
				const uri = `${getStore().baseUrlStarwars}/planets/${id}`;
				const options = {
					method: "GET"
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log("error:", response.status, response.statusText);
				}
				const data = await response.json();
				setStore( {currentPlanet: data.result.properties})
			},

			getStarships: async () => {
				if (localStorage.getItem('starships')) {
					setStore( { starships: JSON.parse(localStorage.getItem('starships'))} );
					return
				}
				const uri = `${getStore().baseUrlStarwars}/starships`;
				const options = {
					method: "GET"
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log("error:", response.status, response.statusText);
				}
				const data = await response.json();
				setStore({starships: data.results});
				localStorage.setItem('starships', JSON.stringify(data.results))
			},

			getStarship: async (id) => {
				const uri = `${getStore().baseUrlStarwars}/starships/${id}`;
				const options = {
					method: "GET"
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log("error:", response.status, response.statusText);
				}
				const data = await response.json();
				setStore( {currentStarship: data.result.properties})
			},
			
			addFavorite: (item) => {
				const store = getStore();  
				const favoriteItem = {
					uid: item.uid,
					name: item.name,
					type: item.type, 
				};
				setStore({
					...store,
					favorites: [...store.favorites, favoriteItem],
				});
			},
			
			removeFavorite: (name, type) => {
				const store = getStore();  
				setStore({
					...store,
					favorites: store.favorites.filter((fav) => fav.name != name),
				});
			},
		}
	};
};

export default getState;
