
# Salati

Salati is a React application designed to help users keep track of prayer times, weather conditions, and Islamic dates. The app fetches prayer times and weather data for a specified city and displays the time remaining until the next prayers.

## Features

- **Real-time Prayer Timings**: Displays the current and next prayer times with the time remaining until each.
- **City Search**: Allows users to search for cities within Morocco to fetch relevant prayer times and weather information.
- **Hijri and Gregorian Date Display**: Shows the current Islamic and Gregorian dates.
- **Weather Data**: Fetches and displays the current temperature and real feel, along with weather icons.
- **Daily Aya**: Includes a section displaying a Quranic verse.

## Demo

Check out the live demo [here](https://rel-isma.github.io/salati/).

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/salati.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd salati
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm start
    ```

The app should now be running on `http://localhost:3000`.

## Usage

1. **Search for a City**: Type a city name in the search bar to get prayer times and weather data for that city.
2. **View Prayer Timings**: The app will display the current and next prayer times, along with the remaining time.
3. **Check the Weather**: See the current temperature, real feel, and an icon representing the weather.
4. **Navigate Dates**: Use the date navigation to fetch prayer times for previous or future dates.
5. **Daily Quranic Verse**: A verse from the Quran is displayed at the bottom of the page.

## Code Structure

The application is organized as follows:

- **`src/components/`**: Contains the main components such as `ContainerSearchApp`, `ContainerWeatherApp`, `ContainerNowTime`, etc.
- **`src/styles/`**: Includes all CSS modules for styling components.
- **`src/utils/`**: Contains utility functions for handling data processing.

## API Usage

The app uses the following APIs:

- **[Aladhan API](https://aladhan.com/prayer-times-api)**: Fetches prayer times based on the selected city.
- **[OpenWeatherMap API](https://openweathermap.org/api)**: Fetches weather data including temperature and weather icons.

## Error Handling

- If the city is not found, an error message is displayed.
- In case of any unexpected issues during data fetching, appropriate error messages are shown.

## Future Enhancements

- **Multi-City Support**: Allow users to track prayer times and weather for multiple cities.
- **Localization**: Add support for multiple languages.
- **Dark Mode**: Implement a dark mode theme for the app.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

For your README file, you can include a section that specifies the programming languages and technologies used in the application. Here’s a template you might use:

## Technologies Used

This application is built using a combination of the following technologies:

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript that adds type safety.
- **CSS Modules**: For modular and scoped styling of React components.

### Backend
- **Axios**: A promise-based HTTP client for making API requests.

### Libraries
- **moment.js**: A JavaScript library for parsing, validating, manipulating, and formatting dates.
- **OpenWeatherMap API**: Provides weather data.
- **Aladhan API**: Provides prayer timings data.

### Development
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter.

## Contact

- **Name**: Rachid El ismaiyly
- **Email**: relismaiyly@gmail.com
- **GitHub**: https://github.com/rel-isma

