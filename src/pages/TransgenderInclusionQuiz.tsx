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
    category: "Transgender Rights",
    question: "What is the most respectful way to ask about someone's pronouns in a sports setting?",
    options: [
      "Wait for them to volunteer the information",
      "Share your own pronouns first and invite them to share theirs",
      "Guess based on their appearance",
      "Check official documents"
    ],
    correctAnswer: 1,
    explanation: "Normalizing pronoun sharing by introducing yourself with your pronouns creates a safe, inclusive space for everyone to express their identity."
  },
  {
    id: 2,
    category: "Policy Understanding",
    question: "According to inclusive sports policies, when should a transgender athlete be allowed to compete in their affirmed gender category?",
    options: [
      "After completing all medical transition procedures",
      "According to the specific sport's eligibility criteria, which should be evidence-based and inclusive",
      "Never, they should only compete in mixed categories",
      "Only after legal gender marker change"
    ],
    correctAnswer: 1,
    explanation: "Inclusive policies should be based on scientific evidence and fairness principles specific to each sport, not blanket exclusions or unrealistic requirements."
  },
  {
    id: 3,
    category: "Facility Access",
    question: "What is the best practice for locker room access for transgender athletes?",
    options: [
      "Mandate separate facilities for transgender athletes",
      "Allow access to facilities matching their gender identity, with privacy options available for all",
      "Require proof of medical transition",
      "Let team vote on access"
    ],
    correctAnswer: 1,
    explanation: "Inclusive policies respect gender identity while ensuring privacy options are available for anyone who wants them, without singling out transgender individuals."
  },
  {
    id: 4,
    category: "Terminology",
    question: "Which term should be avoided when referring to a transgender person's identity?",
    options: [
      "Gender identity",
      "Transgender",
      "Transgendered (with 'ed' ending)",
      "Trans"
    ],
    correctAnswer: 2,
    explanation: "'Transgendered' is grammatically incorrect and often considered offensive. The correct terms are 'transgender' (adjective) or 'trans' person."
  },
  {
    id: 5,
    category: "Medical Privacy",
    question: "What level of medical information should a sports organization require from transgender athletes?",
    options: [
      "Complete medical history and documentation",
      "Only what is necessary for sport-specific eligibility, handled confidentially",
      "Public disclosure to all team members",
      "Detailed transition timeline"
    ],
    correctAnswer: 1,
    explanation: "Medical privacy is paramount. Only sport-specific eligibility information should be required, handled confidentially by appropriate officials."
  },
  {
    id: 6,
    category: "Name and Identity",
    question: "How should you handle a situation where an athlete's legal name differs from their chosen name?",
    options: [
      "Always use the legal name on all documents",
      "Use their chosen name in all contexts and update records when possible",
      "Use legal name publicly, chosen name privately",
      "Ask the athlete to use their legal name until changed"
    ],
    correctAnswer: 1,
    explanation: "Respecting someone's chosen name affirms their identity. Organizations should use chosen names and work to update official records respectfully."
  },
  {
    id: 7,
    category: "Training and Education",
    question: "What should be included in transgender awareness training for sports staff?",
    options: [
      "Basic terminology only",
      "Comprehensive coverage of terminology, policies, respectful communication, and scenario-based learning",
      "Medical information about transitioning",
      "Legal requirements only"
    ],
    correctAnswer: 1,
    explanation: "Effective training is comprehensive, covering terminology, policies, communication skills, and practical scenarios to prepare staff for real situations."
  },
  {
    id: 8,
    category: "Misgendering",
    question: "If you accidentally use the wrong pronoun for a transgender athlete, what should you do?",
    options: [
      "Make a big apology and explain why you made the mistake",
      "Briefly correct yourself, use the right pronoun, and move on",
      "Ignore it and hope they didn't notice",
      "Avoid using any pronouns for them in the future"
    ],
    correctAnswer: 1,
    explanation: "A quick correction and moving on shows respect without making the situation uncomfortable or centering your discomfort."
  },
  {
    id: 9,
    category: "Non-binary Athletes",
    question: "How should sports organizations accommodate non-binary athletes?",
    options: [
      "Force them to choose male or female categories",
      "Create inclusive policies that consider non-binary identities and individual circumstances",
      "Exclude them from competition",
      "Create a separate non-binary category for all sports"
    ],
    correctAnswer: 1,
    explanation: "Inclusive organizations work with non-binary athletes individually, considering their needs and sport-specific requirements rather than applying one-size-fits-all solutions."
  },
  {
    id: 10,
    category: "Creating Inclusive Culture",
    question: "What is the most important factor in creating a transgender-inclusive sports environment?",
    options: [
      "Having at least one transgender athlete or staff member",
      "Comprehensive policies backed by visible leadership commitment, education, and consistent enforcement",
      "Installing gender-neutral facilities",
      "Avoiding all discussion of gender"
    ],
    correctAnswer: 1,
    explanation: "True inclusion requires comprehensive policies, visible leadership commitment, ongoing education, and consistent enforcement. It's about systemic change, not token gestures."
  }
];

const TransgenderInclusionQuiz = () => {
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

    if (user) {
      const passed = correctAnswers === questions.length;
      const { error } = await supabase
        .from("quiz_results")
        .insert({
          user_id: user.id,
          score: correctAnswers,
          total_questions: questions.length,
          passed: passed,
          quiz_type: 'transgender_inclusion'
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
                  ? "You've demonstrated excellent understanding of transgender inclusion!"
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
                    <p className="text-2xl font-bold my-4">Transgender Inclusion in Sports Assessment</p>
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
                key={currentQuestionData.id}
                value={answers[currentQuestionData.id] !== undefined ? answers[currentQuestionData.id].toString() : ""}
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
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="flex-1"
                >
                  Previous
                </Button>
                {currentQuestion === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={answers[currentQuestionData.id] === undefined}
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TransgenderInclusionQuiz;