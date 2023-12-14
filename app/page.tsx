import AuthButton from "../components/AuthButton";
import SideBarMain from "@/components/SideBarMain";

/*
  Home page will show the current day's story.
  [ ] If no lines have been added (to any story) we'll display a charming 'get this story started' message
  [ ] Menu in top navbar will open a side menu/modal that will have links to previous dates
  [ ] Anon can create a submission for story but it will go to voting
  [ ] Users can create a submission according to rules
  [ ] 
 */

export default async function Index() {
  return (
    <>
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          <SideBarMain />
          <AuthButton />
        </div>
      </nav>
      <div className="flex flex-col items-center flex-1 w-full gap-20 p-4">
        <div className="flex flex-col">
          <h1 className="text-[48px]">Once Upon A Time...</h1>
          <span className="w-[70px] h-[5px] bg-warm-500"></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          dolorem labore, cumque corporis facilis sunt, impedit iusto hic
          recusandae debitis tempora quo dolor. Minus repellendus perferendis
          sapiente enim maxime illum?
        </p>
      </div>
    </>
  );
}
