import { Clock, MapPin } from "react-feather";

const Day = ({ day, data }) => {
    const Column = ({ children }) => (
        <div className="grid-flow-col grid grid-rows-[20px,_1fr] gap-2 w-full h-full">
            {children}
        </div>
    );

    return (
        <div className=" bg-white p-3 rounded-lg lg:rounded-xl lg:px-4 lg:basis-[calc(50%-1rem)] lg:self-start shadow-md w-11/12 lg:w-full min-h-[300px] pb-6 ">
            <div className="mb-1">
                <span className="font-bold text-xl text-blue-600">{day}</span>
            </div>
            <div className=" grid grid-cols-2  gap-3">
                <Column>
                    <div className="w-full flex items-center">
                        <i className="italic font-bold">Нечётные</i>
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
                    <div className="w-full flex items-start">
                        <i className="italic font-bold">Чётные</i>
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

const Row = ({ item, showLine }) => {
    return item?.lesson ? (
        <>
            <div className="flex flex-col w-full">
                <div className="flex overflow-hidden mb-1 w-full">
                    <span className="  font-bold">{item?.lesson}</span>
                </div>
                <div className="inline-flex flex-wrap gap-x-3 w-full ">
                    <div className=" flex gap-x-1 items-center">
                        <Clock
                            height={16}
                            width={16}
                            className="text-blue-600"
                        />
                        <span className="text-sm">{item?.time}</span>
                    </div>
                    <div className=" flex gap-x-1 items-center">
                        <MapPin
                            height={16}
                            width={16}
                            className="text-blue-600"
                        />
                        <span className="text-sm">{item?.auditorium}</span>
                    </div>
                </div>
            </div>

            {showLine && (
                <div className="w-full rounded-sm border-b mb-2 mt-[10px] border-blue-600"></div>
            )}
        </>
    ) : null;
};

export default Day;
