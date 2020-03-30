const Sentry = require('./SentryClient');

export default (
  request,
  response,
  exception
) => {
  Sentry.captureException(exception);
  let status = 500;
  let error = {
    title: 'Unknown Error',
    description: 'Unknown Error Occurred',
    code: 'global.unknown_error'
  };

  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end(
    JSON.stringify({
      errors: [error]
    })
  );
};
