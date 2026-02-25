type Props = {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  caption?: string;
};

export function TitleSection({ image, icon, title, caption }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {icon ? icon : image ? <img src={image} alt="" className="max-h-10 w-auto object-contain" /> : null}
      <h2 className="text-[2rem] text-whiteText">{title}</h2>
      {caption && (
        <p className="text-sm text-caption text-center max-w-2xl">{caption}</p>
      )}
    </div>
  );
}
