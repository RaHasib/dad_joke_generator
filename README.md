# Dad Joke Generator

A minimal dad joke generator built with React and Material-UI following Swiss design principles.

## Live Demo

[https://rahasib.github.io/dad_joke_generator/](https://rahasib.github.io/dad_joke_generator/)

## Features

- Random dad joke generation via icanhazdadjoke API
- Copy to clipboard functionality
- Native share API integration
- Responsive layout
- Loading state handling
- Error boundary implementation

## Technology Stack

- React 18
- Material-UI 5
- Emotion CSS-in-JS
- icanhazdadjoke REST API

## Installation

```bash
git clone https://github.com/RaHasib/dad_joke_generator.git
cd dad_joke_generator
npm install
```

## Development

Start the development server:

```bash
npm start
```

Application runs at `http://localhost:3000`

## Production Build

```bash
npm run build
```

Output directory: `build/`

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

```
src/
├── Components/
│   ├── DadJokes/
│   │   ├── DadJokes.js
│   │   └── useDadJokeApiLogic.js
│   ├── Footer/
│   └── RandomEmoji/
├── styles/
├── App.css
├── theme.js
└── index.js
```

## Design System

**Color Palette**
- Primary: `#18181b`
- Secondary: `#71717a`
- Background: `#fafafa`
- Border: `#e4e4e7`

**Typography**
- Font family: Inter
- Headings: 700 weight
- Body: 400 weight

**Spacing**
- Based on 8px grid system
- Consistent padding and margins

## API Integration

Uses icanhazdadjoke API with custom headers:

```javascript
Accept: 'application/json'
User-Agent: 'Dad Joke Generator'
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## License

MIT License. See LICENSE file for details.

## Acknowledgments

- icanhazdadjoke API
- Material-UI component library
- Create React App