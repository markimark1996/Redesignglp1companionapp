import { TrendingDown, Award, Calendar, Target } from 'lucide-react';

export function Progress() {
  return (
    <section className="py-6">
      <div className="mb-6">
        <h2 className="text-[#465E5A]">Your Progress</h2>
        <p className="text-[#465E5A]/70 text-sm mt-1">Track your journey and celebrate wins</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-[#465E5A]/15 p-6">
          <div className="w-12 h-12 bg-[#9697C0]/20 text-[#6264A1] flex items-center justify-center mb-4">
            <TrendingDown className="w-6 h-6" />
          </div>
          <p className="text-[#465E5A]/70 text-sm mb-1">Weight Change</p>
          <p className="text-[#465E5A] numeric">-12.4 lbs</p>
          <p className="text-xs text-[#6264A1] mt-1">Since starting</p>
        </div>

        <div className="bg-white border border-[#465E5A]/15 p-6">
          <div className="w-12 h-12 bg-[#DDEFDC]/50 text-[#465E5A] flex items-center justify-center mb-4">
            <Award className="w-6 h-6" />
          </div>
          <p className="text-[#465E5A]/70 text-sm mb-1">Current Streak</p>
          <p className="text-[#465E5A] numeric">14 days</p>
          <p className="text-xs text-[#6264A1] mt-1">Personal best!</p>
        </div>

        <div className="bg-white border border-[#465E5A]/15 p-6">
          <div className="w-12 h-12 bg-[#C5DFF2]/50 text-[#465E5A] flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6" />
          </div>
          <p className="text-[#465E5A]/70 text-sm mb-1">Days on Track</p>
          <p className="text-[#465E5A] numeric">38 of 42</p>
          <p className="text-xs text-[#6264A1] mt-1">90% compliance</p>
        </div>

        <div className="bg-white border border-[#465E5A]/15 p-6">
          <div className="w-12 h-12 bg-[#E3DBD1]/50 text-[#465E5A] flex items-center justify-center mb-4">
            <Target className="w-6 h-6" />
          </div>
          <p className="text-[#465E5A]/70 text-sm mb-1">Goal Progress</p>
          <p className="text-[#465E5A] numeric">62%</p>
          <p className="text-xs text-[#465E5A]/70 mt-1 numeric">18.4 lbs to go</p>
        </div>
      </div>

      {/* Weight Chart */}
      <div className="bg-white border border-[#465E5A]/15 p-6 mb-6">
        <h3 className="text-[#465E5A] mb-4">Weight Trend</h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {[185, 183, 182, 181, 179, 178, 176, 175, 174, 173, 172.6].map((weight, index) => {
            const maxWeight = 185;
            const minWeight = 170;
            const height = ((weight - minWeight) / (maxWeight - minWeight)) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="text-xs text-[#465E5A]/70 numeric">{weight}</div>
                <div
                  className="w-full bg-[#6264A1] hover:bg-[#465E5A] transition-colors cursor-pointer"
                  style={{ height: `${height}%` }}
                />
                <div className="text-xs text-[#465E5A]/50">
                  {index === 0 ? 'Start' : index === 10 ? 'Now' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white border border-[#465E5A]/15 p-6">
        <h3 className="text-[#465E5A] mb-4">Recent Achievements</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-[#E5F2E4]">
            <div className="w-12 h-12 bg-[#6264A1] text-white rounded-full flex items-center justify-center text-xl">
              🏆
            </div>
            <div className="flex-1">
              <p className="text-[#465E5A]">2 Week Streak!</p>
              <p className="text-sm text-[#465E5A]/70">Logged meals 14 days in a row</p>
            </div>
            <span className="text-xs text-[#6264A1] bg-[#DDEFDC] px-3 py-1">
              Today
            </span>
          </div>

          <div className="flex items-center gap-4 p-3 bg-[#C5DFF2]/40">
            <div className="w-12 h-12 bg-[#465E5A] text-white rounded-full flex items-center justify-center text-xl">
              💪
            </div>
            <div className="flex-1">
              <p className="text-[#465E5A]">Protein Goal Master</p>
              <p className="text-sm text-[#465E5A]/70">Hit protein goals 7 days straight</p>
            </div>
            <span className="text-xs text-[#465E5A] bg-[#B2D4EE] px-3 py-1">
              2 days ago
            </span>
          </div>

          <div className="flex items-center gap-4 p-3 bg-[#9697C0]/20">
            <div className="w-12 h-12 bg-[#6264A1] text-white rounded-full flex items-center justify-center text-xl">
              🎯
            </div>
            <div className="flex-1">
              <p className="text-[#465E5A]">First 10 Pounds</p>
              <p className="text-sm text-[#465E5A]/70">Lost 10 pounds on your journey</p>
            </div>
            <span className="text-xs text-[#6264A1] bg-[#DDEFDC] px-3 py-1">
              1 week ago
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}