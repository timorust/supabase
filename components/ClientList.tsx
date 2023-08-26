"use client";

import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabaseConnect";
import { ICountryList } from "@/types/ICountryList";
import "@/app/styles/clientCountry.css";
import { FetchState } from "@/types/FetchState";

function useFetchCountries() {
  const [countries, setCountries] = useState<ICountryList[]>([]);
  const [fetchLoading, setFetchLoading] = useState<FetchState>("done");

  async function getCountryList() {
    setFetchLoading("loading");
    const { data, error } = await supabase.from("countries").select();
    if (data != null && error == null) {
      setCountries(data);
      setFetchLoading("done");
    } else {
      setFetchLoading("error");
    }
  }

  useEffect(() => {
    getCountryList();
  }, []);

  return {
    countries,
    fetchLoading,
  };
}

export default function ClientList() {
  const [countries, setCountries] = useState<ICountryList[]>([]);
  const [fetchLoading, setFetchLoading] = useState<FetchState>("done");

  async function getCountryList() {
    setFetchLoading("loading");
    const { data, error } = await supabase.from("countries").select();
    if (data != null && error == null) {
      setCountries(data);
      setFetchLoading("done");
    } else {
      setFetchLoading("error");
    }
  }

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <>
      <h2 className="page-title">The Client List Page</h2>
      <div className="client-list-container">
        <section>
          {fetchLoading === "loading" ? (
            <div className="loading">Loading...</div>
          ) : fetchLoading === "done" ? (
            <div className="country-list">
              {countries.map((country) => (
                <div className="country" key={country.id}>
                  <h1>{country.name}</h1>
                  <p>{country.id}</p>
                </div>
              ))}
            </div>
          ) : (
            <h2 className="error-message">Error</h2>
          )}
        </section>
      </div>
    </>
  );
}
