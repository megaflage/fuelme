# ⛽ FuelMe - Smart Fuel Calculator

> 🚗 A beautiful and intuitive web application to help you calculate fuel costs, efficiency, and plan your journeys with precision.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)

## 🌟 Features

### 💰 Journey Cost Calculator

- **Smart Trip Planning**: Calculate the exact cost of your journey
- **Real-time Updates**: Instant calculations as you type
- **UK Fuel Standards**: Uses UK gallons and pence per litre pricing
- **Distance Input**: Enter your trip distance in miles
- **Efficiency Tracking**: Input your car's MPG for accurate results

### ⛽ Required Fuel Calculator

- **Fuel Planning**: Know exactly how much fuel you need
- **Litres Calculation**: Get results in litres for easy refueling
- **Cost Breakdown**: See both fuel amount and total cost
- **Journey Optimization**: Plan fuel stops effectively

### 📊 MPG Calculator

- **Efficiency Analysis**: Calculate your car's actual fuel efficiency
- **Performance Tracking**: Monitor your vehicle's MPG over time
- **Real Data**: Input actual miles driven and fuel consumed
- **Accuracy**: Precise calculations using UK measurement standards

## 🎨 Design Highlights

- **🌈 Beautiful Gradient UI**: Stunning purple-to-blue gradient design
- **💎 Glass Morphism**: Modern frosted glass effects and backdrop blur
- **📱 Responsive Design**: Perfect on mobile, tablet, and desktop
- **✨ Smooth Animations**: Hover effects and smooth transitions
- **🎯 Intuitive Navigation**: Tab-based interface for easy switching
- **♿ Accessibility**: Built with accessibility best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/megaflage/fuelme.git
   cd fuelme
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action! 🎉

## 🛠️ Tech Stack

- **⚡ Next.js 15.5.2** - React framework with App Router
- **🔷 TypeScript** - Type-safe JavaScript
- **🎨 Tailwind CSS 4** - Utility-first CSS framework
- **🏗️ React 19.1.0** - Latest React with concurrent features
- **🎭 Radix UI** - Accessible component primitives
- **🎯 Lucide React** - Beautiful SVG icons
- **💅 Class Variance Authority** - Component variant management

## 📁 Project Structure

```
fuelme/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind imports
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Main application page
│   ├── components/
│   │   ├── JourneyCost.tsx  # Journey cost calculator component
│   │   ├── JournetCost.tsx  # Required fuel calculator component
│   │   ├── MPGCalculator.tsx # MPG efficiency calculator
│   │   └── ui/              # Reusable UI components
│   │       ├── card.tsx     # Card component
│   │       ├── input.tsx    # Input component
│   │       └── tabs.tsx     # Tabs component
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
└── package.json            # Project dependencies
```

## 🧮 How It Works

### Journey Cost Calculator

1. **Enter Distance**: Input your trip distance in miles
2. **Set Efficiency**: Enter your car's MPG rating
3. **Fuel Price**: Add current fuel price in pence per litre
4. **Get Results**: Instantly see total cost and fuel required

### MPG Calculator

1. **Distance Traveled**: Enter miles you've driven
2. **Fuel Used**: Input litres of fuel consumed
3. **Calculate**: Get your actual MPG efficiency rating

## 🎯 Use Cases

- **📍 Trip Planning**: Budget for long-distance journeys
- **💡 Fuel Budgeting**: Plan monthly fuel expenses
- **🚗 Car Shopping**: Compare fuel efficiency between vehicles
- **📈 Performance Tracking**: Monitor your driving efficiency
- **💰 Cost Analysis**: Understand the true cost of your commute

## 🌍 Localization

- **🇬🇧 UK Standards**: Uses UK gallons (4.546 litres)
- **💷 British Currency**: Pricing in pence per litre
- **📏 Imperial Miles**: Distance measurements in miles

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy FuelMe is using [Vercel](https://vercel.com):

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Auto Deploy**: Automatic deployments on every push to main
3. **Custom Domain**: Add your own domain if desired

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **💾 Commit changes** (`git commit -m 'Add amazing feature'`)
4. **🚀 Push to branch** (`git push origin feature/amazing-feature`)
5. **🔄 Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **Lucide** - For the beautiful icon set

## 📬 Contact

- **GitHub**: [@megaflage](https://github.com/megaflage)
- **Project Link**: [https://github.com/megaflage/fuelme](https://github.com/megaflage/fuelme)

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
  <br>
  <br>
  Made with ❤️ and ⛽ for better fuel management
</div>
