
import MonthlySummary from "@/components/MonthlySummary";

const March = () => {
  const summaryStats = {
    averageTrackDuration: "3:42",
    topArtists: ["Taylor Swift", "The Weeknd", "Dua Lipa", "Bad Bunny", "Olivia Rodrigo"]
  };

  const topTracks = [
    {
      id: 1,
      title: "Anti-Hero",
      artist: ["Taylor Swift"],
      album: "Midnights",
      duration: "3:20",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0V3wPSX9ygBnCm8psDIegu",
      artistUrls: ["https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"]
    },
    {
      id: 2,
      title: "Flowers",
      artist: ["Miley Cyrus"],
      album: "Endless Summer Vacation",
      duration: "3:20",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0yLdNVWF3Srea0uzk55zFn",
      artistUrls: ["https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6"]
    },
    {
      id: 3,
      title: "As It Was",
      artist: ["Harry Styles"],
      album: "Harry's House",
      duration: "2:47",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e",
      artistUrls: ["https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3"]
    },
    {
      id: 4,
      title: "Unholy",
      artist: ["Sam Smith", "Kim Petras"],
      album: "Gloria",
      duration: "2:36",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3nqQXoyQOWXiESFLlDF1hG",
      artistUrls: [
        "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI",
        "https://open.spotify.com/artist/3Xt3RrJMFv5SZkCfUE8C1J"
      ]
    },
    {
      id: 5,
      title: "Shivers",
      artist: ["Ed Sheeran"],
      album: "=",
      duration: "3:27",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/50nfwKoDiSYg8zOCREWAm5",
      artistUrls: ["https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"]
    }
  ];

  return (
    <MonthlySummary
      month="March"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "February", path: "/february" }}
      nextMonth={{ name: "April", path: "/april" }}
    />
  );
};

export default March;
