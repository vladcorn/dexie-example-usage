import React, { useCallback, useEffect, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { filesService, projectTreeService } from '../../repository';

const decoder = new TextDecoder('utf-8');
const encoder = new TextEncoder();

export const UpdateFile = () => {
  const [fileId, setFileId] = useState('');
  const [fileString, setFileString] = useState('');
  const fileFromDB = useLiveQuery(filesService.getFileByFileId.bind(null, fileId), [fileId]);

  useEffect(() => {
    if (fileFromDB) {
      setFileString(decoder.decode(fileFromDB?.content));
    } else {
      setFileString('');
    }
  }, [fileFromDB]);

  const handleFileId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFileId(e.currentTarget.value);
    },
    [fileId],
  );

  const handleFileContent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFileString(e.currentTarget.value);
    },
    [fileString],
  );

  const handleClick = () => {
    filesService.updateFileByFileId({
      fileId,
      content: encoder.encode(fileString),
    });
  };

  return (
    <div className="add-new-user">
      <h2>Update file</h2>
      <input type="text" placeholder="file ID" onChange={handleFileId} value={fileId} />
      <pre>{JSON.stringify(fileFromDB, null, 2)}</pre>
      <input type="text" value={fileString} placeholder="file content" onChange={handleFileContent} />
      <button onClick={handleClick}>Update file</button>
    </div>
  );
};
