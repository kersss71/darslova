import {LogoProps} from './Logo.props';
function Logo( { logo }: LogoProps ) {
  return (
    <div className="flex justify-center items-center mb-16">
      <img src={logo} alt="logo" width={100} />
    </div>
  );
}

export default Logo;
