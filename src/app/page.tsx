"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CreditCard, FuelIcon, Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Home() {
  const [miles, setMiles] = useState("");
  const [mpg, setMpg] = useState("");
  const [ppl, setPpl] = useState("");
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
          <div>
            <Card className="shadow-xl flex border-0 bg-[#F2668B]">
              <CardTitle className=" px-6">
                <Calculator size={40} className="text-white" />
              </CardTitle>
              <CardContent className="y-6">
                <div className="flex">
                  <Card className="bg-white/20 backdrop-blur-sm border-white/20 w-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div>
                          <label
                            className="block text-white/80 text-sm font-medium mb-1"
                            htmlFor="miles"
                          >
                            Miles
                          </label>
                          <Input
                            id="miles"
                            type="number"
                            className="w-full bg-white/80 text-black"
                            placeholder="Enter miles"
                            onChange={(e) => {
                              setMiles(e.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-white/80 text-sm font-medium mb-1"
                            htmlFor="mpg"
                          >
                            MPG
                          </label>
                          <Input
                            id="mpg"
                            type="number"
                            className="w-full bg-white/80 text-black"
                            placeholder="Enter MPG"
                            onChange={(e) => {
                              setMpg(e.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-white/80 text-sm font-medium mb-1"
                            htmlFor="litres"
                          >
                            Price per litre (pence)
                          </label>
                          <Input
                            id="litres"
                            type="number"
                            className="w-full bg-white/80 text-black"
                            placeholder="Enter litres"
                            onChange={(e) => {
                              setPpl(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center py-8 mb-8">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-[#026873] to-[#03A688] text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-white">
                  <MapPin className="w-6 h-6" />
                  Your Journey Costs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  <Card className="bg-white/20 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CreditCard className="w-6 h-6 text-white/80" />
                        <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
                          Total Cost
                        </span>
                      </div>
                      <div className="text-4xl font-bold text-white mb-1">
                        £{totalCost.toFixed(2)}
                      </div>
                      <p className="text-white/70 text-sm">
                        Enter details above
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/20 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <FuelIcon className="w-6 h-6 text-white/80" />
                        <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
                          Litres Required
                        </span>
                      </div>
                      <div className="text-4xl font-bold text-white mb-1">
                        {litresRequired.toFixed(1)}L
                      </div>
                      <p className="text-white/70 text-sm">Fuel needed</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center py-8 px-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
