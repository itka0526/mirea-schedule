import Lesson from "./Lesson";

const TimeTable = () => {
    return (
        <>
            <div
                className={`select-none transition-shadow bg-white shadow-md rounded-2xl h-64 basis-60 lg:basis-56 grow-0 shrink-0 relative 
                `}
            >
                <div className=" flex justify-center mt-[2px] font-bold">
                    <span>Время</span>
                </div>
                <div className={`grid grid-rows-12 overflow-hidden `}>
                    <div className="overflow-hidden bg-gray-200 grid grid-cols-[1.15rem,_1fr]">
                        <div className="flex justify-center items-center ">
                            <span className="text-blue-600 text-2xl">1</span>
                        </div>
                        <div className="ml-1 overflow-hidden flex items-center w-full">
                            9:00 - 10:30
                        </div>
                    </div>
                    <div className="overflow-hidden grid grid-cols-[1.15rem,_1fr]">
                        <div className="flex justify-center items-center ">
                            <span className="text-blue-600 text-2xl">2</span>
                        </div>
                        <div className="ml-1 overflow-hidden flex items-center w-full">
                            10:40 - 12:10
                        </div>
                    </div>
                    <div className="overflow-hidden  bg-gray-200 grid grid-cols-[1.15rem,_1fr]">
                        <div className="flex justify-center items-center ">
                            <span className="text-blue-600 text-2xl">3</span>
                        </div>
                        <div className="ml-1 overflow-hidden flex items-center w-full">
                            12:40 - 14:10
                        </div>
                    </div>
                    <div className="overflow-hidden grid grid-cols-[1.15rem,_1fr]">
                        <div className="flex justify-center items-center ">
                            <span className="text-blue-600 text-2xl">4</span>
                        </div>
                        <div className="ml-1 overflow-hidden flex items-center w-full">
                            14:20 - 15:50
                        </div>
                    </div>
                    <div className="overflow-hidden  bg-gray-200  grid grid-cols-[1.15rem,_1fr]">
                        <div className="flex justify-center items-center ">
                            <span className="text-blue-600 text-2xl">5</span>
                        </div>
                        <div className="ml-1 overflow-hidden flex items-center w-full">
                            16:20 - 17:50
                        </div>
                    </div>
                    <div className="overflow-hidden grid grid-cols-[1.15rem,_1fr]">
                        <div className="flex justify-center items-center ">
                            <span className="text-blue-600 text-2xl">6</span>
                        </div>
                        <div className="ml-1 overflow-hidden  flex items-center w-full">
                            18:00 - 19:30
                        </div>
                    </div>
                    <div className="overflow-hidden bg-gray-200 grid grid-cols-[1.15rem,_1fr]">
                        <div className="flex justify-center items-center ">
                            <span className="text-blue-600 text-2xl">7</span>
                        </div>
                        <div className="ml-1 overflow-hidden  flex items-center w-full">
                            19:40 - 8:10
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TimeTable;
