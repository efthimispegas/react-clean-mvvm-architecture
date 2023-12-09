# React Clean MVVM Architecture

This project is an implementation of a clean and maintainable React application based on the MVVM (Model-View-ViewModel) architectural pattern. It demonstrates best practices such as the SOLID principles, object calisthenics, clean architecture, and clean code. The project aims to provide a solid foundation for building scalable and maintainable React applications, serving as a helpful resource for the community.

## Overview

The project is organized into different layers, each with its own responsibility, ensuring a clear separation of concerns. The main layers of the architecture are:

- \__tests__ : Contains tests for the project's files
- api: Holds the API related logic and the Network configuration for CRUD operations (get, post, put, delete).
- app: A module that contains the context (store management), domain (services, models, interfaces, DTO adapters and business use cases), pages, utilities and reusable components.
- helpers: Contains any helper methods for extra calculations, data formattng etc.
- routes: Contains everything related to Navigation management and routing.
- fixtures: Contains the data models' fixtures (dummy data etc.).
- constants: Defines all constants throughout the project.
- components: Contains the reusable components that will be utilized to implement the app's UI.

## Project Structure

```
src/
|─ __tests__/
|      └─ api/
|      └─ app/
|      └─ ...
|
├─ app/
│   └─ __tests__/
|          ├─ components/
│          ├─ contexts/
│          ├─ domain/
|          └─ utils/
│          └─ pages/
│   ├─ components/
│   ├─ contexts/
│   ├─ domain/
|   |    └─ Book/
|   └─ utils/
│   └─ pages/
|
│
├─ constants/
│
├─ fixtures/
│
├─ helpers/
|
└─ routes/


```

## Getting Started

Follow these steps to set up and run the project on your local machine:

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- Git

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your_username/React-Clean-MVVM-Architecture.git
   ```

2. Change into the project directory:

   ```
   cd React-Clean-MVVM-Architecture
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Run the development server:

   ```
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Contributing

We welcome contributions from the community to improve this project. To contribute, please follow these steps:

1. Fork the project repository.
2. Create a new feature branch from the `main` branch.
3. Make your changes and commit them with a clear and descriptive commit message.
4. Push your changes to the feature branch on your fork.
5. Open a pull request targeting the `main` branch in the original repository.

Please make sure to read and follow the [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
