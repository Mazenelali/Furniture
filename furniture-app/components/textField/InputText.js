
function InputText({ type, onChange, placeholder , name , required }) {
    return (
        <>
            <input
                required={required}
                type={type}
                name={name}
                className="h-14 p-4 w-full  border-[1px] border-primary rounded-3xl placeholder:text-sm placeholder:text-gray-400"
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
}

export default InputText;
