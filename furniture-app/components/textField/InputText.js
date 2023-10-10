
function InputText({ type, onChange, placeholder ,className }) {
    return (
        <>
            <input
                type={type}
                className="h-14 p-4 w-full  border-[1px] border-primary rounded-3xl placeholder:text-sm placeholder:text-gray-400"
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
}

export default InputText;
