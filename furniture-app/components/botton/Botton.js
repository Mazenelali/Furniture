function Botton({text , onClick}) {
    return (
        <>
            <button onClick={onClick} className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                {text}
            </button>
        </>
    );
}

export default Botton;
