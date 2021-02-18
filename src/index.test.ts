import {list, find, mount, unmount} from "./index";

describe("mount() and unmount()", () =>
{
	it('Make sure mount is a function', () =>
	{
		expect('function' === typeof mount).toBe(true);
		return;
	});

	it('Make sure unmount is a function', () =>
	{
		expect('function' === typeof unmount).toBe(true);
		return;
	});
	return;
});

describe("find()", () =>
{
	it('Make sure it is a function', () =>
	{
		expect('function' === typeof find).toBe(true);
		return;
	});
	return;
});

describe("list()", () =>
{
	it('Make sure it is a function', () =>
	{
		expect('function' === typeof list).toBe(true);
		return;
	});
	return;
});