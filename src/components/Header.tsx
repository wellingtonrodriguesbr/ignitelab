import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 border-b-[1px] border-gray-600 flex justify-center items-center bg-gray-700">
      <Logo />
    </header>
  );
}
