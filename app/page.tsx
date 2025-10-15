"use client";
import { useState } from "react";
import Head from "next/head";
import { HeroSection } from "@/components/hero/hero-section-bg";

export default function HomePage() {
  return (
    <main className="min-h-screen relative border-2 border-green-500">
      <HeroSection />
    </main>
  );
}
