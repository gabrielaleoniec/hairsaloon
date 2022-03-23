import Head from "next/head";
import SalonPage from "../src/components/features/Salon/Salon";

const Salon = ({}): JSX.Element => {
  const salon = {
    id: 30528453,
    slug: "Ms. Calista Vandervort III",
    name: "Maxwell Bergstrom",
    rate: 1,
    address: "12220 Cassin Knoll\nSouth Rod, IN 07157",
    image:
      "https://images.pexels.com/photos/3059404/pexels-photo-3059404.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    phone: "(972) 552-9759",
    website: "http://www.thompson.com/",
    description:
      "Ipsa aut facilis a error. Et ut nulla dignissimos voluptate assumenda sequi amet. Qui voluptatem quia ut rem quaerat. Ut blanditiis eos repellat laudantium.",
  };

  return (
    <>
      <Head>
        <title>Salons | My Cool Site</title>
        <meta
          name="description"
          content="You really need to read this website because it's made with Next.js"
        />
      </Head>
      <SalonPage salon={salon} />
    </>
  );
};

export default Salon;
