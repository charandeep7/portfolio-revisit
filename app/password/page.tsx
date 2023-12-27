"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function Password() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Check if the response includes a redirect URL
        if (data.redirect) {
          // Redirect to the specified URL
          toast.success(data.message);
          router.replace(data.redirect);
        }
      } else {
        // Print 'not allowed' if the response status is not good
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error in fetch:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center items-center p-10 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
      >
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className="text-white border border-gray-600"
        />
        <Button type="submit" className="w-1/4 text-white p-2">
          Enter
        </Button>
      </form>
    </div>
  );
}
