import { Link2Icon, MoreVertical, PenBox, Trash2 } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "../../../../components/ui/dropdown-menu"


function DocumentOptions() {
return (
    <div>
        <DropdownMenu>
<DropdownMenuTrigger>
<MoreVertical className='h-4 w-4'/>
</DropdownMenuTrigger>
<DropdownMenuContent>
    <DropdownMenuItem className="flex gap-2"><Link2Icon className='w-4 h-4'/>Share</DropdownMenuItem>
    <DropdownMenuItem className="flex gap-2"><PenBox className='w-4 h-4'/>Rename</DropdownMenuItem>
    <DropdownMenuItem className="flex gap-2 text-red-500"><Trash2 className='w-4 h-4'/>Delete</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

    </div>
)
}

export default DocumentOptions
