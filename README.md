# React E-commerce Dashboard

## Live Website
[Visit the Live Site](https://b10a8-gadget-heaven-assignment.surge.sh/dashboard)

## Requirement Document
[View Project Requirements](https://docs.google.com/document/d/1SCm1-metHXA_8Iika7R8UDcJZQGtDEKW-P2ieXQw5UE/edit?usp=sharing)

## Project Overview
This project is a React-based e-commerce dashboard where users can explore products, add items to their cart or wishlist, and view product details. The dashboard provides a smooth and intuitive experience, showcasing product functionalities and features to enhance user engagement.

## Features
1. **Add to Cart and Wishlist**:
   - Users can add products to their cart and wishlist with dedicated buttons. Prevents duplicate items in the wishlist.
   - Shows a toast notification for each action with different messages.

2. **Sorting and Price Calculation**:
   - Users can sort products by price in descending order.
   - The total price of items in the cart is dynamically calculated and displayed.

3. **Purchase Flow with Confirmation Modal**:
   - After clicking "Purchase," a modal congratulates the user.
   - Clears the cart and redirects to the homepage after the modal is closed.

4. **404 Page for Invalid Routes**:
   - A custom 404 page is shown for non-existent routes, preventing users from encountering errors or blank pages.

5. **State Persistence**:
   - Cart and wishlist data are stored in local storage, ensuring persistence across page reloads.

## React Fundamentals Used
- **React Functional Components**: Built all UI components using functional components.
- **Hooks**:
  - **useState**: For managing local states such as cart, wishlist, modal visibility, and sorting.
  - **useEffect**: For initializing data from local storage and managing component updates.
- **Conditional Rendering**: Show or hide elements based on state conditions (e.g., Purchase button, modal).
- **Event Handling**: Custom event handlers to manage adding items, sorting, and handling modal visibility.

## Data Management
- **Context API**: Centralized state management for cart and wishlist data, making it accessible across components.
- **Local Storage**: Persistent storage of cart and wishlist data, which is reloaded when the user revisits or refreshes the site.

