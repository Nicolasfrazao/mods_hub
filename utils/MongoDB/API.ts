var axios = require('axios');
var data = JSON.stringify({
    "collection": "<COLLECTION_NAME>",
    "database": "<DATABASE_NAME>",
    "dataSource": "ModsHubCluste",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://sa-east-1.aws.data.mongodb-api.com/app/data-gwmrb/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'FBsmCWVejCy9hvCeG3Tx6NNGxMzZGzBg7ry9mtIXktTyWS540o1MyJNLwTqhV3YL',
      'Accept': 'application/ejson'
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
