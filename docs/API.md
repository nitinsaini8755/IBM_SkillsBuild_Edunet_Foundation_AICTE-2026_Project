# API Documentation

## Profile Endpoints
### `POST /api/profile`
Creates a candidate profile.
- **Body**: `{ "target_role": "string", "experience_level": "string", "skills": "string", "education": "string" }`

### `POST /api/resume/analyze`
Analyzes an uploaded resume.
- **Body**: `multipart/form-data` with a `file` field.
- **Response**: `{ "target_role": "string", "experience_level": "string", "skills": "string" }`

## Future Endpoints
- `POST /api/interview/start`
- `POST /api/interview/question`
- `POST /api/interview/answer`
