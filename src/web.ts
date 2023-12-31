import { getLogger, oak, oakLogger } from "../deps.ts";
import { Matrix } from "./aggregate.ts";

const logger = () => getLogger("web");

export interface MatrixProvider {
  getMatrix(): Promise<Matrix>;
}

export async function run(params: {
  port: number;
  provider: MatrixProvider;
}) {
  const router = new oak.Router();

  router
    .get("/compat-matrix", async (ctx) => {
      ctx.response.body = await params.provider.getMatrix();
    });

  const app = new oak.Application();

  // CORS
  app.use((ctx, next) => {
    ctx.response.headers.set("Access-Control-Allow-Origin", "*");
    ctx.response.headers.set("Access-Control-Allow-Methods", "*");
    ctx.response.headers.set("Access-Control-Allow-Headers", "*");
    ctx.response.headers.set("Access-Control-Allow-Max-Age", "1728000");

    return next();
  });

  app.use(oakLogger.logger);
  app.use(oakLogger.responseTime);
  app.use(router.routes());
  app.use(router.allowedMethods());

  logger().info(`Server listening on port ${params.port}`);

  await app.listen({ port: params.port });
}
