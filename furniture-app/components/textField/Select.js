function Select({required ,onChange ,name}) {
    return (
        <select name={name} onChange={onChange} required={required } className="h-14 p-4 w-full  bg border-[1px] border-primary rounded-3xl bg-white">
            <option value={null} selected > Choose Gender </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
    );
}

export default Select;
