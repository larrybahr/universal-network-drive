declare let networkDrive: any;
/**
 * @param {string} input - Drive path to search for
 * @returns {void}
 * @description Assertion if the value is a non empty string
 */
declare function assertIfNonEmptyString(input: any): void;
declare let windowsNetworkDrive: {
    /**
     * @function find
     * @public
     * @param {string} drivePath - Drive path to search for
     * @returns {Promise<string[]>} - An array of drive letters that point to the drive path
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
    find: (drivePath: any) => Promise<string[]>;
    /**
     * @function isWinOs
     * @public
     * @returns {boolean} - True if is a Windows OS
     * @description Test the current OS is Windows. This was split into a function for code testing
     * @example
     * if (true ===networkDrive.isWinOs())
     * {
     *     console.log("This is running on Windows");
     * }
     */
    isWinOs: () => boolean;
    /**
     * @function list
     * @public
     * @returns {Promise<Object>} - Object keys are drive letters, values are the network path
     * @description lists all network drives and paths
     * @example
     * networkDrive.list()
     * // returns
     * {
     *    "F":"\\NETWORKA\Files",
     *    "K":"\\NETWORKB\DRIVE G"
     * }
     */
    list: () => Promise<{}>;
    /**
     * @function mount
     * @public
     * @param {string} drivePath - Path to create a network drive to
     * @param {string} [driveLetter] - Drive letter to use when mounting. If undefined a random drive letter will be used.
     * @param {string} [username] - Username to use when accessing network drive
     * @param {string} [password] - Password to use when accessing network drive
     * @returns {Promise<string>} - Drive letter
     * @description Creates a network drive
     * @example
     * networkDrive.mount("\\NETWORKA\Files")
     * // returns
     * "F"
     */
    mount: (drivePath: any, driveLetter: any, username: any, password: any) => Promise<any>;
    /**
     * @function unmount
     * @public
     * @param {string} driveLetter - Drive letter to remove
     * @returns {Promise<void>}
     * @description Removes a network drive
     * @example
     * networkDrive.unmount("F")
     */
    unmount: (driveLetter: any) => Promise<any>;
    /**
     * @function pathToWindowsPath
     * @public
     * @param {string} drivePath - Path to be converted
     * @returns {Promise<string>} - Converted path
     * @description Converts a path to a windows path
     * @example
     * networkDrive.pathToWindowsPath('K:/test')
     * // returns
     * 'K:\test'
     */
    pathToWindowsPath: (drivePath: any) => Promise<any>;
};
