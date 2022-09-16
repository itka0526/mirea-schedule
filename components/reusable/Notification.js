const CustomNotification = ({ date = "00/00/0000", showExplanation }) => {
    return (
        <div
            className={`fixed z-50 top-6 -translate-x-1/2 left-1/2 select-none ${
                showExplanation ? "show" : "hide"
            }`}
        >
            <div className="custom-notification h-16 -translate-y-8 drop-shadow-xl  w-16">
                <div className="quadrate-1 relative isolate"></div>
                <div className="text flex w-full h-full flex-col items-center py-2">
                    <span className="font-bold text-blue-600">Обновлено:</span>
                    <span className="text-sm">
                        {new Date(date).toLocaleString("ru-RU")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CustomNotification;
