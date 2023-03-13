export type AmplifyDependentResourcesAttributes = {
  "api": {
    "gyofbApiGateway": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "gyofbAppSync": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "gyofbfrontend45678468": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "gyofbMiddleTier": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "gyofbfrontend": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}