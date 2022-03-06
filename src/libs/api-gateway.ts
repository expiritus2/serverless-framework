export const formatJSONResponse = (
  response: Record<string, any>,
  statusCode = 200
) => {
  return {
    statusCode,
    body: JSON.stringify(response),
  };
};
