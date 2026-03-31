"use client"
import { useState } from 'react';
import { Bot, Zap, ShieldCheck, User, LayoutDashboard, Send } from 'lucide-react';

export default function SunCore() {
  const [role, setRole] = useState('org'); // 'org' для Куратора, 'vol' для Волонтера

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-200 font-sans">
      {/* ВЕРХНЯЯ ПАНЕЛЬ */}
      <nav className="border-b border-slate-800 bg-[#161b22] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <span className="text-white font-black text-xl">S</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none text-white">SUN CORE</h1>
            <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Proactive Engine</p>
          </div>
        </div>

        <div className="flex bg-[#0d1117] p-1 rounded-xl border border-slate-700">
          <button 
            onClick={() => setRole('org')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${role === 'org' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            КУРАТОР
          </button>
          <button 
            onClick={() => setRole('vol')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${role === 'vol' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            ВОЛОНТЕР
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {role === 'org' ? (
          /* ИНТЕРФЕЙС КУРАТОРА (ПО БРИФУ) */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Bot className="text-cyan-400" />
                  <h2 className="text-xl font-bold">AI-Интервьюер Задач</h2>
                </div>
                
                <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 h-80 mb-4 overflow-y-auto flex flex-col gap-4">
                  <div className="bg-[#1c2128] border border-slate-700 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[80%] text-sm">
                    <p className="text-cyan-400 font-bold mb-1">SUN AI:</p>
                    Привет! Опиши задачу в свободной форме. Я помогу структурировать её для платформы Proji.
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-500/30 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl max-w-[80%] ml-auto text-sm text-white">
                    Нам нужно 5 человек на субботник в эту субботу, парк Горького, 10:00.
                  </div>
                  <div className="bg-[#1c2128] border border-slate-700 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[80%] text-sm">
                    <p className="text-cyan-400 font-bold mb-1">SUN AI:</p>
                    Принято. Нужно ли брать свой инвентарь или мы его предоставляем?
                  </div>
                </div>

                <div className="flex gap-3">
                  <input type="text" placeholder="Введите ответ..." className="flex-1 bg-[#0d1117] border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
                  <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 rounded-xl transition-all">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Статус задачи (JSON)</h3>
                <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 font-mono text-[10px] text-emerald-400">
                  <pre>{`{
  "title": "Субботник",
  "status": "DRAFT",
  "ai_score": "READY"
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ИНТЕРФЕЙС ВОЛОНТЕРА (ПО БРИФУ) */
          <div className="space-y-6">
             <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                   <div className="w-20 h-20 bg-gradient-to-tr from-cyan-600 to-blue-500 rounded-full flex items-center justify-center text-3xl font-black">A</div>
                   <div>
                      <h2 className="text-2xl font-bold text-white">Adina</h2>
                      <p className="text-cyan-400 text-sm">Верифицированный волонтер • 120 XP</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-xs text-slate-500 uppercase font-black">Match Accuracy</p>
                   <p className="text-4xl font-black text-white">98%</p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-lg">Эко-мониторинг рек</h3>
                      <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded-full font-bold">TOP MATCH</span>
                   </div>
                   <p className="text-sm text-slate-400 mb-6">"Ваши навыки в биологии и доступность в выходные идеально подходят для этого проекта."</p>
                   <button className="w-full bg-[#0d1117] border border-slate-700 group-hover:bg-cyan-600 group-hover:border-cyan-600 py-3 rounded-xl font-bold text-sm transition-all text-white">Принять задачу</button>
                </div>
             </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-6 left-6 flex items-center gap-2 bg-[#161b22] border border-slate-800 px-4 py-2 rounded-full text-[10px] font-mono shadow-2xl">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        SYSTEM: <span className="text-emerald-500 uppercase">Proactive Protocol Active</span>
      </div>
    </div>
  );
}