

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:e3a344ed-6a8a-4913-bb5b-1b8e05a5fd53',
});

AWS.config.credentials.get(function (err) {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    console.log("Cognito Identity Id: " + AWS.config.credentials.identityId);

    // Other service clients will automatically use the Cognito Credentials provider
    // configured in the JavaScript SDK.
    var cognitoSyncClient = new AWS.CognitoSync();
    cognitoSyncClient.listDatasets({
        IdentityId: AWS.config.credentials.identityId,
        IdentityPoolId: "arn:aws:cognito-idp:us-east-2:645049789661:userpool/us-east-2_euroGBZRC"
    }, function (err, data) {
        if (!err) {
            console.log(JSON.stringify(data));
        }
    });
});

var params = {
    Item: {
        "FullNameId": {
            S: "Someone Possibly Famous"
        },
        "EmailId": {
            S: "NoOneYouKnow@noone.com"
        },
        "PhoneId": {
            N: "0000000000"
        },
        "MessageId": {
            S: "A message regarding visit."
        }
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "PortfolioForm"
};

var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
dynamodb.putItem(params, function (err, data) {
    if (err) { console.log(err, err.stack); console.log("Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2)); } // an error occurred
    else {
        console.log(data); console.log("PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
        alert("Sent!");
    }

    // successful response
    /*
    data = {
     ConsumedCapacity: {
      CapacityUnits: 1, 
      TableName: "Music"
     }
    }
    */
});


