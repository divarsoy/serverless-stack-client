const dev = {
  STRIPE_KEY: "pk_test_lrPEnrVc0l4iPjFGe2e1Xw2s004mU7Dkp8",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-u7yy8cse5lj3"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://notes-api.ivarsoy.co.uk/dev"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_L51hsjzdb",
    APP_CLIENT_ID: "556gomsgkumupcv81vccvmcebn",
    IDENTITY_POOL_ID: "eu-west-1:e9c815a8-356c-4428-8654-c7004df1d197"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_lrPEnrVc0l4iPjFGe2e1Xw2s004mU7Dkp8",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-rdv09ox1kgwv"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://notes-api.ivarsoy.co.uk/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_puBlk4HRO",
    APP_CLIENT_ID: "53moc522f9imh91eui5ke80788",
    IDENTITY_POOL_ID: "eu-west-1:cfb2b8a6-5d50-42e6-bcbf-633a72394246"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};