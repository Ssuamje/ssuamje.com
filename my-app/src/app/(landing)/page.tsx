import { ToggleThemeButton } from "@/components/header/ToggleThemeButton";

const Landing = async () => {
  return (
    <div className={"bg-blue-400"}>
      <h1>프론트는 어려워</h1>
      <ToggleThemeButton />
      {/*<Tests />*/}
    </div>
  );
};

export default Landing;
