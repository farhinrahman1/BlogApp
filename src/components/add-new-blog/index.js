'use client';
import { Fragment, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";


function AddNewBlog( {loading, setLoading, blogFormData, setBlogFormData}) {
        const [openBlogDialog, setOpenBlogDialog] = useState(false);

    return (
        <Fragment>
            <div>
                <Button onClick={() => setOpenBlogDialog(true)}>
                    Add new Blog
                </Button>
            </div>
            <Dialog open={openBlogDialog} onOpenChange={()=>setOpenBlogDialog(!openBlogDialog)}>
                <DialogContent
                    className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Blog</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Title
                            </Label>
                            <Input
                                name="title"
                                placeholder="Enter blog title"
                                value={blogFormData?.title}
                                // onChange={(event) =>setBlogFormData({...blogFormData,title: event.target.value})}
                                // onChange= {(value)=>handleInputChange(value)}
                                onChangeCapture={(event) => setBlogFormData({...blogFormData, title:event.currentTarget.value})}
                                className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                            <Input
                                name="description"
                                placeholder="Enter blog description"
                                value={blogFormData?.description}
                                onChangeCapture={(event) => setBlogFormData({ ...blogFormData, description: event.currentTarget.value })}
                                // onChange= {(value)=>handleInputChange(value)}                                id="description"
                                className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button">Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Fragment >
    );
}

export default AddNewBlog;