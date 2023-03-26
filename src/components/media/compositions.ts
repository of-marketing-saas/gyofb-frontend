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

  const uploadFile = async (
    filePrefix: string,
    { id, file }: UploadableFile,
    callback: (s3key: string) => Promise<void>,
  ) => {
    updateFile(id, { status: 'uploading' });
    try {
      const fileKey = `${filePrefix}/${file.name}`;
      const result = await Storage.put(fileKey, file, {
        contentType: file.type,
        progressCallback: (progress) => {
          updateFile(id, { progress: progress.loaded / progress.total });
        },
      });
      updateFile(id, { status: 'uploaded', s3Key: result.key });
      await callback(result.key);
    } catch (error) {
      updateFile(id, { status: 'error' });
      console.error('Failed to upload file', id, error);
    }
  };

  const getMediaFile = async (s3Key: string) => {
    const result = await Storage.get(s3Key);
    return result;
  };

  return { files, addFiles, removeFile, uploadFile, getMediaFile };
};

export class UploadableFile {
  file: File;
  id: string;
  url: string;
  progress: number = 0;
  status: 'pending' | 'uploading' | 'duplicate' | 'uploaded' | 'error' = 'pending';
  s3Key: string = '';

  constructor(file: File) {
    this.file = file;
    this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
    this.url = URL.createObjectURL(file);
  }
}
