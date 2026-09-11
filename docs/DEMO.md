# Demo Flow

If IBM Granite credentials are not available, you can still demonstrate the core logic using DEMO_MODE.

## 1. Setup
Set `DEMO_MODE=True` in `backend/.env`.

## 2. Profile Generation
Go to the frontend, click "Analyze Resume" on the Profile page. The system will hit the mock backend route which will return a predefined profile for a "Software Developer (Fresher)".

## 3. Interview Flow
Navigate to Setup, click Start.
The interface will mock a question (e.g., "Explain the difference between INNER JOIN and LEFT JOIN in SQL.").
Type any text in the answer box and click Submit.
After 2 seconds, the mock evaluation logic will score the answer dynamically and provide feedback, demonstrating the adaptive feedback loop.

## 4. Dashboard
The dashboard uses predefined analytics to showcase how the evaluation scores will look when integrated with the database.
