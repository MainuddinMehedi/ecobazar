"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { SocialLogins } from "./SocialLogins";

const formSchema = z.object({
  email: z
    .string()
    .nonempty("Please enter an email address")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("clicked/submitted");

    console.log("submitted data: ", data);
  };

  return (
    <Card className="p-6 w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-gray-900 text-center">
          Sign In
        </CardTitle>
      </CardHeader>

      <CardContent className="w-full">
        <form
          id="login-form"
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Email"
                    autoComplete="off"
                    className="py-[22px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Password"
                    autoComplete="off"
                    className="py-[22px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <div className="flex items-center justify-between mt-4">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={!!field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
                  >
                    Remember me
                  </label>
                </div>
              )}
            />

            <Link
              href="/forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full btn-normal py-6!">
            Log in
          </Button>
        </form>
      </CardContent>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-600">Or continue with</span>
        </div>
      </div>

      <CardFooter className="flex-col">
        <SocialLogins />

        <div className="mt-8 text-center text-sm text-gray-600">
          Don&apos;t have account?{" "}
          <Link
            href="/register"
            className="font-medium text-gray-900 hover:text-success hover:underline"
          >
            Register
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
