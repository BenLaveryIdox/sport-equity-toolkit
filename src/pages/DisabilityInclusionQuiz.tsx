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
    category: "Disability Awareness",
    question: "What is the most appropriate language when referring to someone with a disability?",
    options: [
      "Disabled person",
      "Person with a disability (person-first language)",
      "Handicapped individual",
      "Special needs athlete"
    ],
    correctAnswer: 1,
    explanation: "Person-first language emphasizes the person before the disability, though it's also important to respect individual preferences. Some people prefer identity-first language (e.g., 'disabled person')."
  },
  {
    id: 2,
    category: "Accessibility",
    question: "What is a reasonable accommodation in sports for an athlete with a disability?",
    options: [
      "Any modification they request regardless of cost",
      "Modifications that enable participation without fundamentally altering the sport",
      "No modifications to maintain fairness",
      "Only equipment-based modifications"
    ],
    correctAnswer: 1,
    explanation: "Reasonable accommodations enable participation without fundamentally altering the nature of the sport, balancing inclusion with the integrity of the activity."
  },
  {
    id: 3,
    category: "Physical Accessibility",
    question: "Which of the following is NOT a key component of accessible sports facilities?",
    options: [
      "Ramps and elevators for wheelchair access",
      "Accessible parking spaces near entrances",
      "Separate training times for athletes with disabilities",
      "Accessible locker rooms and restrooms"
    ],
    correctAnswer: 2,
    explanation: "Inclusive facilities should enable all athletes to participate together. Segregation by separate training times undermines inclusion; physical accessibility features allow integrated participation."
  },
  {
    id: 4,
    category: "Communication",
    question: "When communicating with a deaf or hard-of-hearing athlete, what should you do?",
    options: [
      "Speak louder and slower",
      "Face them directly, speak clearly, and provide written information or sign language interpreter when needed",
      "Avoid direct communication and rely on teammates to relay information",
      "Only use written communication"
    ],
    correctAnswer: 1,
    explanation: "Effective communication includes facing the person (for lip reading), speaking clearly, and providing accommodations like interpreters or written materials as needed for the individual."
  },
  {
    id: 5,
    category: "Inclusive Coaching",
    question: "What is the best approach when coaching an athlete with an intellectual disability?",
    options: [
      "Treat them like younger children",
      "Use clear, concrete language and break down skills into smaller steps while respecting their age and abilities",
      "Lower all expectations significantly",
      "Focus only on participation, not skill development"
    ],
    correctAnswer: 1,
    explanation: "Effective coaching adapts teaching methods to the individual's learning style while maintaining age-appropriate respect and developmentally appropriate expectations and goals."
  },
  {
    id: 6,
    category: "Disability Etiquette",
    question: "If you're unsure whether someone needs assistance, what should you do?",
    options: [
      "Provide help immediately without asking",
      "Ignore them to avoid being offensive",
      "Ask if they would like assistance and respect their answer",
      "Wait for them to struggle before offering help"
    ],
    correctAnswer: 2,
    explanation: "Always ask before helping, and respect the person's autonomy. They know their capabilities and needs better than anyone else."
  },
  {
    id: 7,
    category: "Adaptive Equipment",
    question: "What is the purpose of adaptive sports equipment?",
    options: [
      "To give athletes with disabilities an unfair advantage",
      "To enable athletes with disabilities to participate safely and effectively",
      "To segregate athletes with disabilities",
      "To make sports easier for everyone"
    ],
    correctAnswer: 1,
    explanation: "Adaptive equipment levels the playing field by enabling athletes with disabilities to participate fully. It's about equal access, not unfair advantage."
  },
  {
    id: 8,
    category: "Inclusive Programming",
    question: "What is unified sports programming?",
    options: [
      "Sports only for athletes with disabilities",
      "Programs that bring together athletes with and without disabilities on the same team",
      "Separate but equal sports leagues",
      "Modified sports with reduced competition"
    ],
    correctAnswer: 1,
    explanation: "Unified sports promotes inclusion by having athletes with and without intellectual disabilities train and compete together on the same teams, fostering respect and understanding."
  },
  {
    id: 9,
    category: "Mental Health",
    question: "How should sports organizations address mental health disabilities?",
    options: [
      "Mental health is not a real disability",
      "Recognize mental health conditions as legitimate disabilities requiring accommodations and support",
      "Exclude athletes with mental health conditions to avoid liability",
      "Only address physical disabilities"
    ],
    correctAnswer: 1,
    explanation: "Mental health conditions are legitimate disabilities that may require accommodations. Creating supportive environments benefits all athletes' wellbeing."
  },
  {
    id: 10,
    category: "Creating Inclusive Culture",
    question: "What is the most important factor in creating disability-inclusive sports programs?",
    options: [
      "Having the most expensive adaptive equipment",
      "Attitude of inclusion, willingness to make accommodations, and genuine commitment from leadership",
      "Separate programs for athletes with disabilities",
      "Lowering standards for everyone"
    ],
    correctAnswer: 1,
    explanation: "True inclusion starts with attitudes and commitment. While resources help, the most important factor is a genuine organizational commitment to inclusion and willingness to adapt."
  }
];

const DisabilityInclusionQuiz = () => {
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
          quiz_type: 'disability_inclusion'
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
                  ? "You've demonstrated excellent understanding of disability inclusion!"
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
                    <p className="text-2xl font-bold my-4">Disability Inclusion in Sports Assessment</p>
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
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
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

export default DisabilityInclusionQuiz;