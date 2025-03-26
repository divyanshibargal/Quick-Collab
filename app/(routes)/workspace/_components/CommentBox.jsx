"use client";

import { useThreads } from "@liveblocks/react/suspense";
import { Composer, Thread } from "@liveblocks/react-ui";

function CommentBox() {
    const { threads } = useThreads();
  return (
    <div className="w-[250px] h-[250px] shadow-lg rounded-lg overflow-auto">
      {threads?.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
      <Composer />
    </div>
  )
}

export default CommentBox
