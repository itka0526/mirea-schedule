import { useRef } from "react";

const Lesson = ({ name, odd, data, setDetails, idx }) => {
    const itemRef = useRef();
    const handleClick = () =>
        itemRef.current && setDetails({ item: itemRef.current, index: idx });
    return (
        <div
            onClick={handleClick}
            className={`h-[18px]  ${
                odd ? "bg-gray-200" : ""
            } w-full overflow-hidden flex items-center px-2 relative`}
            ref={itemRef}
        >
            <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm ">
                {name}
            </span>
        </div>
    );
};

export default Lesson;
``;
