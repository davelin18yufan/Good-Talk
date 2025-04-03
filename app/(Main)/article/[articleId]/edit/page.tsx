import TiptapEditor, { DEFAULT } from "@/components/blog/edtior/TiptapEditor";

export default async function EditArticlePage(){
  // TODO: fetch article

  return (
    <main>
      <TiptapEditor initialContent={DEFAULT}/>
    </main>
  )
}