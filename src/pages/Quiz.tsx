import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Award, ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    category: "Transgender Inclusion",
    question: "What is the most appropriate way to refer to a transgender athlete in your sports organization?",
    options: [
      "Use their birth name until they legally change it",
      "Use their chosen name and pronouns immediately",
      "Wait until other team members are comfortable",
      "Avoid using names and use jersey numbers only"
    ],
    correctAnswer: 1,
    explanation: "Respecting an athlete's chosen name and pronouns immediately is fundamental to creating an inclusive environment. This shows respect for their identity and dignity."
  },
  {
    id: 2,
    category: "Transgender Inclusion",
    question: "Which of the following is the best practice for locker room policies regarding transgender athletes?",
    options: [
      "Transgender athletes must use separate facilities",
      "Allow athletes to use facilities matching their gender identity with privacy options for all",
      "Require medical documentation before facility access",
      "Let the majority team members vote on the policy"
    ],
    correctAnswer: 1,
    explanation: "Inclusive policies allow athletes to use facilities that match their gender identity while ensuring privacy options are available for everyone who wants them."
  },
  {
    id: 3,
    category: "Policy Development",
    question: "When updating EDI policies, which stakeholders should be consulted?",
    options: [
      "Only senior management and board members",
      "LGBTQ+ athletes, staff, community members, and advocacy groups",
      "Just legal advisors to ensure compliance",
      "Only coaches and team managers"
    ],
    correctAnswer: 1,
    explanation: "Effective inclusive policies require input from those directly affected, including LGBTQ+ community members and advocacy groups, alongside other stakeholders."
  },
  {
    id: 4,
    category: "LGBTQ+ Awareness",
    question: "What does it mean when someone identifies as non-binary?",
    options: [
      "They are confused about their gender",
      "Their gender identity is neither exclusively male nor female",
      "They are transitioning between genders",
      "They prefer not to disclose their gender"
    ],
    correctAnswer: 1,
    explanation: "Non-binary is a valid gender identity where someone's gender is neither exclusively male nor female. It's part of the diverse spectrum of gender identities."
  },
  {
    id: 5,
    category: "LGBTQ+ Awareness",
    question: "Which statement about sexual orientation is correct?",
    options: [
      "Sexual orientation can be changed through coaching or therapy",
      "Sexual orientation is a choice people make",
      "Sexual orientation is an inherent aspect of a person's identity",
      "Athletes should keep their sexual orientation private"
    ],
    correctAnswer: 2,
    explanation: "Sexual orientation is an inherent aspect of who someone is, not a choice or something that can be changed. Creating safe spaces for all orientations is essential."
  },
  {
    id: 6,
    category: "Inclusive Language",
    question: "What is the best way to ask someone about their pronouns?",
    options: [
      "Assume based on their appearance",
      "Share your own pronouns and invite them to share theirs",
      "Only ask if you're unsure",
      "Wait for them to correct you if you're wrong"
    ],
    correctAnswer: 1,
    explanation: "Sharing your own pronouns and creating space for others to share theirs normalizes the practice and makes it safer for everyone to express their identity."
  },
  {
    id: 7,
    category: "Inclusive Language",
    question: "Which term is most inclusive when addressing a group of athletes?",
    options: [
      "Ladies and gentlemen",
      "Guys",
      "Everyone or team",
      "Boys and girls"
    ],
    correctAnswer: 2,
    explanation: "Gender-neutral terms like 'everyone,' 'team,' or 'athletes' are inclusive of all gender identities and don't make assumptions about who is in the group."
  },
  {
    id: 8,
    category: "Policy Implementation",
    question: "How often should EDI policies be reviewed and updated?",
    options: [
      "Only when complaints are received",
      "Every 5-10 years",
      "Annually with ongoing monitoring",
      "Once created, policies don't need updates"
    ],
    correctAnswer: 2,
    explanation: "Regular annual reviews with ongoing monitoring ensure policies remain relevant, effective, and responsive to evolving understanding and community needs."
  },
  {
    id: 9,
    category: "Allyship",
    question: "What is the most effective way to be an ally to LGBTQ+ athletes?",
    options: [
      "Only speak up when asked directly",
      "Actively challenge discriminatory language and behavior",
      "Support LGBTQ+ athletes privately but remain neutral publicly",
      "Focus solely on their athletic performance"
    ],
    correctAnswer: 1,
    explanation: "Active allyship means consistently challenging discrimination, creating safe spaces, and using your position to advocate for inclusive policies and practices."
  },
  {
    id: 10,
    category: "Creating Safe Spaces",
    question: "What is a key indicator of an LGBTQ+ inclusive sports environment?",
    options: [
      "Having at least one openly LGBTQ+ person on staff",
      "Visible symbols of inclusion, clear policies, and regular training",
      "Not discussing LGBTQ+ topics to avoid controversy",
      "Separate but equal facilities for different groups"
    ],
    correctAnswer: 1,
    explanation: "Truly inclusive environments have visible commitment through symbols (like Pride flags), comprehensive policies, ongoing education, and active enforcement of inclusive practices."
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    const correctAnswers = questions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length;
    setScore(correctAnswers);
    setShowResults(true);

    // Save quiz result if user is logged in
    if (user) {
      const passed = correctAnswers === questions.length;
      const { error } = await supabase
        .from("quiz_results")
        .insert({
          user_id: user.id,
          score: correctAnswers,
          total_questions: questions.length,
          passed: passed,
          quiz_type: 'general_lgbtq'
        });

      if (error) {
        console.error("Error saving quiz result:", error);
        toast({
          title: "Error",
          description: "Failed to save your certificate. Please try again.",
          variant: "destructive",
        });
      } else if (passed) {
        toast({
          title: "Congratulations!",
          description: "Your certificate has been saved to your profile.",
        });
      }
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const promptLogin = () => {
    toast({
      title: "Login required",
      description: "Please login to save your certificates.",
    });
    navigate("/auth");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isPerfectScore = score === questions.length;
  const currentQuestionData = questions[currentQuestion];

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {isPerfectScore ? (
                  <Award className="h-20 w-20 text-yellow-500" />
                ) : (
                  <div className="text-6xl font-bold text-primary">{score}/{questions.length}</div>
                )}
              </div>
              <CardTitle className="text-3xl">
                {isPerfectScore ? "Congratulations! 🎉" : "Quiz Complete"}
              </CardTitle>
              <CardDescription className="text-lg">
                {isPerfectScore
                  ? "You've demonstrated excellent understanding of LGBTQ+ inclusivity!"
                  : `You scored ${score} out of ${questions.length}. Review the answers below to learn more.`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isPerfectScore ? (
                <div className="bg-gradient-to-br from-campaign-start to-campaign-end text-white p-8 rounded-lg mb-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Certificate of Completion</h2>
                    <p className="text-lg mb-2">This certifies that</p>
                    <p className="text-3xl font-bold my-4">{user ? user.email : "Participant"}</p>
                    <p className="text-lg mb-2">has successfully completed the</p>
                    <p className="text-2xl font-bold my-4">LGBTQ+ Inclusivity in Sports Assessment</p>
                    <p className="text-sm mt-6">Date: {new Date().toLocaleDateString()}</p>
                    {user ? (
                      <p className="text-sm mt-2">✓ Saved to your profile</p>
                    ) : (
                      <Button 
                        variant="secondary" 
                        className="mt-4"
                        onClick={promptLogin}
                      >
                        Login to Save Certificate
                      </Button>
                    )}
                    <Button 
                      variant="secondary" 
                      className="mt-6"
                      onClick={() => window.print()}
                    >
                      Print Certificate
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 mb-6">
                  <h3 className="text-xl font-bold">Review Your Answers</h3>
                  {questions.map((question) => {
                    const userAnswer = answers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;
                    return (
                      <Card key={question.id} className={`border-2 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            {isCorrect ? (
                              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                            ) : (
                              <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-2">{question.category}</p>
                              <CardTitle className="text-lg">{question.question}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            {question.options.map((option, idx) => (
                              <div
                                key={idx}
                                className={`p-3 rounded-lg border ${
                                  idx === question.correctAnswer
                                    ? 'bg-green-50 border-green-500 dark:bg-green-950'
                                    : idx === userAnswer && !isCorrect
                                    ? 'bg-red-50 border-red-500 dark:bg-red-950'
                                    : 'bg-secondary'
                                }`}
                              >
                                <p className="text-sm">
                                  {option}
                                  {idx === question.correctAnswer && (
                                    <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>
                                  )}
                                  {idx === userAnswer && !isCorrect && (
                                    <span className="ml-2 text-red-600 font-semibold">✗ Your answer</span>
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm font-semibold mb-1">Explanation:</p>
                            <p className="text-sm">{question.explanation}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}

              <div className="flex gap-4 justify-center">
                <Button onClick={handleRetake} variant="outline">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
                <Link to="/">
                  <Button>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        {!user && (
          <Card className="max-w-2xl mx-auto mb-8 border-primary/50">
            <CardContent className="pt-6">
              <p className="text-center mb-4">
                Login to save your certificates to your profile!
              </p>
              <Button onClick={promptLogin} className="w-full">
                Login or Sign Up
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="max-w-3xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardDescription>Question {currentQuestion + 1} of {questions.length}</CardDescription>
                <CardDescription>{currentQuestionData.category}</CardDescription>
              </div>
              <Progress value={progress} className="mb-4" />
              <CardTitle className="text-2xl">{currentQuestionData.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestionData.id]?.toString()}
                onValueChange={(value) => handleAnswer(currentQuestionData.id, parseInt(value))}
                className="space-y-4"
              >
                {currentQuestionData.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={index.toString()} id={`question-${currentQuestionData.id}-option-${index}`} />
                    <Label
                      htmlFor={`question-${currentQuestionData.id}-option-${index}`}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex-1"
                >
                  Previous
                </Button>
                {currentQuestion === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={Object.keys(answers).length !== questions.length}
                    className="flex-1"
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={answers[currentQuestionData.id] === undefined}
                    className="flex-1"
                  >
                    Next
                  </Button>
                )}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                {Object.keys(answers).length} of {questions.length} questions answered
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
