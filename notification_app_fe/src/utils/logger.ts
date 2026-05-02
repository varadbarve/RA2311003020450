export const Log = async (
  stack: string,
  level: string,
  pkg: string,
  message: string
) => {
  return {
    stack,
    level,
    package: pkg,
    message,
  };
};

export default Log;
export {};