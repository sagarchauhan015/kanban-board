# [Kanban Board Application](https://main.d2nq9mz8ggbsl4.amplifyapp.com)

This is a Kanban board application built using React JS that interacts with the provided API from [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment). The application allows users to dynamically adjust the Kanban board based on their grouping and sorting preferences. Users can group tickets by status, user, or priority, and sort the displayed tickets by priority or title. The application also retains the user's view state even after page reload.

## Features

- Group tickets by status, user, or priority.
- Sort tickets by priority or title.
- Visually appealing and responsive design.
- Ability to save the user's view state in local storage.
- Priority levels are defined as Urgent (4), High (3), Medium (2), Low (1), and No priority (0).

## Demo

You can see a live demo of the Kanban board application [here](https://main.d2nq9mz8ggbsl4.amplifyapp.com).

## Installation

To run the Kanban board application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sagarchauhan015/kanban-board.git
   ```

2. Navigate to the project directory:
    ```bash
    cd kanban-board
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your web browser and visit http://localhost:3000 to use the application.


## Usage

1. Click the "display" button to fetch and display the tickets from the provided API.

2. Select one of the three grouping options: "By Status," "By User," or "By Priority."

3. Choose the sorting option: "Priority" or "Title."

4. The Kanban board will dynamically adjust to reflect your choices.

5. The application will save your view state, so you can return to your preferred settings even after a page reload.


## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.

2. Clone the forked repository to your local machine.

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes, commit them, and push to your fork.

5. Open a pull request to the original repository, explaining the changes you made.


## Contact

If you have any questions, suggestions, or feedback, feel free to contact the project maintainer:

- **Name:** Sagar Chauhan
- **Email:** [sagarchauhan015@gmail.com](mailto:sagarchauhan015@gmail.com)


Enjoy using the Kanban board application to manage your tasks efficiently!