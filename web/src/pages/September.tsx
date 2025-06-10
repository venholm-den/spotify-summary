
import MonthlySummary from "@/components/MonthlySummary";

const September = () => {
  const summaryStats = {
    averageTrackDuration: "3:33",
    topArtists: ["The 1975", "BROCKHAMPTON", "Kali Uchis", "Daniel Caesar", "FKA twigs"]
  };

  const topTracks = [
    {
      id: 1,
      title: "Somebody Else",
      artist: ["The 1975"],
      album: "I Like It When You Sleep, for You Are So Beautiful Yet So Unaware of It",
      duration: "5:47",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/13RAkrt4vJ3z4KOHnPeTJb",
      artistUrls: ["https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW"]
    },
    {
      id: 2,
      title: "GOLD",
      artist: ["BROCKHAMPTON"],
      album: "SATURATION",
      duration: "3:35",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3SgHNOIFs2U7Fzm3ZrVIzJ",
      artistUrls: ["https://open.spotify.com/artist/1Bl6wpkWCQ4KVgnASpvzzA"]
    },
    {
      id: 3,
      title: "telepatía",
      artist: ["Kali Uchis"],
      album: "Sin Miedo (del Amor y Otros Demonios)",
      duration: "2:51",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/6Qs4SXO9dwPj5GKvVOv8Ki",
      artistUrls: ["https://open.spotify.com/artist/0UOsk8WLGShWWqRSHFwbVh"]
    },
    {
      id: 4,
      title: "Best Part",
      artist: ["Daniel Caesar", "H.E.R."],
      album: "Freudian",
      duration: "3:29",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/1aS9zpryzkdV7RXMImEJxo",
      artistUrls: [
        "https://open.spotify.com/artist/2FXC3k01G6Gw61bmprjgqS",
        "https://open.spotify.com/artist/3Y7RZ31TRPVadSFVy1o8os"
      ]
    },
    {
      id: 5,
      title: "Two Weeks",
      artist: ["FKA twigs"],
      album: "LP1",
      duration: "4:04",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/2OOT9jOXzAOI9Qzfgz4sXK",
      artistUrls: ["https://open.spotify.com/artist/6nB0iY1cjSY1KyhYyuIIKH"]
    }
  ];

  return (
    <MonthlySummary
      month="September"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "August", path: "/august" }}
      nextMonth={{ name: "October", path: "/october" }}
    />
  );
};

export default September;
