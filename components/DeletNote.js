"use client";

import { useRouter } from "next/navigation";

export default function DeletNote({ id }) {
  const router = useRouter();

  const deleteNote = async (noteId) => {
    await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
      {
        method: "DELETE",
      }
    );

    // forse refresh on create new notes
    router.refresh();
  };

  return <button onClick={() => deleteNote(id)}>[X]</button>;
}
