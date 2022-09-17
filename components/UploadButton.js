import { useEffect, useState } from "react";
import { Grid, Loader, Lock, Upload } from "react-feather";
import InputField from "./InputField";
import Modal from "./Modal";

const UploadButton = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [stage, setStage] = useState("stage-initial");
    const [open, setOpen] = useState(false);

    const updateSchedule = async () => {
        setLoading(true);
        const pending_response = await fetch("/api/schedule", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data, password, letters }),
        });
        const response = await pending_response.json();
        if (response.success === true) setLoading(false);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const close = () => {
        setOpen(false);
    };

    const [letters, setLetters] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeOne = (event) => {
        setLetters(`${event.target.value}`);
    };
    const handleChangeTwo = (event) => {
        setPassword(`${event.target.value}`);
    };

    useEffect(() => {
        console.log(password.length > 4, letters.length > 3, stage);
        if (password.length > 4 && letters.length > 3) {
            setStage("stage-second");
            return;
        } else {
            setStage("stage-initial");
        }
    }, [password, letters]);

    return (
        <>
            <Modal state={open} close={close}>
                <div className=" pb-6 lg:w-[30vw]  h-full flex justify-center items-center">
                    <div className="grid grid-flow-row  items-center justify-center">
                        <InputField
                            label={"Enter head letters with nothing:"}
                            icon={
                                <Grid
                                    aria-hidden="true"
                                    height={20}
                                    width={20}
                                    className="text-gray-500"
                                />
                            }
                            value={letters}
                            handler={handleChangeOne}
                            placeholder="ECDBKLMN"
                        />
                        <InputField
                            label={"Password:"}
                            icon={
                                <Lock
                                    aria-hidden="true"
                                    height={20}
                                    width={20}
                                    className="text-gray-500"
                                />
                            }
                            value={password}
                            handler={handleChangeTwo}
                            placeholder="Password$123"
                        />

                        <div
                            onClick={close}
                            className={` rounded-lg h-10 cursor-pointer transition-opacity bg-blue-600 flex items-center justify-center w-full mt-5 ${
                                password.length > 4 && letters.length > 3
                                    ? " opacity-100 "
                                    : " opacity-80 "
                            }`}
                        >
                            <span className="text-xl text-white uppercase">
                                Закрыть
                            </span>
                        </div>
                    </div>
                </div>
            </Modal>
            {loading ? (
                <Loader
                    width={48}
                    className=" animate-spin-slow "
                    height={48}
                    color={"#252525"}
                />
            ) : (
                <Upload
                    onClick={() =>
                        stage === "stage-initial"
                            ? handleClick()
                            : stage === "stage-second"
                            ? updateSchedule()
                            : () => null
                    }
                    width={48}
                    height={48}
                    color={"#252525"}
                />
            )}
        </>
    );
};

export default UploadButton;
