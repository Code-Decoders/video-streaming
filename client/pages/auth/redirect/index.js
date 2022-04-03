import { useEffect } from "react";
import Layout from "../../../components/layouts/secondary";

export default function Redirect() {
  useEffect(async () => {
    const AuthProvider = (await import("@arcana/auth")).AuthProvider;
    AuthProvider.handleRedirectPage("http://localhost:3000/");
  });

  return <div>Logging in.....</div>;
}

Redirect.getLayout = (page) => {
  return <Layout title={"Login"}>{page}</Layout>;
};
