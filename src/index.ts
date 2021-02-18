let networkDrive = require('windows-network-drive');

/**
 * @param drivePath - Drive path to search for
 * @returns An array of drive letters that point to the drive path
 * @description Gets the network drive letter for a path
 * @example
 * networkDrive.find("\\DoesExist\Path")
 * // returns
 * ["T"]
 * @example
 * networkDrive.find("\\DoesNOTExist\Path")
 * // returns
 * []
 */
export async function find(drivePath: string): Promise<string[]>
{
	return [];
};

/**
	 * @returns Object keys are drive letters, values are the network path
	 * @description lists all network drives and paths
	 * @example
	 * networkDrive.list()
	 * // returns
	 * {
	 *    "F":"\\NETWORKA\Files",
	 *    "K":"\\NETWORKB\DRIVE G"
	 * }
	 */
export async function list(): Promise<Object>
{
	return {};
};

/**
 * @param drivePath - Path to create a network drive to
 * @param driveLetter - Drive letter to use when mounting. If undefined a random drive letter will be used.
 * @param username - Username to use when accessing network drive
 * @param password - Password to use when accessing network drive
 * @returns Drive letter
 * @description Creates a network drive
 * @example
 * networkDrive.mount("\\NETWORKA\Files")
 * // returns
 * "F"
 */
export async function mount(drivePath: string, driveLetter?: string, username?: string, password?: string): Promise<string>
{
	return '';
};

/**
 * @param driveLetter - Drive letter to remove
 * @description Removes a network drive
 * @example
 * networkDrive.unmount("F")
 */
export async function unmount(driveLetter: string): Promise<void>
{
	return;
};
