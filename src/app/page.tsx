"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FuelIcon, Calculator } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RequiredFuel from "@/components/JournetCost";
import JourneyCost from "@/components/JourneyCost";
import MPGCalculator from "@/components/MPGCalculator";

export default function Home() {
  return (
    <div className="font-sans h-screen flex flex-col bg-gradient-to-br from-[#0f0c29] via-[#24243e] to-[#302b63] overflow-hidden">
      <main className="flex-1 flex justify-center px-6 md:px-12 lg:px-24 py-4 md:py-6 lg:py-8 overflow-y-auto">
        <div className="w-full max-w-3xl">
          <div className="text-center text-white/90 font-bold text-4xl mb-4">
            <div className="flex items-center justify-center gap-2">
              <h1 className="drop-shadow-lg">Fuel calculator</h1>
              <FuelIcon size={40} className="drop-shadow-lg" />
            </div>
          </div>
          <div className="mb-6">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-3xl overflow-hidden backdrop-blur-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl flex items-center justify-center gap-3 text-white">
                  <Calculator size={32} className="text-white drop-shadow-sm" />
                  Calculate Your Journey
                </CardTitle>
                <p className="text-white/90 text-sm mt-2">
                  Enter your trip details below
                </p>
              </CardHeader>
              <Tabs className="w-full" defaultValue="JourneyCost">
                <div className="flex items-center justify-center mb-6 px-4">
                  <TabsList className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-0 shadow-lg w-full max-w-full overflow-x-auto">
                    <div className="flex w-full min-w-max">
                      <TabsTrigger
                        value="JourneyCost"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md text-white/90 data-[state=active]:rounded-2xl rounded-none px-4 py-3 transition-all duration-200 font-medium text-xs sm:text-sm flex-1 min-w-0 whitespace-nowrap hover:bg-white/20 hover:scale-105 data-[state=active]:hover:bg-white data-[state=active]:scale-105"
                      >
                        Journey Cost
                      </TabsTrigger>
                      <TabsTrigger
                        value="RequiredFuel"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md text-white/90 data-[state=active]:rounded-2xl rounded-none px-4 py-3 transition-all duration-200 font-medium text-xs sm:text-sm flex-1 min-w-0 whitespace-nowrap hover:bg-white/20 hover:scale-105 data-[state=active]:hover:bg-white data-[state=active]:scale-105"
                      >
                        Required Fuel
                      </TabsTrigger>
                      <TabsTrigger
                        value="MPGCalculator"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md text-white/90 data-[state=active]:rounded-2xl rounded-none px-4 py-3 transition-all duration-200 font-medium text-xs sm:text-sm flex-1 min-w-0 whitespace-nowrap hover:bg-white/20 hover:scale-105 data-[state=active]:hover:bg-white data-[state=active]:scale-105"
                      >
                        MPG Calculator
                      </TabsTrigger>
                    </div>
                  </TabsList>
                </div>

                <TabsContent value="JourneyCost">
                  <CardContent className="pb-8">
                    <JourneyCost />
                  </CardContent>
                </TabsContent>

                <TabsContent value="RequiredFuel">
                  <CardContent className="pb-8">
                    <RequiredFuel />
                  </CardContent>
                </TabsContent>

                <TabsContent value="MPGCalculator">
                  <CardContent className="pb-8">
                    <MPGCalculator />
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center py-3 px-6 text-white/70 bg-black/10 backdrop-blur-sm">
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
