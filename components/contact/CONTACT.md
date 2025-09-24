# Contact Page Documentation

## Overview
The contact page provides a user-friendly interface for visitors to submit inquiries or requests related to Chaeth AI services. It consists of two main sections: a contextual information card and an interactive contact form. Upon submission, the form data is processed, validated, and integrated with the Crisp chat system for seamless support handling.

## Components Structure

### ContactContextCard
- **Location**: `components/contact/contact.tsx`
- **Purpose**: Displays static information about Chaeth AI, including benefits and key features (e.g., Thai-hosted, PDPA-compliant).
- **Layout**: Left-side card with a badge, title, description, and bullet points.
- **Customization**: Modify the text content via the `Typography` components and list items for updates.

### ContactFormCard
- **Location**: `components/contact/contact_form.tsx`
- **Purpose**: Wrapper around the `ContactForm` component, providing a styled container with background and borders.
- **Props**: Accepts `className` and `compact` for layout adjustments, and forwards them to the inner form.

### ContactForm
- **Location**: `components/contact/contact_form.tsx`
- **Purpose**: Core form component handling user input, validation, and submission logic.
- **Form Fields**:
  - Name (required): User's full name.
  - Company Name (required): Company affiliation.
  - Email (required): Business email (validated to exclude Gmail).
  - Phone (required): Contact phone number.
  - Plan (required): Radio selection between "Shared Plan" and "Enterprise Plan".
  - Request (required): Textarea for detailed needs and requirements.
- **Validation**: Client-side checks for required fields and email format; errors are displayed inline.
- **Submission Flow**:
  1. Form validation occurs on submit.
  2. If valid, a simulated API call (currently a 1-second delay) is triggered.
  3. On success, the form transitions to a success state with a confirmation message.
  4. Crisp integration is initiated (see below).
  5. Users can reset the form to submit another request.

## Submission and Integration

### Local Submission Process
- **Simulated Backend**: The form includes a placeholder for a real API route (e.g., via Next.js API routes). Currently, it uses a `setTimeout` to mimic an async operation.
- **Success Handling**: After submission, the form displays a success message and allows resetting.
- **Error Handling**: Any errors during the simulated API call are caught, but the UI remains stable.

### Crisp Chat Integration
- **Purpose**: Form submissions are pushed to the Crisp chat system to notify support agents and pre-populate user data for efficient handling.
- **Integration Point**: Handled via `components/contact/contact_crisp_handler.tsx`, a modular hook that interacts with the Crisp SDK.
- **What Happens on Submission**:
  1. **Set User Details**: User's name (as nickname), email, phone, and company are set in Crisp using `$crisp.push(["set", "user:*", [value]])`.
  2. **Send Message**: A formatted text message is sent to the chat, including all form data (name, company, email, phone, plan, request). Example message:
     ```
     New Contact Request:
     - Name: [User's Name]
     - Company: [Company Name]
     - Email: [Email Address]
     - Phone: [Phone Number]
     - Plan: [Selected Plan]
     - Request: [Request Details]
     ```
  3. **Chatbox Behavior**: The chatbox does NOT open automatically to avoid intruding on the user experience. Data is available only when the user opens the chat manually.
- **Technical Notes**:
  - Uses async-safe `$crisp.push()` calls for reliability.
  - Includes console logging for debugging (e.g., `[Crisp] Sent message: ...`).
  - Error handling with try-catch blocks to log any SDK failures without breaking the form.
  - Crisp SDK is initialized globally in `app/providers.tsx`.

## Usage and Customization

### Using the Contact Page
- The full page is exported as default from `components/contact/contact.tsx` and can be used as a route (e.g., `/contact`).
- Individual components (`ContactContextCard`, `ContactFormCard`) are named exports for embedding elsewhere.

### Extending the Form
- Add new fields by updating the `ContactFormData` interface and form JSX.
- Modify validation logic in the `handleSubmit` function.
- Customize styling via Tailwind classes or the `className` props.

### Localization
- The site supports bilingual content (English and Thai). Form labels and messages can be translated via the content system (e.g., `content/en.ts`), but core logic remains in English for simplicity.

### Testing
- Submit the form with test data to verify Crisp integration.
- Check the browser console for Crisp logs during submission.
- Ensure the chatbox remains closed and data appears only on manual open.

## Dependencies
- **React/Next.js**: For component rendering and state management.
- **Crisp SDK**: Installed via NPM; configured in `app/providers.tsx`.
- **UI Components**: Uses Shadcn UI elements (e.g., `Textarea`, `Button`) and global components (e.g., `Typography`).

For further modifications or issues, refer to the code comments or contact the development team.
