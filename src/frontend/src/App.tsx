import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./contexts/LanguageContext";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import TypeDetailPage from "./pages/TypeDetailPage";
import TypesPage from "./pages/TypesPage";

const rootRoute = createRootRoute({
  component: () => (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const typesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/types",
  component: TypesPage,
  validateSearch: (search: Record<string, unknown>) => ({
    category: (search.category as string) || undefined,
  }),
});

const typeDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/types/$code",
  component: TypeDetailPage,
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: QuizPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  typesRoute,
  typeDetailRoute,
  quizRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
