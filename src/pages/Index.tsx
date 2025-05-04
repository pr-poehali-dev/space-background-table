
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
      <div className="stars stars-2"></div>
      <div className="stars stars-3"></div>
      
      <Card className="w-full max-w-sm rounded-xl border border-gray-400 bg-black/90 backdrop-blur-md text-white shadow-[0_0_25px_rgba(255,255,255,0.5)]">
        <div className="p-4">
          <div className="bg-gray-900/80 p-4 rounded-lg mb-4 font-mono text-sm text-blue-100 relative overflow-x-auto">
            <pre className="whitespace-pre-wrap">{scriptText}</pre>
          </div>
          <Button 
            type="button"
            onClick={copyToClipboard} 
            variant="default"
            className="w-full bg-gray-800 hover:bg-gray-700 transition-all"
          >
            {copied ? "Copied!" : "Copy Script"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;
