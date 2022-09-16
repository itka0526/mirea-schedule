import { useState } from "react";
import { X } from "react-feather";
import CustomNotification from "./reusable/Notification";

const HelpButton = ({ date }) => {
    const handleExplanation = () => setShowExplanation((prev) => !prev);
    const [showExplanation, setShowExplanation] = useState(false);

    return (
        <>
            <CustomNotification date={date} showExplanation={showExplanation} />
            <div
                className="fixed flex select-none justify-center items-center h-10 w-10 bottom-7 cursor-pointer left-5 z-50 bg-white rounded-full shadow-md"
                color={"#252525"}
                onClick={handleExplanation}
            >
                <span className=" font-semibold text-2xl font-sans ">
                    {showExplanation ? (
                        <X height={24} width={24} color={"#252525"} />
                    ) : (
                        "?"
                    )}
                </span>
            </div>
        </>
    );
};

export default HelpButton;
