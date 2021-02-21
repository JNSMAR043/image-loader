import React from "react";
import { useDropzone } from "react-dropzone";
import './dropzone.css';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const Dropzone = ({ onDrop, accept }) => {

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept
      });

    return (
        <div {...getRootProps()}>
            <div className="input-container">
                <input className="dropzone-input" {...getInputProps} />
                <div className="text-center">
                    {isDragActive ? (
                        <label className="dropzone-content">
                            Release to drop the files here
                        </label>
                    ) : (
                        <label className="dropzone-content">
                            Drag 'n' drop some files here, or click to select files
                        </label>
                    )}
                </div>
                <AddPhotoAlternateIcon className="icon-svg" style={{ fontSize: 120 }}/>
            </div>
        </div>
    );
};

export default Dropzone;