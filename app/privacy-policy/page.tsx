import type { Metadata } from "next";
import Footer from "@/src/components/Footer/Footer";
import PrivacyDownloadCard from "@/src/components/Legal/PrivacyDownloadCard";
import PrivacyPolicyContent from "@/src/components/Legal/PrivacyPolicyContent";
import PrivacyPolicyHero from "@/src/components/Legal/PrivacyPolicyHero";
import DownloadAppSection from "@/src/components/DownloadApp/DownloadAppSection";

export const metadata: Metadata = {
  title: "Privacy Policy | CargolandFood",
  description:
    "Learn how CargolandFood collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
