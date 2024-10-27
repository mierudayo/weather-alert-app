import { FC } from 'react'

type IconProps = {
    type:
        | '404'
        | 'Blizzard'
        | 'Blowing snow'
        | 'Clear'
        | 'Cloudy'
        | 'Error'
        | 'Flag'
        | 'Fog'
        | 'Freezing drizzle'
        | 'Freezing fog'
        | 'Heavy freezing drizzle'
        | 'Heavy rain'
        | 'Heavy rain at times'
        | 'Heavy snow'
        | 'Humidity'
        | 'Ice pellets'
        | 'Light drizzle'
        | 'Light freezing rain'
        | 'Light rain'
        | 'Light rain shower'
        | 'Light showers of ice pellets'
        | 'Light sleet'
        | 'Light sleet showers'
        | 'Light snow'
        | 'Light snow showers'
        | 'Mist'
        | 'Moderate or heavy freezing rain'
        | 'Moderate or heavy rain shower'
        | 'Moderate or heavy rain with thunder'
        | 'Moderate or heavy showers of ice pellets'
        | 'Moderate or heavy sleet'
        | 'Moderate or heavy sleet showers'
        | 'Moderate or heavy snow with thunder'
        | 'Moderate or heavy snow showers'
        | 'Moderate rain'
        | 'Moderate rain at times'
        | 'Moderate snow'
        | 'Overcast'
        | 'Partly Cloudy'
        | 'Patchy freezing drizzle possible'
        | 'Patchy heavy snow'
        | 'Patchy light drizzle'
        | 'Patchy light rain'
        | 'Patchy light rain with thunder'
        | 'Patchy light snow'
        | 'Patchy light snow with thunder'
        | 'Patchy moderate snow'
        | 'Patchy rain nearby'
        | 'Patchy rain possible'
        | 'Patchy sleet possible'
        | 'Patchy snow possible'
        | 'Search'
        | 'Sunny'
        | 'Thundery outbreaks possible'
        | 'Torrential rain shower'
        | 'Wind'
}

const Icon: FC<IconProps> = ({ type }) => {
    const blizzard = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path
                        fill="#b5b5b5"
                        d="M10.5,18h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L9,18.707V19.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L7.293,18H6.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L8,16.293V15.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L9.707,17H10.5C11.145,17,11.145,18,10.5,18z"
                    ></path>
                    <path
                        fill="#b5b5b5"
                        d="M16.5,18h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L15,18.707V19.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L13.293,18H12.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L14,16.293V15.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L15.707,17H16.5C17.145,17,17.145,18,16.5,18z"
                    ></path>
                    <path
                        stroke="#b5b5b5"
                        strokeWidth="1.25"
                        fill="#e7e7e7"
                        d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    ></path>
                </g>
            </g>
        </svg>
    )

    const clear = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                    stroke="#4e67bc"
                    strokeWidth="1.056"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
        </svg>
    )

    const cloudy = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#b5b5b5"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 249.002 249.002"
            xmlSpace="preserve"
            stroke="#b5b5b5"
            strokeWidth="0.00249002"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M185.496,83.545c-1.475,0-2.952,0.051-4.425,0.151c-4.725-11.404-12.63-21.543-22.705-28.993 c-12.166-8.997-26.673-13.752-41.952-13.752c-38.455,0-69.74,30.658-69.74,68.343c0,0.365,0.003,0.732,0.01,1.101 C20.669,111.989,0,133.26,0,159.176c0,26.95,22.35,48.875,49.822,48.875h135.674c35.017,0,63.506-27.927,63.506-62.253 C249.002,111.471,220.513,83.545,185.496,83.545z M185.496,193.051H49.822C30.621,193.051,15,177.855,15,159.176 c0-18.68,15.621-33.878,34.822-33.878c1.183,0,2.5,0.089,4.147,0.281c2.313,0.271,4.624-0.553,6.247-2.225 c1.624-1.672,2.378-4.003,2.041-6.309c-0.387-2.65-0.583-5.258-0.583-7.752c0-29.413,24.556-53.343,54.74-53.343 c24.021,0,45.589,15.657,52.449,38.076c1.102,3.6,4.696,5.832,8.415,5.201c2.696-0.453,5.461-0.683,8.217-0.683 c26.746,0,48.506,21.198,48.506,47.254C234.002,171.854,212.242,193.051,185.496,193.051z"></path>
            </g>
        </svg>
    )

    const drizzle = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M6,17 L5,19 M10,17 L9,19 M14,17 L13,19 M18,17 L17,19"
                    fill="none"
                    stroke="#6ed7e7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
            </g>
        </svg>
    )

    const error = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            stroke="#000000"
            strokeWidth="0.00064"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <title></title>
                <path
                    fill="#000000"
                    d="M18,6.5A1.5,1.5,0,1,0,16.5,5,1.5,1.5,0,0,0,18,6.5Zm0-2a.5.5,0,1,1-.5.5A.5.5,0,0,1,18,4.5Z"
                ></path>
                <circle fill="#000000" cx="22" cy="5" r="1"></circle>
                <circle fill="#000000" cx="14" cy="5" r="1"></circle>
                <path
                    fill="#000000"
                    d="M32,18.5A14.5,14.5,0,1,0,46.5,33,14.51,14.51,0,0,0,32,18.5Zm0,27A12.5,12.5,0,1,1,44.5,33,12.52,12.52,0,0,1,32,45.5Z"
                ></path>
                <path
                    fill="#000000"
                    d="M62.2,56.54A33.69,33.69,0,0,0,51.32,45.43a2,2,0,0,0-2.26.09L47.49,44A18.95,18.95,0,0,0,35,14.26V5a5,5,0,0,0-5-5H6A5,5,0,0,0,1,5V9a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1v2a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1V59a5,5,0,0,0,5,5H30a5,5,0,0,0,5-5V51.74a19,19,0,0,0,9.1-4.1l1.42,1.42a2,2,0,0,0-.09,2.26A33.69,33.69,0,0,0,56.54,62.2l.63.63a4,4,0,0,0,5.66-5.66ZM60.15,57l-1.56,1.57L57,60.15c-.72-.46-1.41-.95-2.08-1.45l1.88-1.88a.5.5,0,0,0-.71-.71l-2,2c-.52-.42-1-.86-1.52-1.31l4.18-4.17A32.45,32.45,0,0,1,60.15,57ZM49,33A17,17,0,0,1,33.89,49.89l-.44,0C33,50,32.49,50,32,50a17,17,0,0,1,0-34c.49,0,1,0,1.45.07l.44,0A17,17,0,0,1,49,33ZM6,2H30a3,3,0,0,1,3,2.5H30a4.34,4.34,0,0,0-3.35,1.65A3.45,3.45,0,0,1,24,7.5H12A3.45,3.45,0,0,1,9.35,6.15,4.34,4.34,0,0,0,6,4.5H3.05A3,3,0,0,1,6,2ZM33,52v7a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V5.5H6A3.45,3.45,0,0,1,8.65,6.85,4.34,4.34,0,0,0,12,8.5H24a4.34,4.34,0,0,0,3.35-1.65A3.45,3.45,0,0,1,30,5.5h3V14l-1,0a19,19,0,0,0-16.37,9.41L12,20.8a3.46,3.46,0,1,0-.63.78l3.79,2.7a18.87,18.87,0,0,0,2,20.47L12.55,48a2.5,2.5,0,0,0-1.05,2v2.52a3.5,3.5,0,1,0,1,0V50a1.49,1.49,0,0,1,.63-1.22l4.61-3.3A18.94,18.94,0,0,0,32,52ZM9,21.5A2.5,2.5,0,1,1,11.5,19,2.5,2.5,0,0,1,9,21.5Zm3,32A2.5,2.5,0,1,1,9.5,56,2.5,2.5,0,0,1,12,53.5Zm34.89-8.73,1.44,1.44-2.12,2.12L44.84,47A19.26,19.26,0,0,0,46.89,44.77Zm.24,5.47,3.12-3.12a32.12,32.12,0,0,1,5.85,4.76L51.88,56.1A31.73,31.73,0,0,1,47.13,50.24ZM61.41,61.41a2,2,0,0,1-2.82,0l2.82-2.82a2,2,0,0,1,0,2.82Z"
                ></path>
                <path
                    fill="#000000"
                    d="M33.23,25a1.55,1.55,0,0,0-2.46,0L23.44,35.61A2.16,2.16,0,0,0,25.21,39H38.79a2.16,2.16,0,0,0,1.77-3.39Zm5.7,11.89a.15.15,0,0,1-.14.09H25.21a.15.15,0,0,1-.14-.09.16.16,0,0,1,0-.16l6.92-10,6.92,10A.16.16,0,0,1,38.93,36.91Z"
                ></path>
                <path
                    fill="#000000"
                    d="M32,29.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,1,0V30A.5.5,0,0,0,32,29.5Z"
                ></path>
                <path
                    fill="#000000"
                    d="M32.19,34.54a.5.5,0,0,0-.38,0,.53.53,0,0,0-.27.27.43.43,0,0,0,0,.19.47.47,0,0,0,.15.35.36.36,0,0,0,.16.11.47.47,0,0,0,.38,0,.36.36,0,0,0,.16-.11.48.48,0,0,0,0-.7A.36.36,0,0,0,32.19,34.54Z"
                ></path>
                <path
                    fill="#000000"
                    d="M43.65,13.35a.48.48,0,0,0,.7,0l2-2a.49.49,0,1,0-.7-.7l-2,2A.48.48,0,0,0,43.65,13.35Z"
                ></path>
                <path
                    fill="#000000"
                    d="M48.78,13.55l-2,1a.5.5,0,0,0,.22.95.54.54,0,0,0,.22-.05l2-1a.5.5,0,0,0-.44-.9Z"
                ></path>
                <path
                    fill="#000000"
                    d="M42.5,11V9a.5.5,0,0,0-1,0v2a.5.5,0,0,0,1,0Z"
                ></path>
            </g>
        </svg>
    )

    const flag = (
        <svg
            className="w-10 h-10 text-gray-800 dark:text-white"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            xmlSpace="preserve"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#1e40af"
                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                ></path>
            </g>
        </svg>
    )

    const fourOfour = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            stroke="#000000"
            strokeWidth="0.0006000000000000001"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path d="M9,39h6v8c0,0.552,0.448,1,1,1s1-0.448,1-1v-8h3c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1 v2h-5V27c0-0.552-0.448-1-1-1s-1,0.448-1,1v11C8,38.552,8.448,39,9,39z"></path>
                    <path d="M40,39h6v8c0,0.552,0.448,1,1,1s1-0.448,1-1v-8h3c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3v-2c0-0.552-0.448-1-1-1 s-1,0.448-1,1v2h-5V27c0-0.552-0.448-1-1-1s-1,0.448-1,1v11C39,38.552,39.448,39,40,39z"></path>
                    <path d="M29.5,48c3.584,0,6.5-2.916,6.5-6.5v-9c0-3.584-2.916-6.5-6.5-6.5S23,28.916,23,32.5v9C23,45.084,25.916,48,29.5,48z M25,32.5c0-2.481,2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5v9c0,2.481-2.019,4.5-4.5,4.5S25,43.981,25,41.5V32.5z"></path>
                    <path d="M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z"></path>
                    <polygon points="54.293,3.293 52,5.586 49.707,3.293 48.293,4.707 50.586,7 48.293,9.293 49.707,10.707 52,8.414 54.293,10.707 55.707,9.293 53.414,7 55.707,4.707 "></polygon>
                    <path d="M3,11h39V3H3V11z M5,5h35v4H5V5z"></path>
                </g>
            </g>
        </svg>
    )

    const freezingRain = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M10,17L8,21m6-4-1,2"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                ></path>
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                ></path>
            </g>
        </svg>
    )

    const heavyFreezingDrizzle = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M6,17 L4,21 M10,17 L8,21 M14,17 L12,21 M18,17 L16,21"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
            </g>
        </svg>
    )

    const heavyFreezingRain = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M6,17,5,19m5-2L8,21m6-4-1,2m5-2-2,4"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
            </g>
        </svg>
    )

    const heavyIce = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
                <polygon
                    id="triangle1"
                    points="6.5,19 5.5,17 7.5,17"
                    fill="#6ed7e7"
                    stroke="#6ed7e7"
                    strokeWidth={1.2}
                ></polygon>
                <polygon
                    id="triangle2"
                    points="11.5,19 10.5,17 12.5,17"
                    fill="#6ed7e7"
                    stroke="#6ed7e7"
                    strokeWidth={1.2}
                ></polygon>
                <polygon
                    id="triangle3"
                    points="16.5,19 15.5,17 17.5,17"
                    fill="#6ed7e7"
                    stroke="#6ed7e7"
                    strokeWidth={1.2}
                ></polygon>
            </g>
        </svg>
    )

    const heavySleet = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path
                        fill="#6ed7e7"
                        d="M6.5,18h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L5,18.707V19.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L3.293,18H2.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L4,16.293V15.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L5.707,17H6.5C7.145,17,7.145,18,6.5,18z"
                    ></path>
                    <path
                        id="secondary"
                        d="M10,16 L9,18"
                        fill="none"
                        stroke="#6ed7e7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                    ></path>
                    <path
                        fill="#6ed7e7"
                        d="
                        M16.5,18
                        h-0.793
                        l0.561,0.561
                        c0.462,0.462-0.256,1.158-0.707,0.707
                        L15,18.707
                        V19.5
                        c0,0.645-1,0.645-1,0
                        v-0.793
                        l-0.561,0.561
                        c-0.451,0.451-1.169-0.245-0.707-0.707
                        L13.293,18
                        H12.5
                        c-0.645,0-0.645-1,0-1
                        h0.793
                        l-0.561-0.561
                        c-0.456-0.456,0.251-1.163,0.707-0.707
                        L14,16.293
                        V15.5
                        c0-0.645,1-0.645,1,0
                        v0.793
                        l0.561-0.561
                        c0.456-0.456,1.163,0.251,0.707,0.707
                        L15.707,17
                        H16.5
                        C17.145,17,17.145,18,16.5,18
                    "
                    ></path>
                    <path
                        id="secondary"
                        d="M20,16 L19,18"
                        fill="none"
                        stroke="#6ed7e7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                    ></path>
                    <path
                        stroke="#b5b5b5"
                        strokeWidth="1.25"
                        fill="none"
                        d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    ></path>
                </g>
            </g>
        </svg>
    )

    const heavyRain = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M6,17,5,19m5-2L8,21m6-4-1,2m5-2-2,4"
                    fill="none"
                    stroke="#6ed7e7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
            </g>
        </svg>
    )

    const heavySnow = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path
                        fill="#6ed7e7"
                        d="M10.5,20h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L9,20.707V21.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L7.293,20H6.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L8,18.293V17.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L9.707,19H10.5C11.145,19,11.145,20,10.5,20z"
                    ></path>
                    <path
                        fill="#6ed7e7"
                        d="M16.5,20h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L15,20.707V21.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L13.293,20H12.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L14,18.293V17.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L15.707,19H16.5C17.145,19,17.145,20,16.5,20z"
                    ></path>
                    <path
                        stroke="#b5b5b5"
                        strokeWidth="1.25"
                        fill="none"
                        d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    ></path>
                </g>
            </g>
        </svg>
    )

    const heavySnowThunder = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <g>
                        <polygon
                            fill="#ffbb00"
                            points="15.738,25.5 12.809,25.5 15.309,20.5 22.793,20.5 19.793,23.5 22.462,23.5 14.108,29.576"
                        ></polygon>
                    </g>
                    <path
                        fill="#788287"
                        d="M9,20.5c-3.584,0-6.5-2.916-6.5-6.5c0-3.332,2.495-6.109,5.804-6.462l0.347-0.037l0.085-0.338 C9.577,3.829,12.564,1.5,16,1.5c4.136,0,7.5,3.364,7.5,7.5v0.5H24c3.033,0,5.5,2.468,5.5,5.5s-2.467,5.5-5.5,5.5H9z"
                    ></path>
                    <path
                        fill="#6ed7e7"
                        d="M13.5,16h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L12,16.707V17.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L10.293,16H9.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L11,14.293V13.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L12.707,15H13.5C14.145,15,14.145,16,13.5,16z"
                    ></path>
                    <path
                        fill="#6ed7e7"
                        d="M20.5,16h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L19,16.707V17.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L17.293,16H16.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L18,14.293V13.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L19.707,15H20.5C21.145,15,21.145,16,20.5,16z"
                    ></path>
                </g>
            </g>
        </svg>
    )

    const humidity = (
        <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z"
                    fill="#1e40af"
                ></path>
                <path
                    d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z"
                    fill="#1e40af"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z"
                    fill="#1e40af"
                ></path>
                <path
                    d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z"
                    fill="#1e40af"
                ></path>
            </g>
        </svg>
    )

    const lightIce = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
                <polygon
                    id="triangle1"
                    points="8.5,19 7.5,17 9.5,17"
                    fill="#6ed7e7"
                    stroke="#6ed7e7"
                    strokeWidth={1.2}
                ></polygon>
                <polygon
                    id="triangle2"
                    points="14.5,19 13.5,17 15.5,17"
                    fill="#6ed7e7"
                    stroke="#6ed7e7"
                    strokeWidth={1.2}
                ></polygon>
            </g>
        </svg>
    )

    const lightFreezingDrizzle = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M6,17 L5,19 M10,17 L9,19 M14,17 L13,19 M18,17 L17,19"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
            </g>
        </svg>
    )

    const lightRain = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#000000"
            viewBox="0 0 24.00 24.00"
            id="rain-alt"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M10,17L8,21m6-4-1,2"
                    fill="none"
                    stroke="#6ed7e7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
                <path
                    id="primary"
                    d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    fill="none"
                    stroke="#b5b5b5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                ></path>
            </g>
        </svg>
    )

    const lightSleet = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path
                        fill="#6ed7e7"
                        d="M10.5,19h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L9,19.707V20.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L7.293,19H6.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L8,17.293V16.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L9.707,18H10.5C11.145,18,11.145,19,10.5,19z"
                    ></path>
                    <path
                        stroke="#b5b5b5"
                        strokeWidth="1.25"
                        fill="none"
                        d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    ></path>
                </g>
            </g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M14,17 L13,19 M18,17 L17,19"
                    fill="none"
                    stroke="#6ed7e7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                ></path>
            </g>
        </svg>
    )

    const lightSnow = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path
                        fill="#6ed7e7"
                        d="M13.5,20h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L12,20.707V21.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L10.293,20H9.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L11,18.293V17.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L12.707,19H13.5C14.145,19,14.145,20,13.5,20z"
                    ></path>
                    <path
                        stroke="#b5b5b5"
                        strokeWidth="1.25"
                        fill="none"
                        d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z"
                    ></path>
                </g>
            </g>
        </svg>
    )

    const lightSnowThunder = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <g>
                        <polygon
                            fill="#ffbb00"
                            points="15.738,25.5 12.809,25.5 15.309,20.5 22.793,20.5 19.793,23.5 22.462,23.5 14.108,29.576"
                        ></polygon>
                    </g>
                    <path
                        fill="#788287"
                        d="M9,20.5c-3.584,0-6.5-2.916-6.5-6.5c0-3.332,2.495-6.109,5.804-6.462l0.347-0.037l0.085-0.338 C9.577,3.829,12.564,1.5,16,1.5c4.136,0,7.5,3.364,7.5,7.5v0.5H24c3.033,0,5.5,2.468,5.5,5.5s-2.467,5.5-5.5,5.5H9z"
                    ></path>
                    <path
                        fill="#6ed7e7"
                        d="M13.5,16h-0.793l0.561,0.561c0.462,0.462-0.256,1.158-0.707,0.707L12,16.707V17.5c0,0.645-1,0.645-1,0v-0.793l-0.561,0.561c-0.451,0.451-1.169-0.245-0.707-0.707L10.293,16H9.5c-0.645,0-0.645-1,0-1h0.793l-0.561-0.561c-0.456-0.456,0.251-1.163,0.707-0.707L11,14.293V13.5c0-0.645,1-0.645,1,0v0.793l0.561-0.561c0.456-0.456,1.163,0.251,0.707,0.707L12.707,15H13.5C14.145,15,14.145,16,13.5,16z"
                    ></path>
                </g>
            </g>
        </svg>
    )

    const mist = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#b5b5b5"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 66.002 66.002"
            xmlSpace="preserve"
            stroke="#b5b5b5"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path d="M1.553,39.29h62.896c0.857,0,1.553-0.527,1.553-1.175c0-0.649-0.695-1.176-1.553-1.176H1.553 C0.696,36.939,0,37.466,0,38.115C0,38.763,0.696,39.29,1.553,39.29z M64.449,43.989H1.553C0.695,43.989,0,44.515,0,45.165 c0,0.646,0.696,1.174,1.553,1.174h62.896c0.857,0,1.553-0.527,1.553-1.174C66.002,44.515,65.307,43.989,64.449,43.989z M64.449,51.33H1.553C0.695,51.33,0,51.855,0,52.505c0,0.647,0.696,1.176,1.553,1.176h62.896c0.857,0,1.553-0.527,1.553-1.176 S65.307,51.33,64.449,51.33z M13.491,23.33c1.434,0,2.838,0.275,4.174,0.819c0.319,0.131,0.68,0.113,0.986-0.047 c0.306-0.159,0.526-0.446,0.603-0.782c1.149-5.092,5.599-8.649,10.82-8.649c2.591,0,5.115,0.915,7.105,2.574 c0.396,0.332,0.965,0.364,1.396,0.081c2.646-1.737,5.714-2.655,8.873-2.655c8.936,0,16.202,7.268,16.202,16.2 c0,0.992-0.104,1.959-0.275,2.902h2.374C65.9,32.826,66,31.861,66,30.871c0-10.229-8.322-18.55-18.552-18.55 c-3.335,0-6.582,0.893-9.44,2.591c-2.297-1.676-5.081-2.591-7.936-2.591c-5.885,0-10.961,3.729-12.763,9.216 c-1.24-0.37-2.52-0.557-3.82-0.557c-7.195,0-13.072,5.684-13.418,12.793h2.35C2.766,27.959,7.592,23.33,13.491,23.33z"></path>
                </g>
            </g>
        </svg>
    )

    const search = (
        <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#1e40af"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
        </svg>
    )

    const sunny = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            fill="#ffbb00"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <title>ionicons-v5-q</title>
                <rect x="234" y="26" width="32" height="92"></rect>
                <rect x="234" y="394" width="32" height="92"></rect>
                <rect
                    x="340.11"
                    y="103.89"
                    width="92"
                    height="32"
                    transform="translate(24.07 309.89) rotate(-45)"
                ></rect>
                <rect
                    x="79.89"
                    y="364.11"
                    width="92"
                    height="32"
                    transform="translate(-236.14 202.1) rotate(-45)"
                ></rect>
                <rect x="394" y="234" width="92" height="32"></rect>
                <rect x="26" y="234" width="92" height="32"></rect>
                <rect
                    x="364.11"
                    y="340.11"
                    width="32"
                    height="92"
                    transform="translate(-159.93 386.11) rotate(-45)"
                ></rect>
                <rect
                    x="103.89"
                    y="79.89"
                    width="32"
                    height="92"
                    transform="translate(-52.15 125.89) rotate(-45)"
                ></rect>
                <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"></path>
            </g>
        </svg>
    )

    const thunder = (
        <svg
            className="max-w-16 max-h-16 text-gray-800 dark:text-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <g>
                        <polygon
                            fill="#ffbb00"
                            points="12.738,25.5 9.809,25.5 12.309,20.5 19.793,20.5 16.793,23.5 19.462,23.5 11.108,29.576 "
                        ></polygon>
                    </g>
                    <path
                        fill="#788287"
                        d="M9,20.5c-3.584,0-6.5-2.916-6.5-6.5c0-3.332,2.495-6.109,5.804-6.462l0.347-0.037l0.085-0.338 C9.577,3.829,12.564,1.5,16,1.5c4.136,0,7.5,3.364,7.5,7.5v0.5H24c3.033,0,5.5,2.468,5.5,5.5s-2.467,5.5-5.5,5.5H9z"
                    ></path>
                </g>
            </g>
        </svg>
    )

    const wind = (
        <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M3 8H9.5C10.8807 8 12 6.88071 12 5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5V5.85714"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M4 14H18.5C20.433 14 22 15.567 22 17.5C22 19.433 20.433 21 18.5 21C16.567 21 15 19.433 15 17.5V17"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M2 11H18.5C20.433 11 22 9.433 22 7.5C22 5.567 20.433 4 18.5 4C16.567 4 15 5.567 15 7.5V8"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                ></path>
            </g>
        </svg>
    )

    switch (type) {
        case '404':
            return fourOfour
        case 'Blizzard':
            return blizzard
        case 'Blowing snow':
        case 'Heavy snow':
        case 'Moderate or heavy snow showers':
        case 'Patchy heavy snow':
            return heavySnow
        case 'Clear':
            return clear
        case 'Cloudy':
        case 'Overcast':
        case 'Partly Cloudy':
            return cloudy
        case 'Error':
            return error
        case 'Flag':
            return flag
        case 'Fog':
        case 'Freezing fog':
        case 'Mist':
            return mist
        case 'Freezing drizzle':
        case 'Patchy freezing drizzle possible':
            return lightFreezingDrizzle
        case 'Heavy freezing drizzle':
            return heavyFreezingDrizzle
        case 'Heavy rain':
        case 'Heavy rain at times':
        case 'Torrential rain shower':
        case 'Moderate or heavy rain shower':
            return heavyRain
        case 'Humidity':
            return humidity
        case 'Ice pellets':
        case 'Light showers of ice pellets':
            return lightIce
        case 'Light drizzle':
        case 'Patchy light drizzle':
            return drizzle
        case 'Light freezing rain':
            return freezingRain
        case 'Light rain':
        case 'Light rain shower':
        case 'Moderate rain':
        case 'Moderate rain at times':
        case 'Patchy light rain':
        case 'Patchy rain nearby':
        case 'Patchy rain possible':
            return lightRain
        case 'Light sleet':
        case 'Light sleet showers':
        case 'Patchy sleet possible':
            return lightSleet
        case 'Light snow':
        case 'Light snow showers':
        case 'Moderate snow':
        case 'Patchy light snow':
        case 'Patchy moderate snow':
        case 'Patchy snow possible':
            return lightSnow
        case 'Moderate or heavy freezing rain':
            return heavyFreezingRain
        case 'Moderate or heavy showers of ice pellets':
            return heavyIce
        case 'Moderate or heavy sleet':
        case 'Moderate or heavy sleet showers':
            return heavySleet
        case 'Moderate or heavy rain with thunder':
        case 'Patchy light rain with thunder':
        case 'Thundery outbreaks possible':
            return thunder
        case 'Moderate or heavy snow with thunder':
            return heavySnowThunder
        case 'Patchy light snow with thunder':
            return lightSnowThunder
        case 'Search':
            return search
        case 'Sunny':
            return sunny
        case 'Wind':
            return wind
        default:
            return cloudy
    }
}

export default Icon
