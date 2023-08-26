import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "..//styles/supa.css";
import CountryListComponent from "@/components/CountryList";
import deleteCountry from "@/components/CountryList";
import ClientList from "@/components/ClientList";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });
  const { data: countries } = await supabase.from("countries").select();
  return (
    <div className="container">
      <ClientList />
    </div>
  );
}
