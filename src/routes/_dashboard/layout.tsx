import { LayoutProps } from "rakkasjs";
import { useEffect } from "react";

import { http } from "@/lib/axios";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/sidebar/app-sidebar";
import { useAppDispatch } from "@/stores/hooks";
import { setAuth } from "@/stores/features/auth/authSlice";
import Navbar from "@/components/layouts/navbar";

export default function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    http
      .get("auth/profile")
      .then(({ data }) => {
        console.log(data);
        dispatch(setAuth(data));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar variant="floating" />
      <main className="relative w-full px-5">
        <Navbar />
        <div className="pt-8">{children}</div>
      </main>
    </SidebarProvider>
  );
}
