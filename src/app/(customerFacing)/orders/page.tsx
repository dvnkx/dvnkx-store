"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { SubmitButton } from "./_components/SubmitButton";
import { useFormState } from "react-dom";
import { emailOrdersHistory } from "@/app/_actions/orders.email.actions";

const OrdersPage = () => {
  const [data, action] = useFormState(emailOrdersHistory, {});
  return (
    <form action={action} className="max-2-xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>My Orders</CardTitle>
          <CardDescription>
            Enter your email and we will email you your order history and
            download links
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" required name="email" />
            {data.error && <div className="text-destructive">{data.error}</div>}
          </div>
        </CardContent>
        <CardFooter>
          {data.message ? (
            <p className="text-green-700">{data.message}</p>
          ) : (
            <SubmitButton />
          )}
        </CardFooter>
      </Card>
    </form>
  );
};

export default OrdersPage;
