export const environment = {
  production: false,
  configFile: 'config/config.oss.json',
  baseurl: "https://faj47va712.execute-api.us-east-1.amazonaws.com/prod",
  api_doc_name: "https://jazzosspits-jazz-s3-api-doc-20181123043930024900000002.s3.amazonaws.com",
  envName: "oss",
  multi_env: true,
  slack_support: false,
  envLists: { "nodejs8.10": "Nodejs 8.10", "python2.7": "Python 2.7", "python3.6": "Python 3.6", "java8": "Java 8", "go1.x": "Go 1.x" },
  serviceTabs: ["overview", "{access control}", "metrics", "logs", "{cost}"],
  environmentTabs: ["overview", "deployments", "{code quality}", "metrics", "assets", "logs"],
  charachterLimits: {
    eventMaxLength: {
      "stream_name": 128,
      "table_name": 255,
      "queue_name": 80,
      "bucket_name": 63
    },
    serviceName: 20,
    domainName: 20
  },
  servicePatterns: {
    "serviceName": "^[A-Za-z0-9\-]+$",
    "domainName": "^[A-Za-z0-9\-]+$",
    "slackChannel": "^[A-Za-z0-9\-_]+$",
    "streamName": "[a-zA-Z0-9_.-]+",
    "tableName": "^[A-Za-z0-9\-._]+$",
    "queueName": "[A-Za-z0-9_-]+",
    "bucketName": "[a-z0-9-]+"
  },
  urls: {
    docs_link: "https://github.com/tmobile/jazz/wiki",
    swagger_editor: "http://editor.swagger.io/?url=",
    content_base: "https://github.com/tmobile/jazz-content/blob/master"
  },
  userJourney: {
    registrationMessage: 'Please contact your Jazz Admin(s) to get a registration code.'
  },
  aws: {
    account_number: '774813107280',
    region: "us-east-1",
  }
};
