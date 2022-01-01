const winston = require('winston')
const winstonDaily = require('winston-daily-rotate-file')
const logDir = 'logs';  // logs 디렉토리 하위에 로그 파일 저장
const { combine, timestamp, printf } = winston.format;

// const koreaTime = format((info) => { // NOTE: 한국 시간으로 하기 위해.. 설정을 안 할 시 에는 UTC 0이 default다.
//   info.timestamp = date.format();
//   return info;
// });

// Define log format
const logFormat = printf(info => {
  let mt = require('moment-timezone');
  let date = mt().tz('Asia/Seoul'); // NOTE: 날짜는 한국 시간으로 하고 싶다.
  return `${date.format()} ${info.level}: ${info.message}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [
    // info 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir+'/info',
      filename: `%DATE%.log`,
      maxSize: "20m",
      maxFiles: 30,  // 30일치 로그 파일 저장
      zippedArchive: true, 
    }),
    // error 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error',  // error.log 파일은 /logs/error 하위에 저장 
      filename: `%DATE%.error.log`,
      maxSize: "20m",
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

// Production 환경이 아닌 경우(dev 등) 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),  // 색깔 넣어서 출력
      winston.format.simple(),  // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
    )
  }));
}

logger.stream = {
    write: (message) => {
      logger.info(message);
    },
  };

module.exports = logger