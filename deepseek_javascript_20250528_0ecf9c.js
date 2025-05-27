// Custom hook for portfolio tracking
const usePortfolio = (address) => {
  const [portfolio, setPortfolio] = useState({
    claimed: [],
    pending: [],
    expired: []
  });

  useEffect(() => {
    const fetchAirdrops = async () => {
      const res = await fetch(`/api/portfolio?address=${address}`);
      setPortfolio(await res.json());
    };
    address && fetchAirdrops();
  }, [address]);

  return portfolio;
};