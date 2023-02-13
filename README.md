# Boss CLI
A CLI for a complete Flutter, Java Spring, Redis and PostgreSQL monorepo project stack.

Services should own their data - thus each service has its own DB.

Query System based on GraphQL

Tech stack used:
- NGINX (Direct install on server. Remember to have maintanance page)
- Java Spring
- Java Spring Cloud Config
- Flutter for mobile development
- Redis for performance-critical data
- PostgreSQL for long-lived data
- Docker Swarm (smaller deployments) or Kubernetes (Big deployements) for cluster orchestration 
- OAuth for authorization
- Kafka for event streaming (pub/sub)
- Google Analytics for reporting
- Logspout with Papertrial for logging

Design principles to keep in mind:
- https://12factor.net/
- https://freecontent.manning.com/designing-business-logic-in-a-microservice-architecture/

For building custom command-line tool:
http://yargs.js.org/

Repo config stored in repo.config?
