

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
        IdentityPoolId: "us-east-2:e3a344ed-6a8a-4913-bb5b-1b8e05a5fd53"
    }, function (err, data) {
        if (!err) {
            console.log(JSON.stringify(data));
        }
    });
});

var docClient = new AWS.DynamoDB.DocumentClient();
function createItem() {
    var params = {
        TableName: "PortfolioForm",
        Item: {
            "FullNameId": " ",
            "PhoneId": " ",
            "eEmailId": " ",
            "MessageId": " "

        }
    };
    docClient.put(params, function (err, data) {
        if (err) {
            console.log("Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2));
        } else {
            console.log("PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
            alert("Sent!");
        }
    });

}