import Reviews from "./reviews";

function App() {
    return (
        <div className="grid place-items-center">
            <div className="font-bold mt-4 text-xl md:text-2xl duration-500">Reviews</div>
            <div className="h-1 w-28 bg-black mx-auto"></div>
            <Reviews />
        </div>
    );
}

export default App;
