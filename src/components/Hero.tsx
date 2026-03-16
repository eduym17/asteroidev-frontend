export default function Hero() {
return (
<div className="flex flex-col items-center text-center md:text-left md:items-start gap-6 bg-amber-300">
    <h1 className="text-4xl md:text-5xl font-bold">
    Build faster products
    </h1>

    <p className="text-gray-600 max-w-xl">
    Launch your ideas quickly using modern web technologies.
    </p>

    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
    Get Started
    </button>
</div>
)
}