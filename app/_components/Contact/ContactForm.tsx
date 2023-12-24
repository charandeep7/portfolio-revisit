"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/Font";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  user_email: z.string().email({
    message: "Please provide a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
      template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
      user_id: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
      values,
    };
    toast.promise(
      emailjs
        .send(data.service_id, data.template_id, data.values, data.user_id)
        .then((success) => {
          form.reset();
        }),
      {
        loading: "Sending... 📤",
        success: "Your message has been sent 🎉",
        error: "Uh oh! Something went wrong 😥",
      }
    );
  }
  return (
    <div>
      <h1
        className={`mt-4 lg:mt-0 tracking-wider mb-6 text-2xl capitalize first-letter:text-primary-foreground ${poppins.className}`}
        style={{
          textShadow:
            "0px 18px 2px #0f0f0f, 10px 10px 10px rgba(0, 0, 0, 0.15),10px 12px 2px rgba(0, 0, 0, 0.7)",
        }}
      >
        Contact Me, Let's Make Magic Together
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="user_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="user_email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Message" {...field} className="h-20" />
                </FormControl>
                <FormDescription>
                  Don't think more. Send me the message right now ! 😎
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-transparent border border-solid border-primary hover:bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:scale-110 duration-300"
          >
            Send &nbsp; 🚀
          </Button>
        </form>
      </Form>
    </div>
  );
}
