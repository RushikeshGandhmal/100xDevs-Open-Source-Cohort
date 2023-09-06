const logResponseBody = (body) => {
  console.log("Json body From secondProcess", body);
};

const callbackFn = (result) => {
  result.json().then(logResponseBody);
};

const obj = {
  method: "GET",
};

fetch("http://localhost:3000/?counter=10", obj).then(callbackFn);
