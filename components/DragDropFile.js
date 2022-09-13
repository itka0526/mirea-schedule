const DragDropFile = ({ handleFile, children }) => {
    const suppress = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
    };
    const onDrop = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        const files = evt.dataTransfer.files;
        if (files && files[0]) handleFile(files[0]);
    };

    return (
        <div onDrop={onDrop} onDragEnter={suppress} onDragOver={suppress}>
            {children}
        </div>
    );
};

export default DragDropFile;
