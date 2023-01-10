import { MARKDOWN_TYPES_ENUM } from './types';

export const POST_DIR_PATH = 'assets/posts';

export const FILE_DIR_BY_TYPE: Record<MARKDOWN_TYPES_ENUM, string> = {
  [MARKDOWN_TYPES_ENUM.POST]: 'assets/posts',
  [MARKDOWN_TYPES_ENUM.PAGE]: 'assets/page',
}
