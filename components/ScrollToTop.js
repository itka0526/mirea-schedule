import { useEffect, useState } from "react";
import { ChevronUp } from "react-feather";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShow(false);
    };

    return (
        <div
            className={`scroll-to-top fixed bottom-7 right-5 z-50 pb-1 rounded-full w-10 h-10 bg-white shadow-md flex justify-center items-center transition-opacity ease-in-out ${
                show ? "opacity-100" : "opacity-0"
            }`}
            onClick={scrollTop}
        >
            <ChevronUp height={32} width={32} color={"#252525"} />
        </div>
    );
};

export default ScrollToTop;
