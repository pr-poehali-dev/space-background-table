
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const scriptText = `script_key="PASTKEYHERE";
(loadstring or load)(game:HttpGet("https://getnative.cc/script/loader"))()`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-background min-h-screen flex items-center justify-center p-4">
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      
      <Card className="w-full max-w-md border-2 border-purple-500 bg-black/80 backdrop-blur-md text-white shadow-[0_0_15px_rgba(155,135,245,0.5)]">
        <CardHeader className="border-b border-purple-500/30">
          <CardTitle className="text-center text-2xl font-bold text-purple-300">Скрипт Лоадер</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="bg-gray-900 p-4 rounded-md mb-4 font-mono text-sm text-purple-200 relative overflow-x-auto">
            <pre className="whitespace-pre-wrap">{scriptText}</pre>
          </div>
          <Button 
            onClick={copyToClipboard} 
            className="w-full bg-purple-700 hover:bg-purple-600 transition-all"
          >
            {copied ? "Скопировано!" : "Копировать скрипт"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
