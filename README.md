# Node URL Shortener

> URL shortener service

## Getting Started

This solution uses Docker and Docker Compose.

```
1. Run the service
$ docker compose up

2. Create a new short URL
$ curl -X POST -H "Content-Type: application/json" \
    -d '{"original_url": "https://github.com/brenobaptista"}' \
    http://localhost:3000/urls

3. Get the original URL back
$ curl http://localhost:3000/{hash}

4. Stop and remove containers and networks created by "up" (keep volumes and images).
$ docker compose down

4.1. Stop and remove containers, networks, images and volumes created by "up".
$ docker compose down --rmi all -v
```

## Author

| [![brenobaptista](https://avatars1.githubusercontent.com/u/47641641?s=120&v=4)](https://github.com/brenobaptista) |
| ----------------------------------------------------------------------------------------------------------------- |
| [Breno Baptista](https://github.com/brenobaptista)                                                                |

## License

This project is licensed under the [MIT License](/LICENSE)
