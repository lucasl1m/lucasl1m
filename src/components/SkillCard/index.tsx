import { ISkill } from '@/types/interfaces/common';

export function SkillCard({
  src,
  title,
  description,
  borderColor,
}: ISkill) {
  return (
    <div
      className="group relative flex flex-col h-full w-full p-6 gap-4 rounded-xl overflow-hidden transition-all duration-300 bg-surface border border-border hover:border-opacity-80 hover:shadow-lg hover:shadow-button/10 hover:-translate-y-0.5"
      style={{ borderLeftWidth: '4px', borderLeftColor: borderColor }}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 min-w-14 min-h-14 rounded-xl bg-background/60 border border-border">
          <img
            src={src}
            alt=""
            className="w-9 h-9 object-contain"
          />
        </div>
        <h2 className="text-lg font-semibold text-whiteText group-hover:text-whiteText">
          {title}
        </h2>
      </div>
      <p className="text-sm text-body leading-relaxed line-clamp-4">
        {description}
      </p>
    </div>
  );
}
