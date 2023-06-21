import GlassPane from "@/components/GlassPane";
import "../../styles/global.css";
import { Inter } from "@next/font/google";

// const inter = Inter({ variable: "--font-inter" });

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-[100vh] w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
