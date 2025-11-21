import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Award, Calendar, CheckCircle } from "lucide-react";

interface QuizResult {
  id: string;
  score: number;
  total_questions: number;
  passed: boolean;
  completed_at: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
      await fetchQuizResults();
      setIsLoading(false);
    };

    checkUser();
  }, [navigate]);

  const fetchQuizResults = async () => {
    const { data, error } = await supabase
      .from("quiz_results")
      .select("*")
      .order("completed_at", { ascending: false });

    if (error) {
      console.error("Error fetching quiz results:", error);
      return;
    }

    setQuizResults(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const passedQuizzes = quizResults.filter(result => result.passed);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl gradient-text">Your Profile</CardTitle>
              <CardDescription>
                {user?.email}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Your Certificates
              </CardTitle>
              <CardDescription>
                You have earned {passedQuizzes.length} certificate{passedQuizzes.length !== 1 ? 's' : ''}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {quizResults.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    You haven't completed any quizzes yet.
                  </p>
                  <Button onClick={() => navigate("/quiz")}>
                    Take Your First Quiz
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {quizResults.map((result) => (
                    <Card key={result.id} className={result.passed ? "border-primary" : "border-muted"}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              {result.passed && (
                                <CheckCircle className="w-5 h-5 text-primary" />
                              )}
                              <h3 className="font-semibold">
                                LGBTQ+ Inclusivity Quiz
                              </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Score: {result.score}/{result.total_questions} ({Math.round((result.score / result.total_questions) * 100)}%)
                            </p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {new Date(result.completed_at).toLocaleDateString()}
                            </div>
                          </div>
                          {result.passed && (
                            <div className="text-center bg-primary/10 px-4 py-2 rounded-lg">
                              <Award className="w-8 h-8 text-primary mx-auto mb-1" />
                              <p className="text-xs font-semibold">Certified</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
