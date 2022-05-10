import type { GetServerSideProps, NextPage } from "next";
import { api } from "../lib/axios";

export const getServerSideProps: GetServerSideProps = async () => {
  const teste = await api.get(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`);

  console.log(teste);

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return <div>Hello world</div>;
};

export default Home;
