import { TrendingUp, Droplet, Target, Zap } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      icon: Target,
      label: 'Daily Protein',
      value: '68g',
      target: '80g',
      percentage: 85,
      color: 'emerald',
    },
    {
      icon: Droplet,
      label: 'Hydration',
      value: '6',
      target: '8 cups',
      percentage: 75,
      color: 'blue',
    },
    {
      icon: Zap,
      label: 'Calories',
      value: '1,245',
      target: '1,500',
      percentage: 83,
      color: 'orange',
    },
    {
      icon: TrendingUp,
      label: 'Weekly Progress',
      value: '5/7',
      target: 'days on track',
      percentage: 71,
      color: 'purple',
    },
  ];

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-slate-900">Today's Overview</h2>
          <p className="text-slate-600 text-sm mt-1">You're doing great! Keep it up</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
            blue: 'bg-blue-50 text-blue-600 ring-blue-100',
            orange: 'bg-orange-50 text-orange-600 ring-orange-100',
            purple: 'bg-purple-50 text-purple-600 ring-purple-100',
          };

          return (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ring-4 ${colorClasses[stat.color as keyof typeof colorClasses]} mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-slate-900">{stat.value}</span>
                <span className="text-xs text-slate-400">/ {stat.target}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${stat.color === 'emerald' ? 'bg-emerald-500' : stat.color === 'blue' ? 'bg-blue-500' : stat.color === 'orange' ? 'bg-orange-500' : 'bg-purple-500'} rounded-full transition-all`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
