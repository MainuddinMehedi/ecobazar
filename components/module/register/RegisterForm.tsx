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
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { SocialLogins } from "../login/SocialLogins";

const formSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .nonempty("Please enter a password")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .nonempty("Please confirm your password")
      .min(8, "Password must be at least 8 characters"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type RegisterFormValues = z.infer<typeof formSchema>;

export default function RegisterForm() {
  const { control, handleSubmit } = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    console.log("clicked/submitted");

    console.log("submitted data: ", data);
  };

  return (
    <Card className="p-6 w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-gray-900 text-center">
          Create an account
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 w-full">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                    aria-invalid={fieldState.invalid}
                    placeholder="Password"
                    type="password"
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
              name="confirmPassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="confirmPassword"
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm Password"
                    type="password"
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

          <div className="mt-4">
            <Controller
              name="acceptTerms"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptTerms"
                    checked={!!field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="text-sm text-gray-500"
                  >
                    I accept the terms and conditions
                  </label>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              )}
            />
          </div>

          <Button type="submit" className="w-full btn-normal py-6! mt-8">
            Register
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-600">
              Or continue with
            </span>
          </div>
        </div>

        <CardFooter>
          <SocialLogins />
        </CardFooter>
      </CardContent>
    </Card>
  );
}
