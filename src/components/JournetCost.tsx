import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { FuelIcon } from "lucide-react";

function RequiredFuel() {
  const [miles, setMiles] = useState("300");
  const [mpg, setMpg] = useState("35");
  const [litresRequired, setLitresRequired] = useState(0);

  useEffect(() => {
    if (miles && mpg) {
      // Convert string inputs to numbers
      const milesNum = parseFloat(miles);
      const mpgNum = parseFloat(mpg);

      // Calculate gallons needed
      const gallonsNeeded = milesNum / mpgNum;

      // Convert gallons to litres (UK gallon = 4.546 litres)
      const litresNeeded = gallonsNeeded * 4.546;

      setLitresRequired(litresNeeded);
    } else {
      setLitresRequired(0);
    }
  }, [miles, mpg]);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            className="block text-white/90 text-sm font-medium"
            htmlFor="rf-miles"
          >
            Distance (Miles)
          </label>
          <Input
            id="rf-miles"
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
            htmlFor="rf-mpg"
          >
            Car Efficiency (MPG)
          </label>
          <Input
            id="rf-mpg"
            type="number"
            value={mpg}
            className="w-full bg-white/95 text-gray-900 border-0 focus:ring-2 focus:ring-white/60 rounded-xl shadow-sm backdrop-blur-sm placeholder:text-gray-500"
            placeholder="e.g. 35"
            onChange={(e) => {
              setMpg(e.target.value);
            }}
          />
        </div>
      </div>

      {/* Required Fuel Results */}
      <div className="mt-8 pt-6 border-t border-white/30">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
            <FuelIcon className="w-6 h-6 drop-shadow-sm" />
            Fuel Required Results
          </h3>
          <p className="text-white/90 text-sm mt-2">
            {miles && mpg
              ? "Here&apos;s how much fuel you&apos;ll need"
              : "Enter your details above to see results"}
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 hover:bg-white/30 hover:border-white/50 transition-all duration-300 rounded-2xl shadow-lg max-w-sm w-full">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FuelIcon className="w-8 h-8 text-white drop-shadow-sm" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                {litresRequired.toFixed(1)}L
              </div>
              <p className="text-white/90 text-sm font-medium uppercase tracking-wide">
                Fuel Required
              </p>
              {miles && mpg && (
                <p className="text-white/70 text-xs mt-2">
                  For {miles} miles at {mpg} MPG
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RequiredFuel;
