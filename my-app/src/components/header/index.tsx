import { ToggleThemeButton } from "@/components/header/ToggleThemeButton";

const Header = () => {
  return (
    <header className="bg-red-500 w-full lg:w-2/3 2xl:w-1/2 flex flex-row md:flex-col xl:flex-row gap-2 py-16">
      안녕하세요?
      <ToggleThemeButton />
    </header>
  );
};

export default Header;
