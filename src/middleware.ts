import app from "./app.config";

export { default } from "next-auth/middleware";

// export const config = { matcher: [`${app.routes.play}(.*)`] };
// export const config = { matcher: [`${app.routes.play}:path*`] };
export const config = { matcher: [`${app.routes.play}:path*`] };
