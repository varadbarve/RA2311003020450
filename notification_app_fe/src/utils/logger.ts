export const Log = (
  stack: string,
  level: string,
  pkg: string,
  message: string
) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${stack}] [${level.toUpperCase()}] [${pkg}]: ${message}`;
  
  switch (level.toLowerCase()) {
    case 'error':
      console.error(logMessage);
      break;
    case 'warn':
      console.warn(logMessage);
      break;
    case 'info':
      console.info(logMessage);
      break;
    default:
      console.log(logMessage);
  }

  return {
    timestamp,
    stack,
    level,
    package: pkg,
    message,
  };
};

export default Log;