# DoIt Quiz App

This project contains a single-page quiz application. Quiz data is stored separately under the `data/` directory.

## Quiz Data

`data/quizzes.json` is a JSON array of category objects. Each object has the following structure:

```json
{
  "category": "<Main category> | <Sub category>",
  "questions": [
    {
      "qid": <number>,
      "question": "<question text with {0} style placeholders>",
      "answers": ["<answer string>", ...],
      "detailedCategory": "<breadcrumb for the question>"
    }
  ]
}
```

All quiz categories are listed in this array. The application loads this file during initialization to populate the `allQuizzes` array used throughout the game.
