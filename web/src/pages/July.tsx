
import MonthlySummary from "@/components/MonthlySummary";

const July = () => {
  const summaryStats = {
    averageTrackDuration: "3:48",
    topArtists: ["Daft Punk", "Justice", "Disclosure", "ODESZA", "Flume"]
  };

  const topTracks = [
    {
      id: 1,
      title: "One More Time",
      artist: ["Daft Punk"],
      album: "Discovery",
      duration: "5:20",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0DiWol3AO6WpXZgp0goxAV",
      artistUrls: ["https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"]
    },
    {
      id: 2,
      title: "D.A.N.C.E.",
      artist: ["Justice"],
      album: "†",
      duration: "3:18",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/1Wa7L01mOiOjqaaVJ4SQwL",
      artistUrls: ["https://open.spotify.com/artist/1gR0gsQYvgAFo80eHOlq58"]
    },
    {
      id: 3,
      title: "Latch",
      artist: ["Disclosure", "Sam Smith"],
      album: "Settle",
      duration: "4:16",
      coverUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/0c4IEciLCDdcGMJUjYSnqY",
      artistUrls: [
        "https://open.spotify.com/artist/6nS5roXSAGhTGr34W6n7Et",
        "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
      ]
    },
    {
      id: 4,
      title: "Say My Name",
      artist: ["ODESZA"],
      album: "In Return",
      duration: "4:20",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/3AKtNYe4OwCd7OI5kHNS1o",
      artistUrls: ["https://open.spotify.com/artist/0uCCBpmg6MrPb1KY2msceF"]
    },
    {
      id: 5,
      title: "Never Be Like You",
      artist: ["Flume"],
      album: "Skin",
      duration: "4:04",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      spotifyUrl: "https://open.spotify.com/track/4iRJuXi26MdKKK2Mw5XWqw",
      artistUrls: ["https://open.spotify.com/artist/6nxWCVXbOlEVRexSbLsTer"]
    }
  ];

  return (
    <MonthlySummary
      month="July"
      year="2024"
      averageTrackDuration={summaryStats.averageTrackDuration}
      topArtists={summaryStats.topArtists}
      topTracks={topTracks}
      previousMonth={{ name: "June", path: "/june" }}
      nextMonth={{ name: "August", path: "/august" }}
    />
  );
};

export default July;
