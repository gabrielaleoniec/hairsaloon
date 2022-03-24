import Head from "next/head";
import SalonList from "../src/components/features/SalonList/SalonList";
import list from "./api/data/salons/salonList.json";

const List = () => {
  return (
    <>
      <Head>
        <title>List of salons</title>
        <meta
          name="description"
          content="You really need to read this website because it's made with Next.js"
        />
      </Head>
      <div>
        <SalonList list={list} />
      </div>
    </>
  );
};

export default List;
