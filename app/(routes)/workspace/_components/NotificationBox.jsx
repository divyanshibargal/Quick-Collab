import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../../../@/components/ui/popover"
  import { useInboxNotifications } from "@liveblocks/react/suspense";
import {
  InboxNotification,
  InboxNotificationList,
} from "@liveblocks/react-ui";
  
function NotificationBox({children}) {
    const { inboxNotifications } = useInboxNotifications();
  return (
    <Popover>
    <PopoverTrigger>{children}</PopoverTrigger>
    <PopoverContent> 
        <InboxNotificationList>
      {inboxNotifications.map((inboxNotification) => (
        <InboxNotification
          key={inboxNotification.id}
          inboxNotification={inboxNotification}
        />
      ))}
    </InboxNotificationList>
    This is popover
    </PopoverContent>
  </Popover>
  
  )
}

export default NotificationBox
