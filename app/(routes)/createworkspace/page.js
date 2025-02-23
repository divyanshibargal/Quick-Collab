"use client";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import CoverPicker from "../../../components/ui/CoverPicker";
import { Input } from "../../../components/ui/input";

function CreateWorkspace() {
const [coverImage, setcoverImage] = useState("/cover.png");
const [workspaceName,setWorkspaceName]=useState();

return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
    <div className="shadow-2xl rounded-xl">
        {/* cover image */}
        <CoverPicker>
        <div className="relative group">
        <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center">
            Change cover
        </h2>
        <div className="group-hover:opacity-40 ">
            <Image
            src={coverImage}
            width={400}
            height={400}
            className="w-full h-[150px] object-cover
                rounded-t-xl"
            alt="CoverImage"
            />
        </div>
        </div>
        </CoverPicker>
        {/* Input section */}
        <div className="p-12">
        <h2 className="font-semibold text-xl ">Create a new Workspace</h2>
        <h2 className="text-sm mt-2">
            This is a shared Workspace where you can collaborate with your team.
            You can always rename it later.
        </h2>
        <div className="mt-8 flex gap-2 items-center">
            <Button variant="outline">
            <SmilePlus />
            </Button>
            <Input placeholder=" Workspace Name"
            onChange={(e)=>setWorkspaceName(e.target.value)}
            />
        </div>
        <div className="mt-7 flex justify-end gap-6">
            <Button disabled={!workspaceName?.length}>Create</Button>
            <Button variant="outline">Cancel</Button>
        </div>
        </div>
    </div>
    </div>
);
}

export default CreateWorkspace;
