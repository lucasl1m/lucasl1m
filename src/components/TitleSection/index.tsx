type Props = {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  caption?: string;
};

export function TitleSection({ image, icon, title, caption }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {icon ? icon : image ? <img src={image} alt="" className="max-h-12 w-auto object-contain" /> : null}
      <h2 className="text-[2.5rem] text-whiteText">{title}</h2>
      {caption && (
        <p className="text-base text-caption text-center">{caption}</p>
      )}
    </div>
  );
}
