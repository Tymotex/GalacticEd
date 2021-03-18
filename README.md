# Galactic Ed

This is the repo for the Accenture Hackathon about the Autism Awareness platform. GalacticEd, our prototype, was awarded 1st place out of 37 teams. A presentation for the prototype we built in a day is viewable <a href="https://www.youtube.com/watch?v=uWQ4hUP4L0k">here</a>.

## API Quick Documentation:
A basic view of the currently supported endpoints. 

### Test Routes:

-   GET `/api/test`
-   GET `/api/test/db`
-   POST `/api/test/db`

### Authentication Routes:

- POST `/api/auth/login`
  - Parameters: `email`, `password`
  - Returns: JSON containing `user_id`, `token`, `children` (See <a href="https://gist.github.com/Tymotex/b25b5d6ad9b9a9e8a5c9b0253581abd0">here</a> for details on the `children` object)
- POST `/api/auth/register` 
  - Parameters: `username`, `email`, `password`
  - Returns: JSON containing `user_id`, `token`, `children` (See <a href="https://gist.github.com/Tymotex/b25b5d6ad9b9a9e8a5c9b0253581abd0">here</a> for details on the `children` object)
- POST `/api/auth/register/child`
  - Parameters: `name`, `avatar`, `birthday`, `age`, `learning_style`, `favourite_object`
- DELETE `/api/auth/remove` - an unprotected route that wipes a user with the given email. Testing purposes only
  - Parameters: `email`


#### UNTESTED

- GET `/api/auth/google/login`
- GET `/api/auth/google/login/callback`

### Courses/Lessons Routes:

See <a href="https://gist.github.com/Tymotex/b25b5d6ad9b9a9e8a5c9b0253581abd0">here</a> for example JSON responses returned by the following 3 endpoints

- GET `/api/courses/lessons`
- GET `/api/courses/all`
- GET `/api/courses/full`

### User Profile Statistics and Routes:

#### Profile

- GET `/api/profile/`
  - Parameters: `user_id`, `token`
  - Returns JSON containing the user's profile data (See <a href="https://gist.github.com/Tymotex/b25b5d6ad9b9a9e8a5c9b0253581abd0">here</a> for details)

#### Statistics:

- GET `/api/profile/stats`
  - Parameters: `user_id`, `token`
  - Returns: JSON (See <a href="https://gist.github.com/Tymotex/b25b5d6ad9b9a9e8a5c9b0253581abd0">here</a> for details)
- POST `/api/profile/stats` - saves the child's performance stats
  - Parameters: `user_id`, `child_id`, `course_id` (eg. "shapes"), `lesson_id` (eg. ""), `time_on_completion` (int timestamp in seconds), `num_incorrect`, `time_taken` (float in seconds)
    - Note: the `child_id` is obtained by accessing the endpoint `api/auth/login`
- DELETE `/api/profile/stats` - clears the child's performance data
  - Parameters: `user_id`, `child_id`

### Recommendation Routes:

- GET `/api/recommend/next_lesson` [TODO]
  - Parameters: `user_id`, `child_id`, `course_id`
  - Returns: `lesson_id` of the recommended lesson for the given course


### JSON Formats/Document Schema:
The JSON formats here specify the schema for the MongoDB documents AND what the data structures exchanged between frontend and backend look like.

https://gist.github.com/Tymotex/b25b5d6ad9b9a9e8a5c9b0253581abd0

