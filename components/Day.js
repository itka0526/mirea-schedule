import { Clock, MapPin } from "react-feather";

const Day = ({ day, data }) => {
    const Column = ({ children }) => (
        <div className="grid-flow-col grid grid-rows-[20px,_1fr] w-full h-full">
            {children}
        </div>
    );
    const Row = ({ item, showLine }) => {
        return item?.lesson ? (
            <>
                <div className="flex flex-col w-full">
                    <div className="flex overflow-hidden mb-1 w-full">
                        <span className=" text-ellipsis overflow-hidden w-full whitespace-nowrap font-bold">
                            {item?.lesson}
                        </span>
                    </div>
                    <div className="inline-flex flex-wrap gap-x-3 w-full ">
                        <div className=" flex gap-x-1 items-center">
                            <Clock
                                height={16}
                                width={16}
                                className="text-blue-600"
                            />
                            <span>{item?.time}</span>
                        </div>
                        <div className=" flex gap-x-1 items-center">
                            <MapPin
                                height={16}
                                width={16}
                                className="text-blue-600"
                            />
                            <span>{item?.auditorium}</span>
                        </div>
                    </div>
                </div>

                {showLine && (
                    <div className="w-full rounded-sm border-b mb-2 mt-[10px] border-blue-600"></div>
                )}
            </>
        ) : null;
    };
    return (
        <div className=" bg-white p-3 rounded-lg shadow-md w-11/12 lg:w-full min-h-[160px] pb-6 ">
            <div className="mb-1">
                <span className="font-bold text-xl text-blue-600">{day}</span>
            </div>
            <div className=" grid grid-cols-2  gap-3">
                <Column>
                    <div className="mb-1 w-full flex items-center">
                        <span className="italic font-bold">Нечётные</span>
                    </div>
                    <div className="w-full overflow-hidden">
                        {data.map(
                            (item, idx) =>
                                item.even_or_odd === "I" && (
                                    <Row
                                        key={`odd_row_${idx}`}
                                        item={item}
                                        showLine={idx >= 0}
                                    />
                                )
                        )}
                    </div>
                </Column>
                <Column>
                    <div className="mb-1 w-full flex items-center">
                        <span className="italic font-bold">Чётные</span>
                    </div>
                    <div className="w-full overflow-hidden">
                        {data.map(
                            (item, idx) =>
                                item.even_or_odd === "II" && (
                                    <Row
                                        key={`even_row_${idx}`}
                                        item={item}
                                        showLine={idx >= 0}
                                    />
                                )
                        )}
                    </div>
                </Column>
            </div>
        </div>
    );
};
export default Day;
