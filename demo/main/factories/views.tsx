import { Suspense, lazy } from "react";

const Home = lazy(() => import("../../views/home/Home"));
export const createHomePage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Home />
    </Suspense>
  );
};
