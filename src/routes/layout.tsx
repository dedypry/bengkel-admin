import { LayoutProps } from "rakkasjs";
import "@/assets/css/index.css";
import { Provider } from "react-redux";

import { store } from "@/stores";
export default function Layout({ children }: LayoutProps) {
  return <Provider store={store}>{children}</Provider>;
}
