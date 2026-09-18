
function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-xl p-2 text-center">
      <div className="flex justify-center">
        {icon}
      </div>

      <h2 className="mt-4 text-xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;

