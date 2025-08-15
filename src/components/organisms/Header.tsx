import Logo from "../atoms/Logo";
import { SwitchTheme } from "../molecules/SwitchTheme";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <Logo />
      <SwitchTheme />
    </div>
  );
}
