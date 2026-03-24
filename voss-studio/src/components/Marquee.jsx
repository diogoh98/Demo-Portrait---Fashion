export default function Marquee() {
  const text = "PORTRAIT · FASHION · EDITORIAL · COMMERCIAL · LOOKBOOK · CAMPAIGN · BEAUTY · LIFESTYLE · PORTRAIT · FASHION · ";
  
  return (
    <div className="w-full bg-red h-[40px] flex items-center marquee-container border-y border-red-dark pointer-events-none">
      <div className="marquee-content font-mono text-[11px] text-white tracking-mono pt-[2px]">
        {text}{text}{text}{text}
      </div>
    </div>
  );
}
