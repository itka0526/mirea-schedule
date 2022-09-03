const WeekCounter = ({ currentWeekNumber }) => {
    return (
        <>
            <div className="flex justify-center items-center py-4 ">
                <span className="text-xl lg:text-3xl font-bold">
                    Расписание МИРЭА БФБО-01-22
                </span>
            </div>

            <div className="mt-2 flex justify-center items-center py-3 px-2 rounded-full bg-white w-3/4 lg:w-1/2 shadow-md">
                <span className="text-lg lg:text-xl text-blue-600 font-bold">
                    Текущая неделя -
                    <i className="ml-1">
                        {currentWeekNumber ? currentWeekNumber : "00"}
                    </i>
                </span>
            </div>
        </>
    );
};

export default WeekCounter;
