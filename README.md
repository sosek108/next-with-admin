# WPanel administracyjny na Next.js

## Wstęp

TBD

## Wymagania

- node v16
- mariadb
- docker
- sequelize-cli
- cierpliwość

## Pierwsze uruchomienie

```bash
npm i -g sequelize
yarn install
sequelize db:migrate
sequelize db:seed:all
```

## Development

```bash
docker-compose up -d
yarn dev
```

## Deployment

**TBD**

## Warte uwagi

W projekcie wykorzystywane są następujące technologie, biblioteki i rozwiązania:

- [ReactJS](https://pl.reactjs.org)
- [Strapi Headless CMS](https://strapi.io)
- [next.js](https://nextjs.org)
- [styled-components](https://styled-components.com)
- [tailwind](https://tailwindcss.com)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [NextAuth.js](https://github.com/nextauthjs/next-auth)
- [Sequelize](https://sequelize.org)
- [Migracje](https://sequelize.org/docs/v6/other-topics/migrations/)

## Tematy do rozwiązania

- języki
- security
- seo
- migracje
- menu

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
