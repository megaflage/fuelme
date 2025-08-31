import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Gauge } from "lucide-react";

function MPGCalculator() {
  const [miles, setMiles] = useState("300");
  const [litresUsed, setLitresUsed] = useState("30");
  const [calculatedMPG, setCalculatedMPG] = useState(0);

  useEffect(() => {
    if (miles && litresUsed) {
      // Convert string inputs to numbers
      const milesNum = parseFloat(miles);
      const litresNum = parseFloat(litresUsed);

      // Convert litres to gallons (UK gallon = 4.546 litres)
      const gallonsUsed = litresNum / 4.546;

      // Calculate MPG
      const mpg = milesNum / gallonsUsed;

      setCalculatedMPG(mpg);
    } else {
      setCalculatedMPG(0);
    }
  }, [miles, litresUsed]);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            className="block text-white/90 text-sm font-medium"
            htmlFor="calc-miles"
          >
            Distance Traveled (Miles)
          </label>
          <Input
            id="calc-miles"
            type="number"
            value={miles}
            className="w-full bg-white/95 text-gray-900 border-0 focus:ring-2 focus:ring-white/60 rounded-xl shadow-sm backdrop-blur-sm placeholder:text-gray-500"
            placeholder="e.g. 300"
            onChange={(e) => {
              setMiles(e.target.value);
            }}
          />
        </div>
        <div className="space-y-2">
          <label
            className="block text-white/90 text-sm font-medium"
            htmlFor="litres-used"
          >
            Fuel Used (Litres)
          </label>
          <Input
            id="litres-used"
            type="number"
            value={litresUsed}
            className="w-full bg-white/95 text-gray-900 border-0 focus:ring-2 focus:ring-white/60 rounded-xl shadow-sm backdrop-blur-sm placeholder:text-gray-500"
            placeholder="e.g. 30"
            onChange={(e) => {
              setLitresUsed(e.target.value);
            }}
          />
        </div>
      </div>

      {/* MPG Results */}
      <div className="mt-8 pt-6 border-t border-white/30">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
            <Gauge className="w-6 h-6 drop-shadow-sm" />
            Your Car&apos;s Efficiency
          </h3>
          <p className="text-white/90 text-sm mt-2">
            {miles && litresUsed
              ? "Here&apos;s your car&apos;s fuel efficiency"
              : "Enter your details above to calculate MPG"}
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 hover:bg-white/30 hover:border-white/50 transition-all duration-300 rounded-2xl shadow-lg max-w-sm w-full">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Gauge className="w-8 h-8 text-white drop-shadow-sm" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                {calculatedMPG.toFixed(1)} MPG
              </div>
              <p className="text-white/90 text-sm font-medium uppercase tracking-wide">
                Fuel Efficiency
              </p>
              {miles && litresUsed && (
                <p className="text-white/70 text-xs mt-2">
                  {miles} miles using {litresUsed}L of fuel
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MPGCalculator;
