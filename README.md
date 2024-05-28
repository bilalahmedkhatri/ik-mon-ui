# Monitor App

## Overview

Monitor App is a comprehensive solution for capturing and managing user screen activity. The application consists of a client-side application that sends screen data to a server, which then processes and stores this data. The backend is managed using Django, and user profiles are integrated with a React frontend via Django REST Framework (DRF).

## Features

- **Client Application**: Captures screen data from users and sends it to the server.
- **Server Application**: Receives and processes screen data from the client.
- **Backend Management**: Uses Django to manage user profiles and details, connected to a React app via DRF.
- **React Frontend**: Provides a user-friendly interface for managing and viewing screen data.

## Architecture

1. **Client Application**:

   - Captures screenshots or screen data at specified intervals.
   - Sends data to the server securely.

2. **Server Application**:

   - Receives screen data from the client.
   - Processes the data into images and stores them.

3. **Backend Management**:

   - Manages user profiles and authentication using Django.
   - Provides API endpoints using DRF for frontend interaction.

4. **React Frontend**:
   - Displays screen data and user profiles.
   - Connects to the backend via API endpoints.

## Installation

### Prerequisites

- Python 3.x
- Django
- Django REST Framework
- Flask
- Websockets
- Numpy
- Opencv-python

### Backend (Server)

1. **Clone the repository**:

   ```bash
   git clone
   cd server
   ```

2. **Set up a virtual environment using Pipenv**:

   ```bash
   pip install pipenv
   pipenv shell
   pipenv install
   ```

### Backend Setup (Django)

1. **Clone the repository**:

   ```bash
   git clone
   cd Backend_Frontend
   ```

2. **Set up a virtual environment using Pipenv**:

   ```bash
   pip install pipenv
   pipenv install
   pipenv shell
   ```

3. **Run migrations**:

   ```bash
   python manage.py migrate
   ```

4. **Create a superuser**:

   ```bash
   python manage.py createsuperuser
   ```

   - User Name : admin
   - password : admin

5. **Start the server**:
   ```bash
   python manage.py runserver
   ```

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.

## License

This project is licensed under the MIT License.

## Contact

For questions or inquiries, please contact bilal.azeemlab@gmail.com

---

By following this README, developers can understand the setup, usage, and architecture of the Monitor App, making it easier to contribute and utilize the application effectively.
