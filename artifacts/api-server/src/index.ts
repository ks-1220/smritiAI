import app from "./app";
import { logger } from "./lib/logger";

function getPort(): number {
  const rawPort = process.env["PORT"] ?? "5000";
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    logger.warn({ rawPort }, "Invalid PORT value, falling back to 5000");
    return 5000;
  }

  return port;
}

const port = getPort();

app.listen(port, (err) => {
  if (err) {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  }

  logger.info({ port }, "Server listening");
});
