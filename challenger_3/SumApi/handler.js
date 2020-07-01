"use strict";

module.exports.sum = async (event) => {
  let a = 0;
  let b = 0;

  if (event.queryStringParameters) {
    if (event.queryStringParameters.a) {
      a = Number(event.queryStringParameters.a) || 0;
    }

    if (event.queryStringParameters.b) {
      b = Number(event.queryStringParameters.b) || 0;
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        resultado: a + b,
      },
      null,
      2
    ),
  };
};
