import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

const Home: NextPage = () => {


  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const {first_name, last_name, designation, country, diet, email, id_number, organisation, gender, tel} = Object.fromEntries(new FormData(e.currentTarget));
    console.log({
      first_name,
      last_name,
      designation,
      country,
      diet,
      email,
      id_number,
      organisation,
      tel,
      gender
    });


    const res = await fetch(`/api/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        designation,
        country,
        diet,
        email,
        id_number,
        organisation,
        tel,
        gender
      }),
    });


     if (res.ok) {
       const result = await res.json();
       setLoading(false);

       console.log(result);

       alert("Thank You for your submission");
       setLoading(false);
     } else {
       const result = await res.json();
       console.log(result.response);
       alert(
         `There was an error. Please try again later. Please remember, you cannot sign up with the same email address more than once.`
       );
       setLoading(false);
     }


    setLoading(false)
  }


  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-12">
        <Image
          src="/images/banner_2.jpg"
          alt="Banner"
          className="w-full mx-auto object-cover"
          width={1890}
          height={591}
        />
        <form onSubmit={handleSubmit} className="w-full py-3 px-2">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="block" aria-hidden="true">
            <div className="py-8">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="tel"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="text"
                name="tel"
                id="tel"
                autoComplete="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="block" aria-hidden="true">
            <div className="py-8">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="grid grid-cols-9 mt-3 gap-3">
            <div className="col-span-9 sm:col-span-3">
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700"
              >
                Designation
              </label>
              <select
                id="designation"
                name="designation"
                autoComplete="designation"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Mr</option>
                <option>Miss</option>
                <option>Mrs</option>
                <option>Professor</option>
                <option>Doctor</option>
              </select>
            </div>

            <div className="col-span-9 sm:col-span-3">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                autoComplete="gender"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not To Say</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="diet"
                className="block text-sm font-medium text-gray-700"
              >
                Diet
              </label>
              <select
                id="diet"
                name="diet"
                autoComplete="diet"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Halaal</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>None</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-9 mt-3 gap-3">
            <div className="col-span-9 sm:col-span-3">
              <label
                htmlFor="organisation"
                className="block text-sm font-medium text-gray-700"
              >
                Organisation/Institute
              </label>
              <input
                type="text"
                name="organisation"
                id="organisation"
                autoComplete="organisation"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-9 sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                autoComplete="country"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-9 sm:col-span-3">
              <label
                htmlFor="id_number"
                className="block text-sm font-medium text-gray-700"
              >
                ID Number/Passport
              </label>
              <input
                type="text"
                name="id_number"
                id="id_number"
                autoComplete="id_number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 rounded-lg shadow font-medium uppercase text-white px-8 mt-4 py-2 w-fit"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </main>
    </>
  );
}

export default Home
