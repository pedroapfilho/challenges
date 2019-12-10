const arr = [
	{id: 1, name: 'king'},
	{id: 2, name: 'master'},
	{id: 3, name: 'lisa'},
	{id: 4, name: 'ion'},
	{id: 5, name: 'jim'},
	{id: 6, name: 'gowtham'},
	{id: 1, name: 'jam'},
	{id: 1, name: 'lol'}
];

// Get the unique objects of this array based on a key
// Just remove the duplicate ones

const getUniqueObjects = (arr, id = 'id') => {
	arr.reduce((acc, val) => {
		const x = acc.find(item => item[id] === val[id]);
		if (!x) return acc.concat([val]);
		return acc;
	}, []);
};

getUniqueObjects(arr, 'id');
