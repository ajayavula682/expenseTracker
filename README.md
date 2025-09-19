# Expense Tracker

A full-stack expense tracker with React frontend and Spring Boot backend.

## Structure

- `/backend`: Java Spring Boot REST API, JWT Security, MySQL, Docker-ready
- `/frontend`: React app, login/register, dashboard, CRUD, summary

## Backend

- Run with `mvn spring-boot:run` in `/backend`
- Configure DB in `application.properties`
- Build Docker image: `docker build -t expense-backend .`

## Frontend

- Run with `npm install && npm start` in `/frontend`
- Edit API URLs in `/src/api/expenseApi.js` if needed

## Authentication

- JWT auth: login/register to get token, use token for protected CRUD

## Deployment

- Run backend and frontend separately, or dockerize backend

## TODO

- Implement controllers, UI forms, and connect frontend & backend
- Add error handling and validation