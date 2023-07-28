"use client";
import { formatBytes } from "@/utils/lib/bytes-converter";
import React, { ChangeEvent, useEffect, useState } from "react";

const GroupPage = () => {
  const [files, setFiles] = useState<Set<File>>();

  useEffect(() => {
    console.log("Re render");
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("Event: ", event);
    const newFiles = event.target.files;

    if (!newFiles) return;

    const filesList = new Set<File>();
    for (let i = 0; i < newFiles.length; i++) {
      filesList.add(newFiles[i]);
    }
    setFiles(filesList);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
        multiple
        accept="image/jpeg, image/png"
      />
      <div>
        Selected Files:{" "}
        {files &&
          Array.from(files).map((fil, index) => {
            return (
              <h5 key={index}>
                {fil.name} {formatBytes(fil.size)}
              </h5>
            );
          })}
      </div>
    </div>
  );
};

export default GroupPage;
