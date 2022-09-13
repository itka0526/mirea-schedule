const SquareButton = ({ children, disabled, ...props }) => (
    <div
        {...props}
        className={`${
            disabled ? "opacity-60 " : "supportshover:hover:-translate-y-1"
        }  transition-transform duration-200 rounded-lg my-3 flex justify-center items-center p-3 bg-white  shadow-md`}
    >
        {children}
    </div>
);

export default SquareButton;
