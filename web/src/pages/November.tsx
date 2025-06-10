
import MonthlySummary from "@/components/MonthlySummary";

const November = () => {
  const summaryStats = {
    averageTrackDuration: "4:12",
    topArtists: ["King Crimson", "Yes", "Genesis", "Pink Floyd", "Jethro Tull"]
  };

  const topTracks = [
    {
      id: 1,
      title: "21st Century Schizoid Man",
      artist: ["King Crimson"],
      album: "In the Court of the Crimson King",
      duration: "7:20",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/7MQKCwhtOTgfNIjZ7GJhq7",
      artistUrls: ["https://open.spotify.com/artist/7M1FPw29m5FbicYzS2xdpi"]
    },
    {
      id: 2,
      title: "Roundabout",
      artist: ["Yes"],
      album: "Fragile",
      duration: "8:30",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/6yRoRY8Z7XaZnKOF8KqG7t",
      artistUrls: ["https://open.spotify.com/artist/7AC976RDJzL2asmZuz7qil"]
    },
    {
      id: 3,
      title: "Invisible Touch",
      artist: ["Genesis"],
      album: "Invisible Touch",
      duration: "3:29",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2r0nLHI4QlIbhBa8Ci6grZ",
      artistUrls: ["https://open.spotify.com/artist/0bAm8J4g2BHdD50FUx6m3Q"]
    },
    {
      id: 4,
      title: "Money",
      artist: ["Pink Floyd"],
      album: "The Dark Side of the Moon",
      duration: "6:23",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0vFOzaXqZHahrZp6enQwQb",
      artistUrls: ["https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"]
    },
    {
      id: 5,
      title: "Aqualung",
      artist: ["Jethro Tull"],
      album: "Aqualung",
      duration: "6:35",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0HLvDCBOP9ybyD3XTHehOp",
      artistUrls: ["https://open.spotify.com/artist/6w8cGlp3x1xoCKqWbz1u1M"]
    }
  ];

  return (
    <MonthlySummary
      month="November"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "October", path: "/october" }}
      nextMonth={{ name: "December", path: "/december" }}
    />
  );
};

export default November;
