// JavaScript program to count frequencies of array items
function countFreq(arr, n)
{
	let visited =[];
		
	// Traverse through array elements and
	// count frequencies
	for (let i = 0; i < n; i++) {

		// Skip this element if already processed
		if (visited[i] == 1)
			continue;

		// Count frequency
		let count = 1;
		for (let j = i + 1; j < n; j++) {
			if (arr[i] == arr[j]) {
				visited[j] = 1;
				count++;
			}
		}
		console.log(arr[i] + " " + count);
	}
}

// Driver Code

	let arr = [ 10, 20, 20, 10, 10, 20, 5, 20 ];
	let n = arr.length;
	countFreq(arr, n);
