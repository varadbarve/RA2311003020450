export const Log = async (
  stack: string,
  level: string,
  pkg: string,
  message: string
) => {
  // MOCK LOGGER (since auth failed)
  return {
    stack,
    level,
    package: pkg,
    message,
  };
};
