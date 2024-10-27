const LoadingText = () => {
    const loadingIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="animate-spin max-w-16 max-h-16 m-auto"
        >
            <path
                d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                fill="#1e40af"
            />
        </svg>
    )
    return (
        <div className="flex flex-col gap-4 p-4 text-center m-auto animate-pulse">
            {loadingIcon}
            <div>Loading Results ...</div>
        </div>
    )
}

export default LoadingText
