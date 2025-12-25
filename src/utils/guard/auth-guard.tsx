import { LayoutProps } from "rakkasjs";
import Cookies from "js-cookie";

export default function AuthGuard({ children }: LayoutProps) {
  const token = Cookies.get("token");

  console.log("TOKEN", token);

  return children;
}
