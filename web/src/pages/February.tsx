
import MonthlySummary from "@/components/MonthlySummary";

const February = () => {
  const summaryStats = {
    averageTrackDuration: "3:35",
    topArtists: ["Radiohead", "Bon Iver", "Phoebe Bridgers", "The National", "Sufjan Stevens"]
  };

  const topTracks = [
    {
      id: 1,
      title: "Creep",
      artist: ["Radiohead"],
      album: "Pablo Honey",
      duration: "3:58",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/70LcF31zb1H0PyJoS1Sx1r",
      artistUrls: ["https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"]
    },
    {
      id: 2,
      title: "Re: Stacks",
      artist: ["Bon Iver"],
      album: "For Emma, Forever Ago",
      duration: "6:41",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/59HjlYCeBsxdI0fcm3zglw",
      artistUrls: ["https://open.spotify.com/artist/4LEiUm1SRbFMgfqnQTwUbQ"]
    },
    {
      id: 3,
      title: "Motion Sickness",
      artist: ["Phoebe Bridgers"],
      album: "Stranger in the Alps",
      duration: "3:51",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/1kNvcU5ZzGybJOEUoW8V5l",
      artistUrls: ["https://open.spotify.com/artist/1r1uxoy19fzMxunt3ONAkG"]
    },
    {
      id: 4,
      title: "Bloodbuzz Ohio",
      artist: ["The National"],
      album: "High Violet",
      duration: "4:36",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3ME5ybaBbqOmWe3R6jGAWP",
      artistUrls: ["https://open.spotify.com/artist/2cCUtGK9sDU2EoElnk0GNB"]
    },
    {
      id: 5,
      title: "Chicago",
      artist: ["Sufjan Stevens"],
      album: "Illinois",
      duration: "6:04",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/5BMXKy3ULh9TQODvjLnqc2",
      artistUrls: ["https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c"]
    }
  ];

  return (
    <MonthlySummary
      month="February"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "January", path: "/january" }}
      nextMonth={{ name: "March", path: "/march" }}
    />
  );
};

export default February;
