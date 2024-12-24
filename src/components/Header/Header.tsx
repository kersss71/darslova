import { HeaderProps } from "./Header.props";
function Header({ children, }: HeaderProps) {
  return (
    <>
      <div className="text-center mb-8">
        {children}
      </div>
    </>
  );
}

export default Header;
