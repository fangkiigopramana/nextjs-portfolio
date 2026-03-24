import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()

  const { data: todos } = await supabase.from('todos').select()
  console.log(todos)

  return (
    <>
    <h1>Hallo</h1>
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
    </>
  )
}