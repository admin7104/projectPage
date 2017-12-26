import {baseUrl} from './env'

export default async(url = '', data = {}, type = 'POST', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;


	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			// credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
        "Content-Type":"application/json; charset=utf-8",
			},
			// mode: "cors",
			// cache: "force-cache"
		}

		if (type == 'POST') {
      var dataBuffJson = data;
			Object.defineProperty(requestConfig, 'body', {
				value: dataBuffJson
			})
		}

		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			let data = responseJson;
			return data
		} catch (error) {

			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}
