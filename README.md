# TaskEase

TaskEase is a to-do list application developed with React Native. The goal of TaskEase is to provide a simple and efficient experience for managing your daily tasks, helping you stay organized and productive.

## Features

- **Add Tasks**: Allows you to add new tasks with a title and description.
- **View Tasks**: Displays all added tasks in a list.
- **Edit Tasks**: Enables editing of existing tasks.
- **Remove Tasks**: Allows you to delete unwanted tasks.
- **Mark as Completed**: Lets you mark tasks as completed or pending.

## Technologies Used

- **React Native**: The main framework for developing the application.
- **React Navigation**: For navigation between screens.
- **AsyncStorage**: For local data storage.
- **Axios**: For HTTP requests.
- **Moment**: For date manipulation and formatting.
- **React Native Vector Icons**: Vector icons for React Native.
- **React Native Gesture Handler** and **React Native Reanimated**: For gesture handling.

## Prerequisites

Before you begin, you will need to have the following installed on your machine:

- Node.js
- npm or yarn
- Development environment set up for React Native (Android Studio/Xcode)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/pleasematheus/todo-list.git
```

2. Navigate to the project directory:

```bash
cd todo-list
```

3. Install the dependencies:

```bash
npm install
# or
yarn install
```

## Running the Application

### Android Emulator

1. Start the Metro server:

```bash
npx react-native start
```

2. In another terminal, run the application on the Android emulator:

```bash
npx react-native run-android
```

### iOS Emulator

1. Start the Metro server:

```bash
npx react-native start
```

2. In another terminal, run the application on the iOS emulator:

```bash
npx react-native run-ios
```

## Folder Structure

```
todo-list/
├── android/
├── ios/
├── src/
│   ├── components/       # Reusable components
│   ├── screens/          # Application screens
│   ├── Navigator.js      # Navigation configuration
│   ├── common.js         # Common utility functions
│   ├── commonStyles.js   # Common styles
├── assets/               # Static resources (images, fonts, etc.)
├── App.js                # Main application component
└── package.json
```
