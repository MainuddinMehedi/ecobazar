"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CommentForm({ blogId }: { blogId: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    saveInfo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // form submission logic..
    console.log("Submitting comment for blog:", blogId, formData);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-medium text-gray-900">Leave a Comment</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-900">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Zakir Hossen"
              className="border-gray-200 focus-visible:ring-green-600 h-12"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-900">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="zakirsoft.20@gmail.com"
              className="border-gray-200 focus-visible:ring-green-600 h-12"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-900">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Write your comment here..."
            className="border-gray-200 focus-visible:ring-green-600 min-h-[150px] resize-y"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="save-info"
            className="data-[state=checked]:bg-green-600 border-gray-300 data-[state=checked]:border-gray-500"
            checked={formData.saveInfo}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, saveInfo: checked as boolean })
            }
          />
          <Label
            htmlFor="save-info"
            className="text-sm font-normal text-gray-500 cursor-pointer"
          >
            Save my name and email in this browser for the next time I comment.
          </Label>
        </div>

        <Button
          type="submit"
          className="bg-success hover:bg-success/95 text-white rounded-full px-8 h-13 font-semibold text-sm transition-colors"
        >
          Post Comments
        </Button>
      </form>
    </div>
  );
}
