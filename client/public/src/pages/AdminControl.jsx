const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-black mb-10 tracking-tighter">SONEY ADMIN</h2>
        <nav className="space-y-4">
          <button className="flex items-center gap-3 w-full p-3 bg-blue-600 rounded-lg">📊 Overview</button>
          <button className="flex items-center gap-3 w-full p-3 hover:bg-slate-800 transition">👤 User Management</button>
          <button className="flex items-center gap-3 w-full p-3 hover:bg-slate-800 transition">🏘️ Listing Approvals</button>
          <button className="flex items-center gap-3 w-full p-3 hover:bg-slate-800 transition">💳 Subscription Billing</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Ecosystem Performance</h1>
          <div className="flex gap-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">Live: $42,400 MRR</span>
          </div>
        </header>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <MetricCard title="Total Agents" value="1,240" growth="+12%" />
          <MetricCard title="Ad Revenue" value="$18,500" growth="+5%" />
          <MetricCard title="Lead Referrals" value="840" growth="+22%" />
          <MetricCard title="Zestimate Usage" value="15.2k" growth="+8%" />
        </div>

        {/* Management Tables */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b flex justify-between">
            <h3 className="font-bold">Pending Agent Approvals</h3>
            <button className="text-blue-600 text-sm font-semibold">View All</button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase">
              <tr>
                <th className="p-4">Agent Name</th>
                <th className="p-4">License ID</th>
                <th className="p-4">Subscription</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <AgentRow name="Sarah Miller" id="RE-99201" plan="Premier Gold" />
              <AgentRow name="Marcus Vane" id="RE-88120" plan="Basic" />
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};
