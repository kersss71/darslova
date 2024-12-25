import { ImageProps } from "./Image.props";

function Image({ src, alt, width }: ImageProps) {
  return (
    <div className="flex justify-center mb-12">
      <img src={src} alt={alt} width={width} />
    </div>
  );
}

export default Image;
