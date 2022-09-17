const OutTable = ({ data, cols }) => {
    return (
        <div className="output-table ">
            <table className="table  ">
                <thead>
                    <tr>
                        {cols.map((column) => (
                            <th key={column.key}>{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((r, i) => (
                        <tr key={i}>
                            {cols.map((c) => (
                                <td
                                    key={c.key}
                                    className="text-center px-2 min-w-[125px] min-h-[1rem]"
                                >
                                    {r[c.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OutTable;
