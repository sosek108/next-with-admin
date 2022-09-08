import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../../components/Header/Header';
import GlobalStyles from '../../styles/GlobalStyles';

export async function getServerSideProps() {
  return { props: {} };
}

const AdminHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wiśniowski | Administracja</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Header>Hello world!</Header>
    </>
  );
};

export default AdminHome;
