"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CreditCard, FuelIcon, Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RequiredFuel from "@/components/JournetCost";

export default function Home() {
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
    <div className="font-sans min-h-screen flex flex-col bg-[#011F26]">
      <main className="flex-1 flex justify-center px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-3xl">
          <div className="text-center  text-white/80 font-bold text-5xl mb-8">
            <div className="flex items-center justify-center gap-2">
              <h1>Fuel calculator</h1>
              <FuelIcon size={50} />
            </div>
          </div>
          <div className="mb-12">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-[#F2668B] to-[#E91E63]">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl flex items-center justify-center gap-3 text-white">
                  <Calculator size={32} className="text-white" />
                  Calculate Your Journey
                </CardTitle>
                <p className="text-white/80 text-sm mt-2">
                  Enter your trip details below
                </p>
              </CardHeader>
              <Tabs className="w-full" defaultValue="JourneyCost">
                <div className="flex items-center justify-center mb-6">
                  <TabsList className="bg-white/10 border border-white/20 rounded-lg">
                    <TabsTrigger
                      value="JourneyCost"
                      className="data-[state=active]:bg-white data-[state=active]:text-black text-white/80"
                    >
                      Journey Cost
                    </TabsTrigger>
                    <TabsTrigger
                      value="RequiredFuel"
                      className="data-[state=active]:bg-white data-[state=active]:text-black text-white/80"
                    >
                      Required Fuel
                    </TabsTrigger>
                    <TabsTrigger
                      value="MPGCalculator"
                      className="data-[state=active]:bg-white data-[state=active]:text-black text-white/80"
                    >
                      MPG Calculator
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="JourneyCost">
                  <CardContent className="pb-8">
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
                          className="w-full bg-white/90 text-black border-0 focus:ring-2 focus:ring-white/50"
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
                          className="w-full bg-white/90 text-black border-0 focus:ring-2 focus:ring-white/50"
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
                          className="w-full bg-white/90 text-black border-0 focus:ring-2 focus:ring-white/50"
                          placeholder="e.g. 145"
                          onChange={(e) => {
                            setPpl(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    {/* Journey Results */}
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
                          <MapPin className="w-6 h-6" />
                          Your Journey Results
                        </h3>
                        <p className="text-white/80 text-sm mt-2">
                          {miles && mpg && ppl
                            ? "Here's what your trip will cost"
                            : "Enter your details above to see results"}
                        </p>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/25 transition-colors">
                          <CardContent className="p-6 text-center">
                            <div className="flex items-center justify-center gap-2 mb-3">
                              <CreditCard className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">
                              £{totalCost.toFixed(2)}
                            </div>
                            <p className="text-white/80 text-sm font-medium uppercase tracking-wide">
                              Total Cost
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/25 transition-colors">
                          <CardContent className="p-6 text-center">
                            <div className="flex items-center justify-center gap-2 mb-3">
                              <FuelIcon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">
                              {litresRequired.toFixed(1)}L
                            </div>
                            <p className="text-white/80 text-sm font-medium uppercase tracking-wide">
                              Fuel Needed
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>

                <TabsContent value="RequiredFuel">
                  <CardContent className="pb-8">
                    <RequiredFuel />
                  </CardContent>
                </TabsContent>

                <TabsContent value="MPGCalculator">
                  <CardContent className="pb-8">
                    <div className="text-center text-white/80">
                      <p>MPG Calculator coming soon...</p>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center py-8 px-6 text-white/70 sticky">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://github.com/megaflage/fuelme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
