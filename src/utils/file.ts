import * as path from 'path';

/**
 * namespace for file utilities
 */
export namespace fileutil {
  /**
   * Resolves the given file path by expanding `~` to the home directory.
   *
   * @param filepath - The file path to resolve.
   * @returns The resolved file path.
   */
  export const resolve = (filepath: string): string =>  {
    let expanded = filepath;
    if (expanded.startsWith('~')) {
      const home = process.env.HOME || process.env.USERPROFILE;
      if (home) {
        expanded = path.join(home, expanded.slice(1));
      }
    }
    return path.resolve(expanded);
  };
}