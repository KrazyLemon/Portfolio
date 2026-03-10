# Portfolio

This repository contains a personal portfolio website built with **React** and **Vite**. It showcases projects, skills, and contact information using a clean, responsive design.

## 🚀 Features

- **Modern tech stack:** React with Vite for fast development and build times.
- **Responsive layout:** Sections for About, Work, Contact, and more.
- **Reusable UI components:** Buttons, modals, slideshows, forms, etc.
- **Multi-language support:** Configured with [i18next](./src/i18next.js).
- **Smooth scrolling** and interactive elements.

## 📁 Project Structure

```
src/
  App.jsx
  main.jsx
  i18next.js
  index.css
  assets/
  components/
    sections/
      About.jsx
      Contact.jsx
      Footer.jsx
      Hero.jsx
      Navbar.jsx
      Work.jsx
    ui/
      Button.jsx
      ContactForm.jsx
      Link.jsx
      Modal.jsx
      Selector.jsx
      Skill.jsx
      Slide.jsx
      SlideShow.jsx
      TopButton.jsx
```

The `public/` folder holds static files served by Vite.

## 🛠 Setup & Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview the production build**
   ```bash
   npm run preview
   ```

5. **Deploy**
   Adjust `package.json` scripts or use your preferred hosting platform (Netlify, Vercel, GitHub Pages, etc.).

## 📦 Dependencies

Major dependencies include:
- react
- react-dom
- vite
- i18next
- react-i18next

Refer to `package.json` for the full list.

## 📝 Customization

- **Styles:** Global styles in `index.css`; component-specific styles scoped within components.
- **Translations:** Add new languages by editing `src/i18next.js` and providing resource files.
- **Components:** Reusable UI elements make it easy to extend the site.

## 🤝 Contributing

This is a personal project, but contributions or suggestions are welcome. Feel free to open an issue or submit a pull request.

## 📄 License

Specify your license here (e.g., MIT).

---

*Last updated: March 10, 2026*