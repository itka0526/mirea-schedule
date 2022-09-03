const Lesson = ({ hour, name }) => {
    return (
        <div className="h-[18px]  odd:bg-gray-200 w-full overflow-hidden flex items-center px-2">
            <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm ">
                {name}
            </span>
        </div>
    );
};

export default Lesson;
``;
