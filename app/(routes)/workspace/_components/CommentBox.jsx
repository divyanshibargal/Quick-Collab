"use client";

import { useThreads } from "@liveblocks/react/suspense";
import { Composer, Thread } from "@liveblocks/react-ui";

function CommentBox() {
    const { threads } = useThreads();
  return (
    <div>
      {threads?.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
      <Composer />
    </div>
  )
}

export default CommentBox
