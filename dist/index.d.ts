/**
 * @param drivePath - Drive path to search for
 * @returns An array of drive letters that point to the drive path
 * @description Finds if a path is already mounted and returns all drive letters that point to that exact path.
 * @example
 * networkDrive.find("\\DoesExist\Path")
 * // returns
 * ["T"]
 * @example
 * networkDrive.find("\\DoesNOTExist\Path")
 * // returns
 * []
 */
export declare function find(drivePath: string): Promise<string[]>;
interface ListReturnType {
    [driveMount: string]: string;
}
/**
 * @returns Object keys are drive letters, values are the network path
 * @description lists all network drives and their paths
 * @example
 * networkDrive.list()
 * // returns
 * {
 *    "F":"\\NETWORKA\Files",
 *    "K":"\\NETWORKB\DRIVE G"
 * }
 */
export declare function list(): Promise<ListReturnType>;
interface MountOptions {
    /** (Windows Only) Drive letter to use when mounting. If undefined a random drive letter will be used. */
    driveLetter?: string;
    /** Username to use when accessing network drive */
    username?: string;
    /** Password to use when accessing network drive */
    password?: string;
}
/**
 * @param drivePath - Path to create a network drive to
 * @param options - options used to create the mount
 * @returns local mount path (e.g. a drive letter on Windows)
 * @description Creates a network drive mount and returns the mount path
 * @example
 * networkDrive.mount("\\NETWORKA\Files")
 * // returns
 * "F"
 */
export declare function mount(drivePath: string, options?: MountOptions): Promise<string>;
/**
 * @param mountPath - Drive letter or mount path to remove
 * @description Removes a network mount
 * @example
 * networkDrive.unmount("F")
 */
export declare function unmount(mountPath: string): Promise<void>;
export {};
