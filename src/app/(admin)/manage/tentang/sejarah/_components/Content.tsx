"use client";

import { Editor } from "@/components/Editor";
import { Preview } from "@/components/Preview";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ContentProps {
  desc: any;
}
export const Content = ({ desc }: ContentProps) => {
  const [contentValue, setContentValue] = useState(desc);
  const [isEdited, setIsEdited] = useState(false);

  return (
    <div>
      {isEdited ? (
        <Button
          size="sm"
          className="mb-5"
          onClick={() => setIsEdited(!isEdited)}
        >
          Simpan
        </Button>
      ) : (
        <Button
          size="sm"
          className="mb-5"
          onClick={() => setIsEdited(!isEdited)}
        >
          Edit
        </Button>
      )}

      {isEdited ? (
        <Editor value={contentValue} onChange={(e) => setContentValue(e)} />
      ) : (
        <Preview value={desc} />
      )}
    </div>
  );
};
