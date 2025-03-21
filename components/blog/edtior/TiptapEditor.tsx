"use client"

/* eslint-disable unicorn/no-null */
/* eslint-disable quotes */
import { debounce } from "@/lib/utils"
import React, { useCallback, useState } from "react"
import RcTiptapEditor, {
  BaseKit,
  Blockquote,
  Bold,
  BulletList,
  Clear,
  Code,
  CodeBlock,
  Color,
  ColumnActionButton,
  Emoji,
  FontFamily,
  FontSize,
  Heading,
  Highlight,
  History,
  HorizontalRule,
  Image,
  Indent,
  Italic,
  LineHeight,
  Link,
  MoreMark,
  OrderedList,
  SearchAndReplace,
  SlashCommand,
  Strike,
  TaskList,
  TextAlign,
  Underline,
  locale,
  TextDirection,
  ImageGif,
  Mermaid,
} from "reactjs-tiptap-editor"

import "reactjs-tiptap-editor/style.css"
import { zh_TW } from "../../../constants/zh_TW"

function convertBase64ToBlob(base64: string) {
  const arr = base64.split(",")
  const mime = arr[0].match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

const extensions = [
  BaseKit.configure({
    multiColumn: true,
    placeholder: {
      showOnlyCurrent: true,
    },
    characterCount: {
      limit: 50_000,
    },
  }),
  History,
  SearchAndReplace,
  TextDirection,
  Clear,
  FontFamily,
  Heading.configure({ spacer: true }),
  FontSize,
  Bold,
  Italic,
  Underline,
  Strike,
  MoreMark,
  Emoji,
  Color.configure({ spacer: true }),
  Highlight,
  BulletList,
  OrderedList,
  TextAlign.configure({ types: ["heading", "paragraph"], spacer: true }),
  Indent,
  LineHeight,
  TaskList.configure({
    spacer: true,
    taskItem: {
      nested: true,
    },
  }),
  Link,
  Image.configure({
    upload: (files: File) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files))
        }, 500)
      })
    },
  }),
  ImageGif.configure({
    GIPHY_API_KEY: process.env.NEXT_PUBLIC_GIPHY_API_KEY,
  }),
  Blockquote.configure({ spacer: true }),
  SlashCommand,
  HorizontalRule,
  Code.configure({
    toolbar: false,
  }),
  CodeBlock.configure({ defaultTheme: "dracula" }),
  ColumnActionButton,
  Mermaid.configure({
    upload: (file: File) => {
      // fake upload return base 64
      const reader = new FileReader()
      reader.readAsDataURL(file)

      return new Promise((resolve) => {
        setTimeout(() => {
          const blob = convertBase64ToBlob(reader.result as string)
          resolve(URL.createObjectURL(blob))
        }, 300)
      })
    },
  }),
]

const DEFAULT = `<h1 style="text-align: center">Rich Text Editor</h1><p>A modern WYSIWYG rich text editor based on <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://github.com/scrumpy/tiptap">tiptap</a> and <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://ui.shadcn.com/">shadcn ui</a> for Reactjs</p><p></p><p style="text-align: center"></p><div style="text-align: center;" class="image"><img height="auto" src="https://picsum.photos/1920/1080.webp?t=1" align="center" width="500"></div><p></p><div data-type="horizontalRule"><hr></div><h2>Demo</h2><p>👉<a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://reactjs-tiptap-editor.vercel.app/">Demo</a></p><h2>Features</h2><ul><li><p>Use <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://ui.shadcn.com/">shadcn ui</a> components</p></li><li><p>Markdown support</p></li><li><p>TypeScript support</p></li><li><p>I18n support (vi, en, zh, pt)</p></li><li><p>React support</p></li><li><p>Slash Commands</p></li><li><p>Multi Column</p></li><li><p>TailwindCss</p></li><li><p>Support emoji</p></li><li><p>Support iframe</p></li><li><p>Support mermaid</p></li></ul><h2>Installation</h2><pre><code class="language-bash">pnpm add reactjs-tiptap-editor</code></pre><p></p>`

// TODO: replace default dummy template
// ! [Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438]
// ! This error occurs because yjs was imported twice. And the official solution is to resolve alias for yjs dependency. But the package react-tiptap-editor could not find the yjs module in the node_modules folder. 
function Editor() {
  const [content, setContent] = useState(DEFAULT)
  const refEditor = React.useRef<any>(null)

  const [disable, setDisable] = useState(false)

  const onValueChange = useCallback(
    debounce((value: any) => {
      setContent(value)
    }, 200),
    [],
  )

  // set locale to Traditional Chinese
  locale.setMessage("zh_TW", zh_TW)
  locale.setLang("zh_TW")
  return (
    <main className="px-0 py-5 md:px-2 lg:px-6">
      <div className="place-content-center">
        {/* <button onClick={() => locale.setLang("en")}>English</button>
          <button onClick={() => locale.setLang("zh_TW")}>Manderin</button>
          <button onClick={() => setDisable(!disable)}>
            {disable ? "Editable" : "Readonly"}
          </button> */}
        <RcTiptapEditor
          ref={refEditor}
          output="html"
          content={DEFAULT}
          onChangeContent={onValueChange}
          extensions={extensions}
          disabled={disable}
          useEditorOptions={{
            immediatelyRender: false, 
          }}
          contentClass="p-2"
        />
      </div>
    </main>
  )
}

export default Editor
