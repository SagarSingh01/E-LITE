function Loading() {
    return (
        <div className="mt-4 grid gap-6 justify-items-center place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
                <div
                    key={i}
                    className="w-full overflow-hidden rounded-lg bg-white p-2 animate-pulse"
                >
                    {/* Image */}
                    <div className="h-50 rounded-md bg-gray-200"></div>

                    {/* Name + Price */}
                    <div className="flex justify-between p-4">
                        <div className="h-5 w-32 rounded bg-gray-200"></div>
                        <div className="h-5 w-16 rounded bg-gray-200"></div>
                    </div>

                    {/* Category */}
                    <div className="px-4">
                        <div className="h-4 w-28 rounded bg-gray-200"></div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 p-4">
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                        <div className="h-4 w-10 rounded bg-gray-200"></div>
                        <div className="h-4 w-12 rounded bg-gray-200"></div>
                    </div>

                    {/* Button */}
                    <div className="mx-6 mb-2 h-8 rounded-xl bg-gray-200"></div>
                </div>
            ))}
        </div>
    );
}

export default Loading;