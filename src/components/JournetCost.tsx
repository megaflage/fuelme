import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
    <div className="space-y-6">
      <Card className="bg-transparent border-0">
        <CardContent className="pb-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                className="block text-white/90 text-sm font-medium"
                htmlFor="miles"
              >
                Distance (Miles)
              </label>
              <Input
                id="miles"
                type="number"
                value={miles}
                className="w-full bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-white/50 placeholder:text-white/60"
                placeholder="e.g. 300"
                onChange={(e) => {
                  setMiles(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-white/90 text-sm font-medium"
                htmlFor="mpg"
              >
                Car Efficiency (MPG)
              </label>
              <Input
                id="mpg"
                type="number"
                value={mpg}
                className="w-full bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-white/50 placeholder:text-white/60"
                placeholder="e.g. 35"
                onChange={(e) => {
                  setMpg(e.target.value);
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/20 backdrop-blur-sm border-white/30">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FuelIcon className="w-8 h-8 text-white" />
          </div>
          <div className="text-4xl font-bold text-white mb-2">
            {litresRequired.toFixed(1)}L
          </div>
          <p className="text-white/80 text-sm font-medium uppercase tracking-wide">
            Fuel Required
          </p>
          {miles && mpg && (
            <p className="text-white/60 text-xs mt-2">
              For {miles} miles at {mpg} MPG
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default RequiredFuel;
