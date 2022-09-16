import { useEffect, useState } from "react";
import { X } from "react-feather";
import CustomNotification from "./reusable/Notification";

const HelpButton = ({ date }) => {
    const handleExplanation = () => {
        setShowExplanation(false);
        setTimeout(() => setShowExplanation(true), 25);
    };
    const [showExplanation, setShowExplanation] = useState(true);

    return (
        <>
            <CustomNotification date={date} showExplanation={showExplanation} />
            <div
                className="fixed flex select-none justify-center items-center h-10 w-10 bottom-7 cursor-pointer left-5 z-50 bg-white rounded-full shadow-md"
                color={"#252525"}
                onClick={handleExplanation}
            >
                <span className=" font-semibold text-2xl font-sans ">?</span>
            </div>
        </>
    );
};

export default HelpButton;
