
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Mail, KeyRound, ArrowRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function SignInForm({ onSuccess }: { onSuccess?: () => void }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Sign in data:", data);
    // In a real app, you would authenticate with your backend here
    toast.success("Successfully signed in!");
    if (onSuccess) onSuccess();
  }

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold gradient-text">Welcome Back</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your credentials to sign in to your account
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="you@example.com"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="button"
              variant="link"
              className="px-0 font-normal text-fintech-purple"
            >
              Forgot password?
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-fintech-purple to-fintech-deep-purple"
          >
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>

      <div className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Button
          type="button"
          variant="link"
          className="px-0 font-normal text-fintech-purple"
          onClick={() => document.getElementById("register-trigger")?.click()}
        >
          Create an account
        </Button>
      </div>
    </div>
  );
}
