const OutTable = ({ data, cols }) => {
    return (
        <div className="output-table ">
            <table className="table ">
                <thead>
                    <tr>
                        {cols.map((c) => (
                            <th key={c.key}>{c.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((r, i) => (
                        <tr key={i}>
                            {cols.map((c) => (
                                <td key={c.key}>{r[c.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OutTable;
