// app/airdrops/page.tsx
export default function AirdropExplorer() {
  const [filters, setFilters] = useState({
    network: 'all',
    reward: 'high',
    status: 'ongoing'
  });

  return (
    <div className="bg-[#0A1A2F] min-h-screen">
      <FilterBar filters={filters} onFilterChange={setFilters} />
      <AirdropGrid filters={filters} />
      <CalendarView />
    </div>
  );
}