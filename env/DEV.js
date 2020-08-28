module.exports = {
  serverPort: 51509,
  coreHrApi: 'https://hcmcloud.excelityglobal.com/WSEDM/api',
  coreHrURL: 'http://localhost/WSEDM',
  workflowURL: 'http://localhost:51515/DWD',
  reminderURL: 'https://hcmclouduat.excelityglobal.com/reminder/api/v1.0',
  dbUrl: 'cluster0.tykz7.mongodb.net/',
  env:'DEV',
  database: {
      host: 'localhost',
      port: '27017',
      name: 'recruitment-brd',
      username: 'aditya',
      password: 'Adit12345'
  },
  'dbuser': {
    config: {
        autoIndex: false
    },
    user: 'aditya',
    pass: 'Adit12345',
    useMongoClient: true
},
  mail: {
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: false,
      port: 587,
      auth: {
          user: 'test@gmail.com',
          pass: 'test1234'
      },
      tls: {
          rejectUnauthorized: false
      },
      debug: true
  },
  cds: {
      //url: 'http://localhost:3004/CDS/'
      url: 'https://hcmclouduat.excelityglobal.com/CDS/'
  },
  hcmUiLink: 'http://localhost:8000',
};
