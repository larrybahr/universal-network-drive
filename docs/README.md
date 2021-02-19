universal-network-drive - v0.0.1

# universal-network-drive - v0.0.1

## Table of contents

### Interfaces

- [ListReturnType](interfaces/listreturntype.md)
- [MountOptions](interfaces/mountoptions.md)

### Functions

- [find](README.md#find)
- [list](README.md#list)
- [mount](README.md#mount)
- [unmount](README.md#unmount)

## Functions

### find

▸ **find**(`drivePath`: *string*): *Promise*<string[]\>

**`description`** Finds if a path is already mounted and returns all drive letters that point to that exact path.

**`example`** 
```typescript
await networkDrive.find("\\DoesExist\Path")
// returns
["T"]
```

**`example`** 
```typescript
await networkDrive.find("\\DoesNOTExist\Path")
// returns
[]
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`drivePath` | *string* | Drive path to search for   |

**Returns:** *Promise*<string[]\>

An array of drive letters that point to the drive path

Defined in: [index.ts:43](https://github.com/larrybahr/universal-network-drive/blob/560dabe/src/index.ts#L43)

___

### list

▸ **list**(): *Promise*<[*ListReturnType*](interfaces/listreturntype.md)\>

**`description`** lists all network drives and their paths

**`example`** 
```typescript
await networkDrive.list()
// returns
{
   "F":"\\NETWORKA\Files",
   "K":"\\NETWORKB\DRIVE G"
}
```

**Returns:** *Promise*<[*ListReturnType*](interfaces/listreturntype.md)\>

Object keys are drive letters, values are the network path

Defined in: [index.ts:88](https://github.com/larrybahr/universal-network-drive/blob/560dabe/src/index.ts#L88)

___

### mount

▸ **mount**(`drivePath`: *string*, `options?`: [*MountOptions*](interfaces/mountoptions.md)): *Promise*<string\>

**`description`** Creates a network drive mount and returns the mount path

**`example`** 
```typescript
await networkDrive.mount("\\NETWORKA\Files")
// returns
"F"
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`drivePath` | *string* | Path to create a network drive to   |
`options` | [*MountOptions*](interfaces/mountoptions.md) | options used to create the mount   |

**Returns:** *Promise*<string\>

local mount path (e.g. a drive letter on Windows)

Defined in: [index.ts:133](https://github.com/larrybahr/universal-network-drive/blob/560dabe/src/index.ts#L133)

___

### unmount

▸ **unmount**(`mountPath`: *string*): *Promise*<void\>

**`description`** Removes a network mount

**`example`** 
```typescript
await networkDrive.unmount("F");
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`mountPath` | *string* | Drive letter or mount path to remove   |

**Returns:** *Promise*<void\>

Defined in: [index.ts:161](https://github.com/larrybahr/universal-network-drive/blob/560dabe/src/index.ts#L161)
