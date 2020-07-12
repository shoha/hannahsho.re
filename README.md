## Getting started
You can start the Next.js server by running:
```bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

Afterwards, you can also start [Storybook](https://github.com/storybookjs/storybook) with:
```bash
docker exec -it hannahshore_app_1 yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to view the component library.

## Formatting and Linting
This repo uses [Prettier](https://github.com/prettier/prettier) and [ESLint](https://github.com/eslint/eslint). You can run them with the following commands:
```bash
# Format all files with prettier to ensure consistency
docker exec -it hannahshore_app_1 yarn prettier --write .

# Check format of files with prettier
docker exec -it hannahshore_app_1 yarn prettier -c .

# Lint with ESLint
docker exec -it hannahshore_app_1 yarn lint
```

## Tests
Tests are written using [Jest](https://github.com/facebook/jest) and can be run with:
```bash
docker exec -it hannahshore_app_1 yarn test
```
