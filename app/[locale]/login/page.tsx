import { getSession, getUser } from "@/actions/getUser";
import { LoginForm } from "@/components/login-form"
import { redirect } from "next/navigation";

export default async function Page() {

  const session = await getUser();
  const jUser = JSON.parse(JSON.stringify(session) || '{}')


    console.log(jUser);
  
  
      if (jUser?.user?.email) {
        redirect('/');
      }

  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10
    h-[75vh] mb-12">
      <div className="w-full max-w-sm">
        <LoginForm /> 
      </div>
    </div>
  )
}
