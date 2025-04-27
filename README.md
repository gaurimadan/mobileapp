## Key Features

* **Responsive Layout:** Adapts to different screen sizes, providing a consistent experience on desktop and mobile devices.
* **Mobile Navigation Sidebar:** A slide-down sidebar from the top provides navigation on smaller screens, accessible via a menu icon.
* **Clear Header:** Displays logo and market indices (hidden on mobile).
* **Open Orders Section:**
    * Displays a list of open orders with relevant details (time, client, ticker, side, product, quantity, price, actions).
    * Visually distinguishes between buy and sell orders (green for buy, red for sell).
    * Indicates live orders with a pulsing blue dot.
* **Filtering and Search:**
    * Allows filtering by active tickers (displayed as removable pills).
    * Provides a search input to find specific stocks, futures, options, or indices.
    * Client ID selection dropdown.
* **Order Actions:** A placeholder for order-specific actions (e.g., modify, cancel) represented by a "More Vertical" icon.
* **Download Option:** A button to download the open orders data.
* **"Cancel All" Functionality:** A button to trigger the cancellation of all open orders (currently logs to the console).
* **Pagination:** Implemented for handling a large number of orders, with "Previous," "Next," and page number buttons, along with an indicator of the current range of orders being viewed.

## Technologies Used

* **Next.js:** A React framework for building server-rendered and static web applications.
* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapid styling.
* **Heroicons (via `react-icons`):** A library of free SVG icons for common UI elements.
* **TypeScript:** A superset of JavaScript that adds static typing.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4.  Open your browser and navigate to `http://localhost:3000`.

## Further Improvements

* **API Integration:** Connect the front-end to a real-time trading API to fetch and manage actual order data.
* **Advanced Filtering and Sorting:** Implement more sophisticated filtering options (by product, side, status, etc.) and sorting capabilities for the order list.
* **Real-time Updates:** Use WebSockets or a similar technology to provide real-time updates to the order list.
* **Order Modification/Cancellation:** Implement the functionality for modifying and canceling individual orders.
* **User Authentication:** Add user authentication and authorization.
* **Error Handling:** Implement robust error handling for API requests and user interactions.
* **Testing:** Write unit and integration tests to ensure the reliability of the application.
* **UI/UX Refinements:** Continuously iterate on the UI/UX based on user feedback and best practices.
