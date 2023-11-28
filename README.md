# React Effects and Fetch: Pokémon API with Paging

This React application utilizes the Pokémon API to display a list of Pokémon in a paginated manner. The key features of the app include:

### 1. Header Section:

The app includes a styled header with the title "Pokemon API Data."
List Display:

Pokémon data is fetched from the API, and a list is rendered in the main section of the application.

### 2. Pagination:

The app provides navigation buttons ("Next Page" and "Previous Page") to browse through the list in increments of 20 Pokémon per page.
The "Next Page" button is disabled when on the last page to prevent unnecessary API calls.
The "Previous Page" button is hidden on the first page to enhance user experience.

### 3. Styling:

Styled components are used to structure and style the main content, header, list items, and pagination buttons.
Alternating row colors enhance the visual appeal of the list.

### 4. API Interaction:

The application fetches data from the Pokémon API based on the current page, using the fetch function and the API's pagination parameters.

### 5. Dynamic Page Count:

The total number of pages is dynamically calculated based on the total count of Pokémon received from the API.
Overall, the app provides a user-friendly interface to explore Pokémon data with efficient pagination and visually appealing styling.

## Development

### Run Locally

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open the displayed URL in a browser.
