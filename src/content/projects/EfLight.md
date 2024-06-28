---
title: "EfLight"
description: "Reduce the boilerplate code needed to use Entity Framework Core"
date: "Mar 01 2023"
liveLink: "https://eflight.netlify.app/"
repository: "https://github.com/thiomajid/EfLight"
heroImage: "https://www.notion.so/images/page-cover/woodcuts_4.jpg"
tags: [".NET", "Entity Framework Core"]
state: "Paused"
draft: false
---

![EfLight](https://www.notion.so/images/page-cover/woodcuts_4.jpg)

Started as an internal tool while working on [Genesis](/projects/genesis) to abstract away the complexity of Entity Framework Core, EfLight is a NuGet package that provides a set of extension methods and abstractions built on top of _Entity Framework Core_ to reduce the boilerplate code needed to interact with a relational database.

This package is inspired from [JPA](https://en.wikipedia.org/wiki/Java_Persistence_API) and [Spring Data JPA](https://spring.io/projects/spring-data-jpa), thus providing classes like: [`CrudRepository`](https://eflight.netlify.app/api/repositories/crud-repository) and [`PagingAndSortingRepository`](https://eflight.netlify.app/api/repositories/paging-repository).

You can also control your repositories lifetime in your application by using the [`RepositoryLifetime`](https://eflight.netlify.app/api/attributes/repository-lifetime) attribute.
