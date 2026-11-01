
import { Suspense } from "react";
import ContactContent from "./contact-content";

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <main
          className="min-h-screen bg-[#070b18]"
          aria-label="Loading contact page"
        />
      }
    >
      <ContactContent />
    </Suspense>
  );
}
