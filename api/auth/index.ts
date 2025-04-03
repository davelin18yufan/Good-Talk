"use server"

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  console.log(await response.json())
}
