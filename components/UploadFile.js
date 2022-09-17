import React, { useState } from "react";
import { FileText, MoreHorizontal } from "react-feather";
import { read, utils } from "xlsx";
import DataInput from "./DataInput";
import DragDropFile from "./DragDropFile";
import OutTable from "./OutTable";
import SquareButton from "./SquareButton";
import UploadButton from "./UploadButton";

const UploadFile = () => {
    const [data, setData] = useState([]);
    const [rawData, setRawData] = useState({});
    const [formatedData, setFormatedData] = useState([]);

    const [sheetName, setSheetName] = useState("");
    const [sheetOptions, setSheetOptions] = useState([]);

    const [cols, setCols] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const handleFile = (file) => {
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = (e) => {
            const bstr = e.target.result,
                wb = read(bstr, { type: rABS ? "binary" : "array" });
            setRawData(wb);
            handleUpdate({ wb });
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    };

    const handleUpdate = ({ wb, option = false }) => {
        const sheetNames = wb.SheetNames,
            sheetName = option
                ? sheetNames.find(
                      (selectableSheetName) => selectableSheetName === option
                  )
                : sheetNames[0],
            workSheet = wb.Sheets[sheetName],
            jsonData = utils.sheet_to_json(workSheet, {
                header: 1,
            });

        setSheetName(sheetName);
        setSheetOptions(sheetNames);
        setData(jsonData);
        setCols(make_cols(workSheet["!ref"]));
        setFormatedData(workSheet);
    };

    const handleShow = () => setShowTable((prev) => !prev);

    const handleOption = (event) => {
        const selectedSheetName = `${event.target.value}`;
        handleUpdate({ wb: rawData, option: selectedSheetName });
    };

    return (
        <>
            <div className=" flex justify-center items-center py-3 px-2 rounded-full bg-white w-3/4 lg:w-1/2 shadow-md">
                <span className="text-lg lg:text-xl text-blue-600 font-bold">
                    Изменить расписание
                </span>
            </div>
            <div className="w-full flex gap-3 justify-center items-center">
                <SquareButton title="Добавить">
                    <DragDropFile handleFile={handleFile}>
                        <DataInput handleFile={handleFile} />
                    </DragDropFile>
                </SquareButton>

                <SquareButton
                    disabled={data.length === 0}
                    title={sheetName}
                    onClick={handleShow}
                >
                    <FileText width={48} height={48} color={"#252525"} />
                </SquareButton>

                <SquareButton disabled={data.length === 0} title="Изменить">
                    <UploadButton data={formatedData} />
                </SquareButton>

                <SquareButton disabled={data.length === 0} title={"Класс"}>
                    <div className="overflow-hidden w-12 h-12 outline-none relative isolate">
                        <select
                            className=" absolute h-full w-full -z-10 "
                            onChange={handleOption}
                            value={sheetName}
                        >
                            {sheetOptions.map((sheetOption) => (
                                <option key={`sheet-option-${sheetOption}`}>
                                    {sheetOption}
                                </option>
                            ))}
                        </select>
                        <div className="bg-white pointer-events-none">
                            <MoreHorizontal
                                className=""
                                width={48}
                                height={48}
                                color={"#252525"}
                            />
                        </div>
                    </div>
                </SquareButton>
            </div>

            {showTable && (
                <div className="row h-[500px] w-full overflow-scroll my-3 border border-custom-black">
                    <OutTable data={data} cols={cols} />
                </div>
            )}
        </>
    );
};

/* generate an array of column objects */
const make_cols = (refstr) => {
    let o = [],
        C = utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i) o[i] = { name: utils.encode_col(i), key: i };
    return o;
};

export default UploadFile;
