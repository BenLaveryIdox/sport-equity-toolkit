-- Add quiz_type column to quiz_results table to track different quiz types
ALTER TABLE public.quiz_results 
ADD COLUMN quiz_type text NOT NULL DEFAULT 'general_lgbtq';

-- Add a check constraint to ensure valid quiz types
ALTER TABLE public.quiz_results
ADD CONSTRAINT valid_quiz_type CHECK (quiz_type IN (
  'general_lgbtq',
  'transgender_inclusion',
  'disability_inclusion',
  'lgbtq_allyship',
  'inclusive_language'
));