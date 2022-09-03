const Week = ({ children }) => {
    return (
        <div className="week-schedule flex w-full  justify-center flex-wrap gap-4 my-4 mt-8">
            {children}
        </div>
    );
};

export default Week;
