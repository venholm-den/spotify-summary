
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const months = [
    { name: "January", path: "/january", year: "2024" },
    { name: "February", path: "/february", year: "2024" },
    { name: "March", path: "/march", year: "2024" },
    { name: "April", path: "/april", year: "2024" },
    { name: "May", path: "/may", year: "2024" },
    { name: "June", path: "/june", year: "2024" },
    { name: "July", path: "/july", year: "2024" },
    { name: "August", path: "/august", year: "2024" },
    { name: "September", path: "/september", year: "2024" },
    { name: "October", path: "/october", year: "2024" },
    { name: "November", path: "/november", year: "2024" },
    { name: "December", path: "/december", year: "2024" }
  ];

  return (
    <div className="min-h-screen bg-spotify-darkgray">
      {/* Header */}
      <div className="bg-gradient-to-b from-spotify-gray to-spotify-darkgray">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Music className="mx-auto mb-4 h-16 w-16 text-spotify-green" />
            <h1 className="text-5xl md:text-6xl font-bold text-spotify-white mb-4 animate-fade-in">
              🎧 Spotify Listening Summaries
            </h1>
            <p className="text-xl text-spotify-lightgray mb-8">
              Explore your music journey month by month
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-spotify-gray border-spotify-lightgray animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl text-spotify-white flex items-center gap-2">
              <Calendar className="h-8 w-8 text-spotify-green" />
              2024 Monthly Summaries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {months.map((month) => (
                <Link key={month.path} to={month.path}>
                  <Button
                    variant="outline"
                    className="w-full h-16 bg-spotify-darkgray border-spotify-lightgray text-spotify-white hover:bg-spotify-green hover:text-spotify-white hover:border-spotify-green transition-all duration-200 text-lg font-medium"
                  >
                    {month.name}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-spotify-black border-t border-spotify-gray mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-spotify-lightgray text-sm">
            Auto-generated daily at 00:00 GMT.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
