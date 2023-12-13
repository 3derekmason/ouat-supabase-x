import AuthButton from "../components/AuthButton";

export default async function Index() {
  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-end w-full max-w-4xl p-3 text-sm">
          <AuthButton />
        </div>
      </nav>
      <div className="flex flex-col">
        <h1 className="text-[48px]">Once Upon A Time...</h1>
        <span className="w-[70px] h-[5px] bg-warm-500"></span>
      </div>
      <p className="w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
        dolorem labore, cumque corporis facilis sunt, impedit iusto hic
        recusandae debitis tempora quo dolor. Minus repellendus perferendis
        sapiente enim maxime illum?
      </p>
      <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
