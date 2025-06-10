
import MonthlySummary from "@/components/MonthlySummary";

const January = () => {
  const summaryStats = {
    averageTrackDuration: "3:28",
    topArtists: ["Arctic Monkeys", "The Strokes", "Tame Impala", "Mac DeMarco", "Glass Animals"]
  };

  const topTracks = [
    {
      id: 1,
      title: "Do I Wanna Know?",
      artist: ["Arctic Monkeys"],
      album: "AM",
      duration: "4:32",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst",
      artistUrls: ["https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"]
    },
    {
      id: 2,
      title: "Last Nite",
      artist: ["The Strokes"],
      album: "Is This It",
      duration: "3:17",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3jZ0GKAZiDMya0dZPrw8zq",
      artistUrls: ["https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V"]
    },
    {
      id: 3,
      title: "Feels Like We Only Go Backwards",
      artist: ["Tame Impala"],
      album: "Lonerism",
      duration: "3:12",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0QeI79sp1vS8L3JgpEO7mD",
      artistUrls: ["https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"]
    },
    {
      id: 4,
      title: "Chamber of Reflection",
      artist: ["Mac DeMarco"],
      album: "Salad Days",
      duration: "3:52",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/78aL6AbEnN7wOHf5qs9X42",
      artistUrls: ["https://open.spotify.com/artist/3Sz7ZnJQBIHsXLUSo0OQtM"]
    },
    {
      id: 5,
      title: "Heat Waves",
      artist: ["Glass Animals"],
      album: "Dreamland",
      duration: "3:58",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/02MWAaffLxlfxAUY7c5dvx",
      artistUrls: ["https://open.spotify.com/artist/4yvcSjfu4PC0CYQyLy4wSq"]
    }
  ];

  return (
    <MonthlySummary
      month="January"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      nextMonth={{ name: "February", path: "/february" }}
    />
  );
};

export default January;
