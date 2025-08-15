import { ToggleThemeButton } from "@/components/header/ToggleThemeButton";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
      <div className="text-xl font-semibold text-gray-50">
        Ssuamje
      </div>
    </header>
  );
};

export default Header;
