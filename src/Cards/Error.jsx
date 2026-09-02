import { FaExclamationTriangle } from "react-icons/fa";

function Error() {
    return (
        <div className="col-span-full min-h-111.5 w-fit flex items-center justify-center px-4 rounded-lg">

            <div className="flex flex-col items-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <FaExclamationTriangle size={28} />
                </div>

                <h2 className="mt-4 text-2xl font-bold text-red-800 animate-pulse">
                    Something went wrong
                </h2>

                <p className="mt-2 max-w-md text-gray-500">
                    We couldn't load the products right now. Please check your
                    internet connection and try again.
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="mt-5 cursor-pointer rounded-xl bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
                >
                    Try Again
                </button>

            </div>

        </div>
    );
}

export default Error;