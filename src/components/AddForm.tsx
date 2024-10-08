import React, { useState, useContext } from "react";
import DraggableWindow from "./DraggableWindow";
import { FileContext } from "../context/FileContext";

interface AddFormProps {
  formType: string;
}

const AddForm: React.FC<AddFormProps> = ({ formType }) => {
  const [name, setName] = useState("");
  const [src, setSrc] = useState("");
  const [path, setPath] = useState("/desktop");

  // Use FileContext to set files
  const { setFiles } = useContext(FileContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      id: Date.now(), // Give a unique ID
      name,
      src,
      path,
      text: formType === "Text" ? "" : undefined,
      type: formType,
    };

    // Update files using context
    setFiles((prevFiles) => [...prevFiles, formData]);



    // Reset form fields
    setName("");
    setSrc("");
    setPath("/desktop");
  };

  return (
    <DraggableWindow title="addForm">
      <div className="h-full w-full text-gray-400 overflow-y-auto p-3 bg-gray-700/70">
        <form onSubmit={handleSubmit}>
          {formType === "Image" && (
            <>
              <div className="mb-2">
                <label htmlFor="id-name" className="block text-xs mb-1">
                  Image Name
                </label>
                <input
                  type="text"
                  id="id-name"
                  name="name"
                  className="block w-full py-1.5 px-3 text-sm rounded-md border border-slate-900 bg-black/25 outline-none focus:border-blue-500/50"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="id-src" className="block text-xs mb-1">
                  Image URL
                </label>
                <input
                  dir="ltr"
                  type="text"
                  id="id-src"
                  name="src"
                  className="block w-full py-1.5 px-3 text-sm rounded-md border border-slate-900 bg-black/25 outline-none focus:border-blue-500/50"
                  value={src}
                  required
                  onChange={(e) => setSrc(e.target.value)}
                />
              </div>
            </>
          )}

          {formType === "Folder" && (
            <>
              <div className="mb-2">
                <label htmlFor="id-name" className="block text-xs mb-1">
                  Folder Name
                </label>
                <input
                  type="text"
                  id="id-name"
                  name="name"
                  className="block w-full py-1.5 px-3 text-sm rounded-md border border-slate-900 bg-black/25 outline-none focus:border-blue-500/50"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="id-path" className="block text-xs mb-1">
                  Folder Path
                </label>
                <input
                  dir="ltr"
                  type="text"
                  id="id-path"
                  name="path"
                  className="block w-full py-1.5 px-3 text-sm rounded-md border border-slate-900 bg-black/25 outline-none focus:border-blue-500/50"
                  value={path}
                  required
                  onChange={(e) => setPath(e.target.value)}
                />
              </div>
            </>
          )}

          {formType === "Text" && (
            <>
              <div className="mb-2">
                <label htmlFor="id-name" className="block text-xs mb-1">
                  File Name
                </label>
                <input
                  type="text"
                  id="id-name"
                  name="name"
                  className="block w-full py-1.5 px-3 text-sm rounded-md border border-slate-900 bg-black/25 outline-none focus:border-blue-500/50"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="id-path" className="block text-xs mb-1">
                  File Path
                </label>
                <input
                  dir="ltr"
                  type="text"
                  id="id-path"
                  name="path"
                  className="block w-full py-1.5 px-3 text-sm rounded-md border border-slate-900 bg-black/25 outline-none focus:border-blue-500/50"
                  value={path}
                  required
                  onChange={(e) => setPath(e.target.value)}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="flex justify-center items-center py-1 px-3 w-full rounded-md transition-colors bg-blue-500/50 hover:text-gray-300 text-gray-400 mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </DraggableWindow>
  );
};

export default AddForm;
