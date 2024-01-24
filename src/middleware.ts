import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/api/uploadthing", "/favicon.ico"],
});

export const config = {
  matcher: ["/(api|trpc)(.*)", "/(admin)(.*)"],
};
