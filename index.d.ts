declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProvider {
    children?: ReactNode;
    client: QueryClient;
  }
}
