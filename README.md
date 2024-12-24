# Captain Codebase Overview

This document provides a concise explanation of the main elements of the Captain project, structured by file/directory.

---

## 1. **Core Files**

### **`base.dart`**
- **Purpose**: Defines the `Manager` abstract class, intended for components managing specific parts of the app.
- **Key Features**:
  - `init()` method: Called during app startup for initialization.
  - `toString` override for providing titles.

### **`infra.dart`**
- **Purpose**: Provides core infrastructure, including logging and app-wide management.
- **Key Features**:
  - `AppManager` (singleton): Handles app-level initialization and logging via `pprint()`.

### **`state.dart`**
- **Purpose**: Manages global application state.
- **Key Features**:
  - `ApplicationState` class: Extends `ChangeNotifier` for reactive state management.
  - `updateConfig`: Allows controlled updates to the app's configuration.

---

## 2. **UI Files**

### **`screens/home.dart`**
- **Purpose**: Defines the main `HomeScreen` UI.
- **Key Features**:
  - Scaffold with an `AppBar` titled "Captain ©".
  - Integrates the `MainEditor` widget and a `SimpleToolbar`.

### **`widgets/editor.dart`**
- **Purpose**: Implements a rich-text editor interface.
- **Key Features**:
  - `MainEditor` widget:
    - Accepts a list of `Toolbar` objects for customization.
    - Displays a list of toolbar actions and an editable area.
  - `ToolBarItemView` widget: Represents individual toolbar actions.

### **`widgets/toolbars.dart`**
- **Purpose**: Implements toolbars with actions for the editor.
- **Key Features**:
  - `SimpleToolbar`: Includes a "Save" action.

---

## 3. **Data Layer**

### **`data/dto_internal.dart`**
- **Purpose**: Defines the structure of toolbar actions and views.
- **Key Features**:
  - `ActionView`: Represents a toolbar action (title, icon, action handler).
  - `Toolbar`: Holds a collection of `ActionView` objects.

### **`data/config.dart`**
- **Purpose**: Manages application configuration, including themes.
- **Key Features**:
  - `Theme` and `Config` classes: Use Freezed for immutability and JSON serialization.
  - `Config` centralizes app-wide settings.

### **`data/config.g.dart`**
- **Purpose**: Generated serialization/deserialization logic for `Theme` and `Config`.

---

## 4. **Main Entry Point**

### **`main.dart`**
- **Purpose**: Entry point for the application.
- **Key Features**:
  - Initializes `AppManager` and global state (`ApplicationState`).
  - Runs the `MainApp`, which uses `HomeScreen`.

---

## 5. **Miscellaneous**

### **`exp.dart`**
- Placeholder for experiments.

### **`style.dart`**
- Currently unused.

---

## Architecture Summary
- **Core Classes**: `Manager`, `AppManager`, `ApplicationState`.
- **UI Structure**: Modular and reusable widgets (`MainEditor`, `Toolbars`).
- **Data Handling**: Configurable settings through Freezed-based DTOs (`Theme`, `Config`).
- **Logging**: Centralized via `AppManager.pprint`.

This structure ensures modularity, scalability, and clean separation of concerns.
