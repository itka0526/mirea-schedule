import { useState } from "react";
import { Loader, Upload } from "react-feather";

const UploadButton = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const updateSchedule = async () => {
        setLoading(true);
        const pending_response = await fetch("/api/schedule", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
        });
        const response = await pending_response.json();
        if (response.success === true) setLoading(false);
    };
    return loading ? (
        <Loader
            width={48}
            className=" animate-spin-slow "
            height={48}
            color={"#252525"}
        />
    ) : (
        <Upload
            onClick={updateSchedule}
            width={48}
            height={48}
            color={"#252525"}
        />
    );
};

export default UploadButton;
