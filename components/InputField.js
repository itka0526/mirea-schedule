export default function InputField({
    label,
    placeholder,
    icon,
    handler,
    value,
}) {
    return (
        <>
            <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium text-gray-900 mt-4"
            >
                {label}
            </label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    {icon}
                </div>
                <input
                    value={value}
                    onChange={handler}
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder={placeholder}
                />
            </div>
        </>
    );
}
