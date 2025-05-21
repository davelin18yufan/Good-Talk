"use client" // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>
          {error.message}
        </pre>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
