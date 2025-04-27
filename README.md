## Project Structure

├── components/
│   └── MobileSidebar.tsx      // Mobile navigation sidebar component
├── pages/
│   └── index.tsx              // Main page component
├── public/
│   └── image.png              // Placeholder logo image
├── styles/
│   └── globals.css            // Global styles (Tailwind CSS import)
├── tailwind.config.js         // Tailwind CSS configuration
├── postcss.config.js          // PostCSS configuration
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

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


