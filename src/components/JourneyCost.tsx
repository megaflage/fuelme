import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { MapPin, CreditCard, FuelIcon } from "lucide-react";

function JourneyCost() {
  const [miles, setMiles] = useState("300");
  const [mpg, setMpg] = useState("35");
  const [ppl, setPpl] = useState("145");
  const [totalCost, setTotalCost] = useState(0);
  const [litresRequired, setLitresRequired] = useState(0);

  useEffect(() => {
    if (miles && mpg && ppl) {
      // Convert string inputs to numbers
      const milesNum = parseFloat(miles);
      const mpgNum = parseFloat(mpg);
      const pricePerLitre = parseFloat(ppl); // in pence

      // Calculate gallons needed
      const gallonsNeeded = milesNum / mpgNum;

      // Convert gallons to litres (UK gallon = 4.546 litres)
      const litresNeeded = gallonsNeeded * 4.546;

      // Calculate total cost in pence
      const totalCostPence = litresNeeded * pricePerLitre;

      setTotalCost(totalCostPence / 100);
      setLitresRequired(litresNeeded);
    } else {
      setTotalCost(0);
      setLitresRequired(0);
    }
  }, [miles, mpg, ppl]);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
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
            className="w-full bg-white/95 text-gray-900 border-0 focus:ring-2 focus:ring-white/60 rounded-xl shadow-sm backdrop-blur-sm placeholder:text-gray-500"
            placeholder="e.g. 150"
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
            className="w-full bg-white/95 text-gray-900 border-0 focus:ring-2 focus:ring-white/60 rounded-xl shadow-sm backdrop-blur-sm placeholder:text-gray-500"
            placeholder="e.g. 35"
            onChange={(e) => {
              setMpg(e.target.value);
            }}
          />
        </div>
        <div className="space-y-2">
          <label
            className="block text-white/90 text-sm font-medium"
            htmlFor="litres"
          >
            Fuel Price (pence/L)
          </label>
          <Input
            id="litres"
            type="number"
            value={ppl}
            className="w-full bg-white/95 text-gray-900 border-0 focus:ring-2 focus:ring-white/60 rounded-xl shadow-sm backdrop-blur-sm placeholder:text-gray-500"
            placeholder="e.g. 145"
            onChange={(e) => {
              setPpl(e.target.value);
            }}
          />
        </div>
      </div>

      {/* Journey Results */}
      <div className="mt-8 pt-6 border-t border-white/30">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6 drop-shadow-sm" />
            Your Journey Results
          </h3>
          <p className="text-white/90 text-sm mt-2">
            {miles && mpg && ppl
              ? "Here's what your trip will cost"
              : "Enter your details above to see results"}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 hover:bg-white/30 hover:border-white/50 transition-all duration-300 rounded-2xl shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <CreditCard className="w-8 h-8 text-white drop-shadow-sm" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                £{totalCost.toFixed(2)}
              </div>
              <p className="text-white/90 text-sm font-medium uppercase tracking-wide">
                Total Cost
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/25 backdrop-blur-md border border-white/40 hover:bg-white/30 hover:border-white/50 transition-all duration-300 rounded-2xl shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FuelIcon className="w-8 h-8 text-white drop-shadow-sm" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                {litresRequired.toFixed(1)}L
              </div>
              <p className="text-white/90 text-sm font-medium uppercase tracking-wide">
                Fuel Needed
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default JourneyCost;
