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
---------------------------------------------------------------------------------------------------------------
for acessing most popular movies in https://developers.themoviedb.org/ 
-> the endpoint is https://api.themoviedb.org/3/movie/popular?api_key=13d5efcce523f6a6a9295002a762efa2&language=en-US&page=1
in case that it fails change the api_key for one that you have. In this case it is my own api_key.
----------------------------------------------------------------------------------------------------------------

# Project
# Important that everything is run in order !!!

## creating user 
  -



# Getting movies in local DB

- Get movies:
-> http://localhost:3000/movies
- Get an specific movie by title 
-> http://localhost:3000/movies?title=example


## API documentation with swagger

 -> http://localhost:3000/docs
