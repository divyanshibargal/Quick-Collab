"use client";
import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

export function Room({ children, params }) {
  return (
    <LiveblocksProvider 
    authEndpoint={"/api/liveblocks-auth?roomId="+params?.documentid}
    resolveUsers={async ({ userIds }) => {
      const q = query(collection(db,'CollabUsers'),where('email', 'in', userIds));
      const querySnapshot = await getDocs(q);
      const userList = [];
      querySnapshot.forEach((doc)=>{
        console.log(doc.data());
        userList.push(doc.data());

      })
      return userList;
    }}
    
    resolveMentionSuggestions={async ({ text, roomId }) => {
      console.log(text);
      const q = query(collection(db,'CollabUsers'),where('email', '!=',null));
      const querySnapshot = await getDocs(q);
      let userList = [];
      querySnapshot.forEach((doc)=>{
        console.log(doc.data());
        userList.push(doc.data());
      })

      console.log(userList)

      if (text) {
        console.log('Filtering user list with text: ', text);
        userList = userList.filter((user) => user.name.includes(text));
      }

      console.log(userList.map((user) => user.email))

      return userList.map((user) => user.email);
    }}

    >
      <RoomProvider id={params?.documentid}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}