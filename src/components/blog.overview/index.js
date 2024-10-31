'use client';

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

function BlogOverview() {
    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    return (
    <div className="min-h-screen text-white flex flex-col gap-10 p-4 bg-rose-950 font-bold">
            <div>
                <Button onClick={()=>setOpenBlogDialog(true)}>
                    Add new Blog
                </Button>
            </div>
            <div>
                List of blogs
            </div>
            <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Blog</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button">Save Chnages</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    </div>
    )
}

export default BlogOverview;