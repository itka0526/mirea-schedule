import { FolderPlus, Upload } from "react-feather";

const DataInput = ({ handleFile }) => {
    const handleChange = (e) => {
        const files = e.target.files;
        if (files && files[0]) handleFile(files[0]);
    };

    return (
        <form>
            <input
                type="file"
                className="hidden"
                id="input-file"
                accept={
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                }
                onChange={handleChange}
            />
            <label
                htmlFor="input-file"
                className="flex justify-center items-center"
            >
                <FolderPlus width={48} height={48} color={"#252525"} />
            </label>
        </form>
    );
};

export default DataInput;
