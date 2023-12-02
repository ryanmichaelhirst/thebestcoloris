declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/votes": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/votes"]
  >(...args: T): typeof args[0];
}
