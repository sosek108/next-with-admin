import React, { FunctionComponent } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

type Props = {};

const AdminHome: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Wiśniowski | Administracja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hello :)</main>
    </>
  );
};

export default AdminHome;
