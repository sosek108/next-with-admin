import React, { FunctionComponent } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../../components/Header/Header';
type Props = {};

const AdminHome: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Wiśniowski | Administracja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Hello world!</Header>
    </>
  );
};

export default AdminHome;
