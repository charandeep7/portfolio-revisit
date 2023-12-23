"use client";
import { useState } from "react";
import { cedarville_cursive } from "@/lib/Font";

export default function Logo() {
  const [toggle, setToggle] = useState(true);
  return <p onClick={() => setToggle(!toggle)} className={`text-2xl first-letter:text-primary-foreground first-letter:text-4xl ${cedarville_cursive.className}`}>{toggle ? "Kitish" : "Charandeep"}</p>;
}
