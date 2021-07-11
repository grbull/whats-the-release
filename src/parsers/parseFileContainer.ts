import { FILE_CONTAINERS, FileContainer } from '../constants';

export function parseFileContainer(
  filename: string
): FileContainer | undefined {
  const fileExtension = filename.split('.').pop();

  if (fileExtension) {
    return FILE_CONTAINERS.find(
      ({ container }) => container.toUpperCase() === fileExtension.toUpperCase()
    );
  }
}
