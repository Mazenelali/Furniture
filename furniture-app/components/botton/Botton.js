function Botton({text , onClick,type}) {
    return (
        <>
            <button onClick={onClick} type={type} className="bg-primary border text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                {text}
            </button>
        </>
    );
}

export default Botton;
