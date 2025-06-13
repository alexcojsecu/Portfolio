"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; //
import { Input } from "@/components/ui/input"; //
import { Textarea } from "@/components/ui/textarea"; //
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; //
import { z } from 'zod';
import { formSchema } from "@/lib/schemas";
import { send } from "@/lib/email";
import { useState, useTransition } from "react";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean; message: string } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmissionStatus(null);
    startTransition(async () => {
      try {
        await send(values);
        setSubmissionStatus({ success: true, message: "Your message has been sent successfully!" });
        form.reset();
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmissionStatus({ success: false, message: "Failed to send message. Please try again later." });
      }
    });
  }

  return (
    <div className="bg-black w-full py-12 sm:py-24">
      <Card className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-xl bg-gray-950/70 border border-purple-900/50 backdrop-blur-lg shadow-2xl shadow-purple-500/10">
        <CardHeader className="text-center px-4 sm:px-6 py-6 sm:py-8">
          <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-100">
            Contact Us
          </CardTitle>
          <CardDescription className="mx-auto text-sm sm:text-base text-gray-400 mt-2">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 pb-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your first name"
                          {...field}
                          disabled={isPending}
                          className="h-11 bg-gray-900/80 border-gray-700 text-white placeholder-gray-500 focus-visible:border-purple-500 focus-visible:ring-purple-500/50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your last name"
                          {...field}
                          disabled={isPending}
                          className="h-11 bg-gray-900/80 border-gray-700 text-white placeholder-gray-500 focus-visible:border-purple-500 focus-visible:ring-purple-500/50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        {...field}
                        disabled={isPending}
                        className="h-11 bg-gray-900/80 border-gray-700 text-white placeholder-gray-500 focus-visible:border-purple-500 focus-visible:ring-purple-500/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        className="min-h-[140px] sm:min-h-[180px] resize-none bg-gray-900/80 border-gray-700 text-white placeholder-gray-500 focus-visible:border-purple-500 focus-visible:ring-purple-500/50"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {submissionStatus && (
                <div className={`text-sm p-3 rounded-md border ${
                  submissionStatus.success
                    ? 'text-green-300 bg-green-900/50 border-green-700'
                    : 'text-red-300 bg-red-900/50 border-red-700'
                }`}>
                  {submissionStatus.message}
                </div>
              )}
              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  className="w-full sm:w-1/2 h-12 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 focus-visible:ring-offset-gray-950 transition-all duration-300 ease-in-out"
                  disabled={isPending}
                >
                  {isPending ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}