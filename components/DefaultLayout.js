import Head from "next/head";

const DefaultLayout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Расписание для БФБО-01-21" />
                <meta property="og:image" content="/logo.png" />
                <meta name="theme-color" content="#2563eb" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                ></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                id="main"
                className="min-h-screen w-full bg-slate-100 flex justify-center "
            >
                <div className="w-full lg:w-3/4 flex flex-col  items-center pt-4">
                    {children}
                </div>
            </main>

            <footer></footer>
        </>
    );
};

export default DefaultLayout;
