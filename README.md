<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description
Nest js - Typescript and mongo DB repository for movies
## Running the app

Have docker and docker-compose installed,
and then run docker-compose up 

then you have the server running in http://localhost:3000/

## most popular movies in developers.themoviedb.org
----------------------------------------------------------------------------------------------
for acessing most popular movies in https://developers.themoviedb.org/ 
-> the endpoint is https://api.themoviedb.org/3/movie/popular?api_key=13d5efcce523f6a6a9295002a762efa2&language=en-US&page=1 with HTTP verb GET
in case that it fails change the api_key for one that you have. In this case it is my own api_key.
----------------------------------------------------------------------------------------------

# Project

## filling the DB with movies
I take the information from this endpoint -> https://api.themoviedb.org/3/movie/popular?api_key=13d5efcce523f6a6a9295002a762efa2&language=en-US&page=1 
transform it and  save it in the document movies

the endpoint for this process is:
-> http://localhost:3000/api-to-DB    HTTP verb: GET

## getting most popular movies in order by popularity

Endpoint :
-> http://localhost:3000/movies/popular  HTTP verb: GET

## search movies by title
Endpoint:
-> http://localhost:3000/movies?title=example HTTP verb: GET

## create your user

Endpoint:
-> http://localhost:3000/users HTTP verb: POST
Body:
{
  "name": "your_name"
}

## add movie to your favorite list

For adding movies to your favorite list

run the endpoint -> http://localhost:3000/movies?title=example HTTP verb: GET  and save the _id value

run the endpoint -> http://localhost:3000/users?name=example HTTP verb: GET  and save the _id value

now the endpoint for saving to your favorite list is: 
-> http://localhost:3000/movies/favorite HTTP verb: POST

Body:
{
  MovieId: "movie_id",
  userId: "user_id",
  createdAt: "date_and_time_of_this_moment"
}

## list your favorite movies
Endpoint:
-> http://localhost:3000/movies/favorite HTTP verb: GET

## Create your Notes about a movie

follow the steps shown before for getting the movie_id and the user_id, after that the 
Endpoint:
-> http://localhost:3000/movies/note HTTP verb: POST

Body:
{
  MovieId: "movie_id",
  userId: "user_id",
  createdAt: "date_and_time_of_this_moment",
  noteTitle: "title",
  description: "description",
  urlImage: "www.image.com"
}

## Edit your Note title

look for the _id of your note with the help of the 
Endpoint:

-> http://localhost:3000/movies/note HTTP verb: GET

after that use the 
Endpoint:
-> http://localhost:3000/movies/note/id HTTP verb: PATCH
Body: {noteTitle: "new_title"}

## API documentation with swagger
 -> http://localhost:3000/docs
