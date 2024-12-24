import { FooterProps } from "./Footer.props";
function Footer({ children }: FooterProps) {
  return (
    <>
      <footer className="mt-auto">{children}</footer>
    </>
  );
}

export default Footer;
