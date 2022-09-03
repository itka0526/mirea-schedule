import { useEffect, useRef, useState } from "react";
import Lesson from "./Lesson";

const Day = ({ showHelp = false, day, data }) => {
    let [lessons, setLessons] = useState([]);
    const [showExplanation, setShowExplanation] = useState(false);

    useEffect(() => {
        const chunkSize = 2;
        const copy = data.slice();
        let temp = [];

        for (let i = 0; i < copy.length; i += chunkSize) {
            const chunk = copy.slice(i, i + chunkSize);
            temp.push(chunk);
        }

        setLessons(temp);
    }, []);

    const handleExplanation = () => setShowExplanation((prev) => !prev);

    return (
        <>
            {showHelp && (
                <div
                    className="fixed flex select-none justify-center items-center h-10 w-10 bottom-7 cursor-pointer left-5 z-50 bg-white rounded-full shadow-md"
                    color={"#252525"}
                    onClick={handleExplanation}
                >
                    <span className=" font-bold text-2xl font-sans ">
                        {showExplanation ? "X" : "?"}
                    </span>
                </div>
            )}
            <div
                className={`select-none transition-shadow bg-white shadow-md rounded-2xl h-64 basis-60 lg:basis-56 grow-0 shrink-0 relative ${
                    showExplanation && showHelp ? "show-explanation" : ""
                }`}
            >
                <div className=" flex justify-center mt-[2px] font-bold">
                    <span>{day}</span>
                </div>
                <div className={`grid grid-rows-12 overflow-hidden `}>
                    {lessons.map(([odd_lesson, even_lesson], idx) => (
                        <div
                            className="overflow-hidden grid grid-cols-[1.15rem,_1fr]"
                            key={`lesson-${idx}`}
                        >
                            <div className="flex justify-center items-center ">
                                <span className="text-blue-600 text-2xl">
                                    {idx + 1}
                                </span>
                            </div>
                            <div className="overflow-hidden">
                                <Lesson name={odd_lesson["урок"]?.w} />
                                <Lesson name={even_lesson["урок"]?.w} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Day;
