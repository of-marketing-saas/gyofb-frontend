import { ref } from 'vue';
import { Storage } from 'aws-amplify';

export const useFileList = () => {
  const files = ref<UploadableFile[]>([]);

  const fileExists = (checkId: string) => {
    return files.value.some(({ id }) => id === checkId);
  };

  const updateFile = (fileId: string, values: Partial<UploadableFile>) => {
    const index = files.value.findIndex(({ id }) => id === fileId);

    if (index > -1) {
      const fileToUpdate = files.value[index];
      files.value[index] = { ...fileToUpdate, ...values };
      console.log('Updated values', values);
    }
  };

  const addFiles = (newFiles: File[]) => {
    const newUploadableFiles = [...newFiles]
      .map((file) => new UploadableFile(file))
      .filter((file) => !fileExists(file.id));
    files.value = [...files.value, ...newUploadableFiles];
  };

  const removeFile = (idToDelete: string) => {
    const index = files.value.findIndex(({ id }) => id === idToDelete);

    if (index > -1) files.value.splice(index, 1);
  };

  const uploadFile = async (filePrefix: string, { id, file }: UploadableFile) => {
    updateFile(id, { status: 'uploading' });
    try {
      const result = await Storage.put(`${filePrefix}/${file.name}`, file, {
        contentType: file.type,
        progressCallback: (progress) => {
          updateFile(id, { progress: progress.loaded / progress.total });
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
      updateFile(id, { status: 'uploaded', s3Key: result.key });
    } catch (error) {
      updateFile(id, { status: 'error' });
      console.error('Failed to upload file', id, error);
    }
  };
  return { files, addFiles, removeFile, uploadFile };
};

export class UploadableFile {
  file: File;
  id: string;
  url: string;
  progress: number = 0;
  status: 'pending' | 'uploading' | 'uploaded' | 'error' = 'pending';
  s3Key: string = '';

  constructor(file: File) {
    this.file = file;
    this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
    this.url = URL.createObjectURL(file);
  }
}
