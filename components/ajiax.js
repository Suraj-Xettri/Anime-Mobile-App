export async function fetchInitialDeals() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
        const json = await response.json(); // Await the JSON parsing
        return json; // Check the structure of the response
    } catch (error) {
        console.log('Error fetching data:', error);
        throw error; // Optionally rethrow the error if needed
    }
}
