import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "..//app//styles/country.css";
import { revalidatePath } from "next/cache";
import { ICountryList } from "@/types/ICountryList";

export default function CountryListComponent(props: ICountryList) {
  async function deleteCountry() {
    "use server";
    const supabase = createServerComponentClient({ cookies });
    console.log("deleteCountry");
    const { error } = await supabase
      .from("countries")
      .delete()
      .match({ id: props.id });
    revalidatePath("./CountryList.tsx");
  }
  return (
    <form action={deleteCountry} className="country-container">
      <li key={props.id} className="country-item">
        {props.name}
      </li>
      <button className="delete-button" type="submit">
        Delete
      </button>
    </form>
  );
}
