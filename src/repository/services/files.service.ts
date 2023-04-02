import { filesTable } from '../dexie.db';
import { Files } from '../interfaces/files';

class FilesService {
  getFileByFileId(fileId: string) {
    return filesTable.get({ fileId });
  }

  addFile(file: Files) {
    return filesTable.add(file);
  }

  updateFileByFileId(file: Files) {
    return filesTable.put(file);
  }
}

export const filesService = new FilesService();
