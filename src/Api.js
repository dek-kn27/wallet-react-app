export function paramsToURL(params) {
	let str = '';
	let k, v;
	for ([k, v] of Object.entries(params))
	{
		str += k + "=" + v;
	}
	return str;
}

export async function sendRequest(path, params = {}, authorization = "", method = "GET") {
    console.log("sendRequest");

	const endpoint = `http://127.0.0.1:5000/api/v1/`;
	console.log(authorization);

	let response = await fetch(endpoint + path,
	{
		method: method,
		headers: {
			"Authorization": "Basic dGVzdG5hbWUxOjEyMzQ1Njc4"
		},
		//data: paramsToURL(params),
		//mode: 'no-cors'
	});

	let obj;
	try {
		obj = await response.json();
	} catch (e) {
		throw Error(String(response.status));
	};

	return obj;
};