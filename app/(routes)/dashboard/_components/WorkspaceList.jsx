"use client"
import { useUser } from "@clerk/nextjs";
import { Button } from "../../../../components/ui/button";
function WorkspaceList() {
    const{user}=useUser();
return (
    <div
    className='my-10 p-10 md:px-24 lg:px-36 xl:px-52'>
        
        <div className="flex justify-between">
            <h2 className="font-bold text-2xl">Hello,{user?.fullName} </h2>
            <Button>+</Button>

        </div>
        
    </div>
)
}

export default WorkspaceList
