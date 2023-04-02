import React, { useCallback, useState } from 'react';
import { filesService } from '../../repository';

export const AddNewFile = () => {
  const [fileContent, setFileContent] = useState('');
  const handleClick = useCallback(() => {
    const encodedText = new TextEncoder().encode(fileContent);
    filesService.addFile({
      fileId: fileContent,
      content: encodedText,
    });
    setFileContent('');
  }, [fileContent]);

  return (
    <div className="add-new-user">
      <h2>Add new file</h2>
      <input value={fileContent} onChange={(e) => setFileContent(e.currentTarget.value)} />
      <button onClick={handleClick}>Add new file</button>
    </div>
  );
};
