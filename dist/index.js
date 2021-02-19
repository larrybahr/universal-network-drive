let networkDriveMac;
let networkDriveWindows;
switch (process.platform) {
    case "darwin":
        {
            networkDriveMac = require('mac-network-drive');
            break;
        }
    case "win32":
        {
            networkDriveWindows = require('windows-network-drive');
            break;
        }
    case "linux":
        {
            throw new Error('OS not supported yet');
        }
    default:
        {
            throw new Error('OS not supported');
        }
}
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
export async function find(drivePath) {
    let result;
    switch (process.platform) {
        case "darwin":
            {
                let temp = await networkDriveMac.find(drivePath);
                result = [];
                if ("string" === typeof temp) {
                    result.push(temp);
                }
                break;
            }
        case "win32":
        default:
            {
                result = await networkDriveWindows.find(drivePath);
                break;
            }
    }
    return result;
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
export async function list() {
    let drives;
    switch (process.platform) {
        case "darwin":
            {
                drives = await networkDriveMac.list();
            }
        case "win32":
        default:
            {
                drives = await networkDriveWindows.list();
                break;
            }
    }
    return drives;
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
export async function mount(drivePath, options = {}) {
    let mountPath;
    switch (process.platform) {
        case "darwin":
            {
                mountPath = await networkDriveMac.mount(drivePath, undefined, options.username, options.password);
            }
        case "win32":
        default:
            {
                mountPath = await networkDriveWindows.mount(drivePath, options.driveLetter, options.username, options.password);
                ;
                break;
            }
    }
    return mountPath;
}
/**
 * @param mountPath - Drive letter or mount path to remove
 * @description Removes a network mount
 * @example
 * networkDrive.unmount("F")
 */
export async function unmount(mountPath) {
    switch (process.platform) {
        case "darwin":
            {
                throw new Error('unmount not implemented yet');
            }
        case "win32":
        default:
            {
                await networkDriveWindows.unmount(mountPath);
                break;
            }
    }
    return;
}
