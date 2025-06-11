import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MonthlySummary from "@/components/MonthlySummary";

const DynamicMonth = () => {
  const { year, month } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const file = `/data/${year}-${month}.json`;

    fetch(file)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load summary:", err);
        setLoading(false);
      });
  }, [year, month]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (!data) return <p className="text-center text-red-500">Summary not found.</p>;

  return (
    <MonthlySummary
      month={data.month}
      year={data.year}
      averageTrackDuration={data.averageTrackDuration}
      topArtists={data.topArtists}
      topTracks={data.topTracks}
      previousMonth={data.previousMonth}
      nextMonth={data.nextMonth}
    />
  );
};

export default DynamicMonth;
