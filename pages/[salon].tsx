import Head from "next/head";
import { useRouter } from "next/router";
import SalonPage from "../src/components/features/Salon/Salon";
import useSWR from "swr";

const getSalon = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

const endpoint = "/api/salon";

const swrCallback = (slug: string | string[] | undefined) => {
  return slug && typeof slug === "string" ? `${endpoint}?slug=${slug}` : null;
};

const Salon = (): JSX.Element => {
  const router = useRouter();
  const { salon: slug } = router.query;

  const { data, error } = useSWR(swrCallback(slug), getSalon);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Salons | {data?.name}</title>
      </Head>
      <SalonPage salon={data} />
    </>
  );
};

export default Salon;
