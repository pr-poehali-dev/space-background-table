
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <Card className="w-full max-w-sm rounded-xl border border-purple-400 bg-black/70 backdrop-blur-md text-white shadow-[0_0_25px_rgba(155,135,245,0.6)]">
        <div className="p-4">
          <div className="bg-gray-900/80 p-4 rounded-lg mb-4 font-mono text-sm text-purple-100 relative overflow-x-auto">
            <pre className="whitespace-pre-wrap">{scriptText}</pre>
          </div>
          <Button 
            onClick={copyToClipboard} 
            className="w-full bg-purple-700 hover:bg-purple-600 transition-all"
          >
            {copied ? "Copied!" : "Copy Script"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;
