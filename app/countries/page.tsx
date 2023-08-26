import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "..//styles/supa.css";
import CountryListComponent from "@/components/CountryList";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });
  const { data: countries } = await supabase.from("countries").select();
  return (
    <div className="container">
      <ul className="country-list">
        {countries?.map((country) => (
          <CountryListComponent
            id={country.id}
            name={country.name}
            key={country.id}
          />
        ))}
      </ul>
    </div>
  );
}
