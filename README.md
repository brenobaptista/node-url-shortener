# Node URL Shortener

> URL shortener service

## Getting Started

This solution uses Docker and Docker Compose.

```bash
# Install dependencies (required for development with hot reload)
npm install

# Run the service
docker compose up

# Create a new short URL
curl -X POST -H "Content-Type: application/json" \
    -d '{"original_url": "https://github.com/brenobaptista"}' \
    http://localhost:3000/urls

# Get the original URL back
curl http://localhost:3000/{hash}

# Stop and remove containers and networks created by "up" (keep volumes and images).
docker compose down

# Stop and remove containers, networks, images and volumes created by "up".
docker compose down --rmi all -v
```

## Database Connection

Connect to the PostgreSQL database using any SQL client (e.g., Beekeeper Studio, pgAdmin, DBeaver):

| Property | Value         |
| -------- | ------------- |
| Host     | localhost     |
| Port     | 5432          |
| Database | url_shortener |
| User     | user          |
| Password | password      |

## Author

| [![brenobaptista](https://avatars1.githubusercontent.com/u/47641641?s=120&v=4)](https://github.com/brenobaptista) |
| ----------------------------------------------------------------------------------------------------------------- |
| [Breno Baptista](https://github.com/brenobaptista)                                                                |

## License

This project is licensed under the [MIT License](/LICENSE)
