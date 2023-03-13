export default {
  aws_project_region: 'us-west-2',
  aws_cognito_identity_pool_id: 'us-west-2:a4144300-0ac8-4816-8cd3-b06adbaa7247',
  aws_cognito_region: 'us-west-2',
  aws_user_pools_id: 'us-west-2_E2uyjxXGa',
  aws_user_pools_web_client_id: '4ftlgd0d2o163mnefsm1l3tv4f',
  oauth: {
    domain: 'gyofbfrontenddc60cb11-dc60cb11-dev.auth.us-west-2.amazoncognito.com',
    scope: ['phone', 'email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'http://localhost:5173/,https://main.d1muw0x0u6w5oq.amplifyapp.com/',
    redirectSignOut: 'http://localhost:5173/,https://main.d1muw0x0u6w5oq.amplifyapp.com/',
    responseType: 'code',
  },
  federationTarget: 'COGNITO_USER_POOLS',
  aws_cognito_username_attributes: ['EMAIL'],
  aws_cognito_social_providers: ['GOOGLE'],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
  aws_user_files_s3_bucket: 'gyofbfrontend-medias134847-dev',
  aws_user_files_s3_bucket_region: 'us-west-2',
  aws_cloud_logic_custom: [
    {
      name: 'gyofbApiGateway',
      endpoint: 'https://5l96erfcb4.execute-api.us-west-2.amazonaws.com/dev',
      region: 'us-west-2',
    },
  ],
};
