function ProductDetailsLoading() {
    return (
        <section className="min-h-screen w-full animate-pulse bg-gray-300 text-gray-900">

            {/* HEADER */}
            <header className="sticky top-0 z-30 border-b border-gray-200 bg-gray-200">
                <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">

                    {/* Back button */}
                    <div className="h-9 w-20 rounded-xl bg-gray-300"></div>

                    <span className="text-gray-300">/</span>

                    {/* Product Details */}
                    <div className="h-4 w-28 rounded bg-gray-300"></div>
                </div>
            </header>


            {/* MAIN */}
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

                    {/* IMAGE SECTION */}
                    <div className="space-y-4">

                        <div className="relative flex h-87 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:h-112.5 lg:h-140">

                            {/* Stock badge */}
                            <div className="absolute left-4 top-4 h-7 w-20 rounded-full bg-gray-200"></div>

                            {/* Heart */}
                            <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-gray-200"></div>

                            {/* Image skeleton */}
                            <div className="h-3/4 w-3/4 rounded-xl bg-gray-200"></div>

                        </div>
                    </div>


                    {/* PRODUCT INFORMATION */}
                    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

                        {/* CATEGORY */}
                        <div className="h-7 w-28 rounded-full bg-gray-200"></div>


                        {/* PRODUCT NAME */}
                        <div className="mt-4 space-y-3">
                            <div className="h-8 w-4/5 rounded-lg bg-gray-200"></div>
                            <div className="h-8 w-3/5 rounded-lg bg-gray-200"></div>
                        </div>


                        {/* RATING */}
                        <div className="mt-4 flex items-center gap-3">

                            <div className="h-9 w-20 rounded-lg bg-gray-200"></div>

                            <div className="h-4 w-24 rounded bg-gray-200"></div>

                            <div className="h-4 w-4 rounded bg-gray-200"></div>

                            <div className="h-4 w-28 rounded bg-gray-200"></div>

                        </div>


                        {/* PRICE */}
                        <div className="mt-6 rounded-xl bg-gray-50 p-4">

                            <div className="flex flex-wrap items-center gap-3">

                                {/* Current price */}
                                <div className="h-9 w-32 rounded-lg bg-gray-200"></div>

                                {/* Original price */}
                                <div className="h-5 w-20 rounded bg-gray-200"></div>

                                {/* Discount */}
                                <div className="h-7 w-16 rounded-md bg-gray-200"></div>

                            </div>

                            {/* Tax */}
                            <div className="mt-2 h-3 w-32 rounded bg-gray-200"></div>

                        </div>


                        {/* DESCRIPTION */}
                        <div className="mt-6">

                            <div className="h-5 w-36 rounded bg-gray-200"></div>

                            <div className="mt-3 space-y-2">
                                <div className="h-4 w-full rounded bg-gray-200"></div>
                                <div className="h-4 w-full rounded bg-gray-200"></div>
                                <div className="h-4 w-4/5 rounded bg-gray-200"></div>
                            </div>

                        </div>


                        {/* DIVIDER */}
                        <div className="my-6 h-px bg-gray-200" />


                        {/* QUANTITY */}
                        <div>

                            <div className="mb-3 h-4 w-16 rounded bg-gray-200"></div>

                            <div className="h-10 w-36 rounded-xl bg-gray-200"></div>

                        </div>


                        {/* BUTTONS */}
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

                            <div className="h-12 rounded-xl bg-gray-200"></div>

                            <div className="h-12 rounded-xl bg-gray-200"></div>

                        </div>


                        {/* DELIVERY */}
                        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">

                            <div className="h-24 rounded-xl bg-gray-50"></div>

                            <div className="h-24 rounded-xl bg-gray-50"></div>

                            <div className="h-24 rounded-xl bg-gray-50"></div>

                        </div>

                    </div>
                </div>
            </main>
        </section>
    );
}

export default ProductDetailsLoading;