import React, { useCallback, useState } from 'react';
import { filesService } from '../../repository';

export const AddNewFile = () => {
  const [fileContent, setFileContent] = useState('');
  const handleClick = useCallback(() => {
    const encodedText = new TextEncoder().encode(fileContent);
    filesService.addFile({
      fileId: Date() + fileContent.length,
      content: encodedText,
    });
  }, [fileContent]);

  return (
    <div className="add-new-user">
      <h2>Add new file</h2>
      <input onChange={(e) => setFileContent(e.currentTarget.value)} />
      <button onClick={handleClick}>Add new file</button>
    </div>
  );
};
