import HomeTwo from "@/components/pages/homes/home";

async function loader() {
  const path = "/api/home-page";
  const baseurl = "http://localhost:1337";
  const url = new URL(path, baseurl);

  const res = await fetch(url.href);
  const data = await res.json();
  return { ...data.data };
}

const qs = require("qs");
const query = qs.stringify(
  {
    sort: ["title", "slug"],
  },
  {
    encodeValuesOnly: true,
  }
);

export default async function Home() {
  const data = await loader();
  console.log(data);
  console.log(query);
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* <HomeTwo addClass="two" /> */}
    </>
  );
}
