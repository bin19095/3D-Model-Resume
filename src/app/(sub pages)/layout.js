import HomeBtn from "../components/projects/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-center py-32 px-16

    ">
        <HomeBtn className="z-1000"/>
        {children}
    </main>
  );
//    flex min-h-screen flex-col items-center justify-between relative
}
